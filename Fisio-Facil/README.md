# Fisio Facil Frontend

## Configuracao de ambiente

Este projeto usa Vite e variaveis `VITE_*` por ambiente.

Arquivos:
- `.env.development`: usado no `npm run dev`
- `.env.production`: usado no `npm run build`
Variavel obrigatoria:
- `VITE_API_URL`: base usada pelo frontend (recomendado `/api` no desenvolvimento)
- `VITE_API_PROXY_TARGET`: alvo real do proxy do Vite (ex.: `http://localhost:8080` ou `http://backend:8080`)

## Scripts

- `npm run dev`: inicia ambiente local
- `npm run build`: gera build de producao
- `npm run preview`: sobe preview da build
- `npm run lint`: valida padrao de codigo
