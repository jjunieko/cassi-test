# 🏥 CASSI - Teste Frontend (Next.js + Tailwind + Redux)

Este projeto simula a abertura de uma **Notificação de Intermediação Preliminar (NIP)** para beneficiários da CASSI, permitindo o reconhecimento ou não da notificação por parte do usuário.

---

## 🚀 Tecnologias Utilizadas

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Lucide Icons](https://lucide.dev/)
- Componentes desacoplados e reutilizáveis

---

## 📦 Instalação

1. **Clone o repositório**

```bash
git clone <nome-repositorio>
cd <nome-repositorio>

npm install
# ou
yarn


##  Teste
npm run test

## Estrutura

src/
├── app/
│   ├── pages/             # Páginas dinâmicas do App Router
│   ├── services/          # Simulação de backend e mocks
│   └── model/             # Tipagens dos dados
│   └── styles/            # estilo 
│   └── utils/             # utilitários
├── components/            # Componentes reutilizáveis
│   ├── Alerts/
│   ├── Buttons/
│   ├── Header/
│   ├── Footer/
│   └── Modals/
│   └── NipInteraction/
│   └── NotificationBody/
│   └── Providers/
│   └── ui/
├── redux/                 # Redux Toolkit (store + slice)