const { createClient } = require('@supabase/supabase-js');

// A inicialização do cliente Supabase é movida para dentro do handler
// para usar as variáveis de ambiente do servidor de forma segura.
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

module.exports = async (request, response) => {
  // Permitir requisições de qualquer origem (CORS) - ajuste se necessário para produção
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responder a requisições OPTIONS para pre-flight do CORS
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST']);
    return response.status(405).json({ error: `Method ${request.method} Not Allowed` });
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const payload = request.body;
  const cpfOnly = payload.cpf;

  if (!cpfOnly) {
    return response.status(400).json({ error: 'CPF é obrigatório.' });
  }

  try {
    // Verifica se o aluno já existe pelo CPF
    const { data: existingAlunos, error: fetchError } = await supabase
      .from("Cadastro_Alunos")
      .select("cpf")
      .eq("cpf", cpfOnly);

    if (fetchError) {
      console.error("Erro ao buscar aluno existente:", fetchError);
      return response.status(500).json({ error: 'Erro ao verificar o cadastro.', details: fetchError.message });
    }

    let error = null;
    let successMessage = '';

    if (existingAlunos && existingAlunos.length > 0) {
      // Se o aluno existe, atualiza os dados
      const updatePayload = {
        ...payload,
        ultima_atualizacao: new Date().toISOString(),
      };
      const { error: updateError } = await supabase
        .from("Cadastro_Alunos")
        .update(updatePayload)
        .eq("cpf", cpfOnly);
      error = updateError;
      successMessage = 'Cadastro atualizado com sucesso!';
    } else {
      // Se o aluno não existe, insere um novo registro
      const { error: insertError } = await supabase
        .from("Cadastro_Alunos")
        .insert([payload]);
      error = insertError;
      successMessage = 'Cadastro realizado com sucesso!';
    }

    if (error) {
      console.error("Erro ao salvar no Supabase:", error);
      return response.status(500).json({ error: 'Erro ao salvar no banco de dados.', details: error.message });
    }

    return response.status(200).json({ message: successMessage });

  } catch (error) {
    console.error("Erro inesperado:", error);
    return response.status(500).json({ error: 'Ocorreu um erro inesperado.', details: error.message });
  }
};
