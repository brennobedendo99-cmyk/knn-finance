import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ogjidfjecsmofhuxuqrv.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9namlkZmplY3Ntb2ZodXh1cXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMjgzNzUsImV4cCI6MjA5NTcwNDM3NX0.OhQUsQz5TwvIOfYAdavPdLm_MfVATFQGImE9InJBthc'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const ESCOLA = 'knn-sao-cristovao'

export async function loadData() {
  const { data, error } = await supabase
    .from('financeiro')
    .select('dados')
    .eq('escola', ESCOLA)
    .single()
  if (error || !data) return null
  return data.dados
}

export async function saveData(dados) {
  const { error } = await supabase
    .from('financeiro')
    .update({ 
      dados: dados, 
      atualizado_em: new Date().toISOString() 
    })
    .eq('escola', ESCOLA)
  if (error) console.error('Erro ao salvar:', error)
  else console.log('Salvo com sucesso:', JSON.stringify(dados).substring(0, 100))
}
