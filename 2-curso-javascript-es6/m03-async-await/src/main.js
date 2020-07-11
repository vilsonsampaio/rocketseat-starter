/*
// Aula 01
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();


// Aula 02
import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);

      console.log(response);
    } catch (err) {
      console.warn('Erro na API');
    }
  }
}

Api.getUserInfo('vilsonsampaio');
Api.getUserInfo('vilsonsampaiSFSo');
*/



// Desafio
// 1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('3s');
}

umPorSegundo();


// 1.2
import axios from 'axios';

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.warn('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


// 1.3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response.data);
    } catch (error) {
      console.warn('Repositório não existe');
    }
  }
}

Github.getRepositories('vilsonsampaio/bikcraft');
Github.getRepositories('vilsonsampaio/dslkvmskv');


// 1.4
const buscaUsuario = async (usuario) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);   
  } catch (error) {
    console.warn('Usuário não existe');
  }
}

buscaUsuario('diego3g');
buscaUsuario('asdsdfs');
