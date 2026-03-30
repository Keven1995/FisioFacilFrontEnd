# Fisio Facil Frontend

## Configuracao de ambiente

Este projeto usa Vite e variaveis `VITE_*` por ambiente.

Arquivos:
- `.env.development`: usado no `npm run dev`
- `.env.production`: usado no `npm run build`
Variavel obrigatoria:
- `VITE_API_URL`: URL base do backend

## Scripts

- `npm run dev`: inicia ambiente local
- `npm run build`: gera build de producao
- `npm run preview`: sobe preview da build
- `npm run lint`: valida padrao de codigo
