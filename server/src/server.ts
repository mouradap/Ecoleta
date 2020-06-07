import express from 'express';
import cors from 'cors';
// TypeScript necessita da definição de tipos para cada variável. Uma vez instalado 'npm install @types/express'
//O código apresenta as definições de tipos que a variável recebe.
import path from 'path';
import routes from './routes';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))


// Rota: Endereço completo da requisição;
// Recurso: Qual entidade estamos acessando com a nossa requisição

// GET: Buscar uma ou mais informações do backend.
//      Sempre que o navegador acessa uma rota, ele utiliza a rota GET.
// POST: Criar uma nova informação no backend.
// PUT: Atualizar uma informação existente no backend.
// DELETE: Deletar uma informação do backend.

// Parâmetros
// Request Param: Parâmetros que vão na própria rota para identificar um recurso - obrigatório;
// Query Param: Parâmetros que vão na rota para buscas, filtragem, paginação - não obrigatório;
// Request Body: Parâmetros para criação/atualização de informações

// const users = [
//     'Diego', //0
//     'Cleiton', //1
//     'Robson', //2
//     'Daniel' //3
// ];

//Query param
// app.get('/users/search', (request, response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
//     console.log(filteredUsers)
//     return response.json(filteredUsers);
// });

// app.get('/users', (request, response) => {
//     console.log('Listagem de usuários');

//     return response.json(users);
// });

// //Request param
// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);

//     const user = users[id];
//     return response.json(user)
// });


// app.post('/users', (request, response) => {
//     const data = request.body;
//     console.log(data);

//     const user = {
//         name: data.name,
//         email: data.email
//     };

//     return response.json(user);
// });

app.listen(3333);
