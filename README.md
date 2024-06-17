# Conexa Challenge

Desafio de frontend pleno - conexa


# Funcionalidade

usuario pode agendar uma consulta em horarios determinados

## Arquitetura

|Pasta|Descrição|
|--|--|
| components                                                                                                                                                                                                                                            | Components genericos da aplicação |
| context                                                                                                                                                                                                                                            | Gerenciamento de estado da aplicação |
| enums                                                                                                                                                                                                                                            | Enums da aplicação |
| lib | Configurações de bibliotecas externas |
| services| Integracões com serviços externos |
| styles| Arquivos de temas e css global |
| templates| Template das paginas |
| types | Tipos compartilhados dentre as camadas da aplicação |
| utils | Funções utilitarias |


## Ferramentas

 

|Biblioteca| versão |  
|--|--|
| @radix-ui/react-avatar | ^1.0.4 |
| @radix-ui/react-dialog | ^1.0.5 |
| axios | ^1.7.2 |
| date-fns| ^3.6.0 |
| json-server| 1.0.0-beta.1 |
| lucide-react| ^0.395.0 |
|react | ^18.2.0|
|react-day-picker| ^8.10.1 |
|react-dom|^18.2.0|
|react-star-rating-component|^1.4.1|
|sonner|^1.5.0|
|tailwind-variants|^0.2.1|
|tailwindcss|^3.4.4|
|storybook|^8.1.9|
|@testing-library/react|^16.0.0|
|vitest|^1.6.0|
|@vitest/ui|^1.6.0|
|prettier|^3.3.2|
|eslint|^8.57.0|
|typescript|^5.2.2|

## Variaveis de ambiente
crie uma copia do `.env.exemple` e renomeie para `.env` e adicione este valor `http://localhost:3000` para a variavel `VITE_APP_API_URL`

## Rodando localmente

clone o repositorio

    git clone https://github.com/LuisCarlos-git/conexa-challenge.git
em seguida entre na pasta 

    cd ./conexa-challenge
caso use pnpm rode  a seguinte instrução para instalar as dependencias do projeto

    pnpm i
caso use npm delete o arquivo `pnpm.lock.json` e execute o seguinte comando para instalar as dependencias do projeto

    npm i
após instalar as dependencias execute o seguinte comando para rodar o backend 

    pnpm jsonserver:up | npm run jsonserver:up
com o servidor rodando em outro terminal execute o comando para rodar o projeto

    pnpm dev | npm run dev

agora e so usar a aplicação

## Scripts importantes
aqui vao alguns scripts importantes no projeto
 (usarei pnpm como gerenciador de pacotes aqui mas sinta-se avontade para usar o da sua preferencia)

  
|Comando| Descirção |
|--|--|
| `pnpm storybook` | roda o storybook com a documentação de components do projeto |
| `pnpm test` | roda os testes unitarios no terminal juntamente com coverage |
| `pnpm test:ui` | roda os testes unitarios no terminal e na ui juntamente com coverage |
| `pnpm test:coverage` | roda os testes unitarios e gera o ariquivo de coverage |


Qualquer duvida estou a disposição para ajudar no email : luiscarlosbastos1107@gmail.com 