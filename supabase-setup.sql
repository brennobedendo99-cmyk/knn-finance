-- Execute no Supabase: SQL Editor > New Query > Cole e clique em Run

CREATE TABLE IF NOT EXISTS financeiro (
  id SERIAL PRIMARY KEY,
  escola TEXT UNIQUE NOT NULL,
  dados JSONB NOT NULL DEFAULT '{}',
  atualizado_em TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE financeiro ENABLE ROW LEVEL SECURITY;

CREATE POLICY "leitura_publica" ON financeiro FOR SELECT USING (true);
CREATE POLICY "escrita_publica" ON financeiro FOR INSERT WITH CHECK (true);
CREATE POLICY "atualizacao_publica" ON financeiro FOR UPDATE USING (true);

INSERT INTO financeiro (escola, dados)
VALUES ('knn-sao-cristovao', '{"mensal": [], "transacoes": []}')
ON CONFLICT (escola) DO NOTHING;
