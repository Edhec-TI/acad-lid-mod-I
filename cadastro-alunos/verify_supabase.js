
const { createClient } = require('@supabase/supabase-js');

// URL e chave anon para o teste
const supabaseUrl = 'https://ooikapmpsvurjhewqfpz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vaWthcG1wc3Z1cmpoZXdxZnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NDk0MTcsImV4cCI6MjA2ODMyNTQxN30.Puxdxlhd359vWi-5b9HYuZP8s7qdXf2i-NidLwjLA-E';

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyConnection() {
  console.log("Tentando conectar ao Supabase e buscar dados...");

  try {
    const { data, error } = await supabase
      .from('Cadastro_Alunos')
      .select('*')
      .limit(5);

    if (error) {
      console.error("\n--- ERRO AO BUSCAR DADOS ---");
      console.error("Mensagem:", error.message);
      if (error.details) console.error("Detalhes:", error.details);
      if (error.hint) console.error("Dica:", error.hint);
    } else {
      console.log("\n--- CONEXÃO BEM-SUCEDIDA ---");
      console.log("Dados recebidos:", data);
    }
  } catch (e) {
    console.error("\n--- ERRO INESPERADO NO SCRIPT ---");
    console.error(e);
  }
}

verifyConnection();
