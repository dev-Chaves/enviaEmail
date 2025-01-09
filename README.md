# Email Automation API

## Descrição

Esta API foi desenvolvida em Node.js com o objetivo de automatizar o envio de emails utilizando arquivos Excel (XLSX) como base de dados. Ela permite processar planilhas, extrair informações em formato JSON e enviar emails automaticamente. Futuramente, a API contará com funcionalidades de gerenciamento de super usuários e autenticação.

---

## Tecnologias e Bibliotecas

### Linguagem Principal
- **Node.js**

### Frameworks e Bibliotecas
- **Express**: Framework para construção de APIs.
- **Nodemon**: Monitoramento de mudanças no código durante o desenvolvimento.
- **XLSX (SheetJS)**: Para leitura de arquivos Excel (.xlsx) e conversão para JSON.
- **FS (File System)**: Manipulação de arquivos e caminhos.
- **Nodemailer**: Envio de emails (planejado para implementação futura).

---

## Funcionalidades

1. **Leitura de Arquivos Excel:**
   - Permite upload de planilhas no formato `.xlsx`.
   - Converte o conteúdo para objetos JSON utilizáveis na aplicação.

2. **Envio de Emails:**
   - Automatiza o envio de emails utilizando os dados extraídos do arquivo Excel.

3. **Gerenciamento de Super Usuários (Planejado):**
   - Controle de acesso baseado em permissões para utilização da API.

---

## Como Usar

### Pré-requisitos
- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```
   O servidor estará rodando em `http://localhost:3000` por padrão.

4. Use ferramentas como Postman ou Insomnia para testar os endpoints da API.

---

## Endpoints

### **GET /data**
- **Descrição:** Recebe um arquivo Excel para processamento.
- **Corpo da Requisição:**
  ```json
  {
    "file": "<caminho-do-arquivo.xlsx>"
  }
  ```
- **Resposta:**
  ```json
  {
    "status": "success",
    "data": [
      {
        "coluna1": "valor1",
        "coluna2": "valor2",
        ...
      }
    ]
  }
  ```
---

## Planejamento Futuro
- Implementação do **Nodemailer** para envio de emails com suporte a SMTP.
- Adição de autenticação e gerenciamento de super usuários.
- Melhoria no tratamento de erros e logs.

---

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou reportar problemas. Basta criar um pull request ou abrir uma issue no repositório.

---

## Licença
Este projeto está licenciado sob a **MIT License**.
