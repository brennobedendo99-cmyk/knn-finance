# KNN Finance v2 — Guia de Publicação

## ETAPA 1 — Supabase (banco de dados)

1. Acesse https://supabase.com → "Start your project"
2. Login com Google ou crie conta com email
3. "New project" → Nome: knn-finance → Região: South America
4. Aguarde ~2 minutos

### Criar tabela:
5. Menu lateral → "SQL Editor" → "New query"
6. Copie o conteúdo de `supabase-setup.sql` e cole → clique "Run"

### Pegar credenciais:
7. Menu lateral → "Project Settings" → "API"
8. Copie o "Project URL"
9. Copie o "anon public" key

## ETAPA 2 — Configurar credenciais

1. Abra `src/supabase.js`
2. Substitua COLE_SUA_URL_AQUI pela URL copiada
3. Substitua COLE_SUA_CHAVE_AQUI pela chave copiada
4. Salve

## ETAPA 3 — GitHub

1. Acesse https://github.com → crie conta
2. "New repository" → Nome: knn-finance → "Create repository"
3. Faça upload de todos os arquivos desta pasta

## ETAPA 4 — Vercel

1. Acesse https://vercel.com → "Sign Up" com GitHub
2. "Add New Project" → selecione "knn-finance"
3. Clique "Deploy" → aguarde ~1 minuto

Seu link estará pronto: https://knn-finance.vercel.app

## Atualizar no futuro (sem perder dados!)

Quando quiser modificar o sistema:
1. Baixe o novo App.jsx
2. Substitua o arquivo no GitHub
3. O Vercel republica automaticamente
4. Os dados no Supabase ficam intactos ✅
