{
  class List {
    constructor() {
      this.data = [];
    }

    add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }

  class ToDoList extends List {
    constructor() {
      super();

      this.usuario = 'Diego';
    }

    mostraUsuario() {
      console.log(this.usuario);
    }
  }

  var MinhaLista = new ToDoList();

  document.getElementById('novo-todo').onclick = function () {
    MinhaLista.add('Novo todo');
  }

  MinhaLista.mostraUsuario();
}



// Desafio
// Questão 01
{
  class Usuario {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }

    isAdmin() {
      return (this.admin) || false;
    }
  }

  class Admin extends Usuario {
    constructor(email, senha) {
      super();
      this.admin = true;
    }
  }

  const User1 = new Usuario('email@teste.com', 'senha123');
  const Adm1 = new Admin('email@teste.com', 'senha123');

  console.log(User1.isAdmin()); // false
  console.log(Adm1.isAdmin()); // true
}



// Questão 02
{
  const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
  ];

  const usersAge = usuarios.map(function (usuario) {
    return usuario.idade;
  });

  const worksOnRocketseat = usuarios.filter(function (usuario) {
    return (usuario.empresa === 'Rocketseat') && (usuario.idade > 18);
  });

  const worksOnGoogle = usuarios.find(function (usuario) {
    return usuario.empresa === 'Rocketseat';
  });

  const doubleAge = usuarios.map(function (usuario) {
    return { ...usuario, idade: usuario.idade * 2 };
  });
  const filterFifty = doubleAge.filter(function (item) {
    return item.idade < 50;
  })

  console.log(usersAge);
  console.log(worksOnRocketseat);
  console.log(worksOnGoogle);
  console.log(filterFifty);
}



// Questão 03
// 3.1
{
  const arr = [1, 2, 3, 4, 5];

  console.log(arr.map(item => item + 10));
}


// 3.2
{
  const usuario = { nome: 'Diego', idade: 23 };

  const mostraIdade = usuario => usuario.idade;

  console.log(mostraIdade(usuario));
}


// 3.3
{
  const nome = "Diogo";
  const idade = 23;

  const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

  console.log(mostraUsuario(nome, idade));
  console.log(mostraUsuario(nome));
  console.log(mostraUsuario());
}


// 3.4
{
  const promise = () => new Promise((resolve, reject) => resolve());

  console.log(promise);
}



// Questão 04
// 4.1 Desestruturação simples
{
  const empresa = {
    nome: 'Rocketseat',
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC',
    }
  };

  const { nome, endereco: { cidade, estado } } = empresa;

  console.log(nome); // Rocketseat
  console.log(cidade); // Rio do Sul
  console.log(estado); // SC}

}


// 4.2 Desestruturação em parâmetros
{
  function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
  }

  console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
}



// Questão 5
// 5.1 Rest
{
  const arr = [1, 2, 3, 4, 5, 6];
  const [x, ...y] = arr;

  console.log(x); // 1
  console.log(y); // [2, 3, 4, 5, 6]


  const soma = (...params) => params.reduce((total, atual) => total + atual)

  console.log(soma(1, 2, 3, 4, 5, 6)); // 21
  console.log(soma(1, 2)); // 3
}


// 5.2 Spread
{
  const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil',
    }
  };

  const usuario2 = { ...usuario, nome: 'Gabriel' };
  console.log(usuario2);

  const usuario3 = { ...usuario, cidade: 'Lontras' };
  console.log(usuario3);
}



// Questão 06
{
  const usuario = 'Diego';
  const idade = 23;

  console.log(`O usuário ${usuario} possui ${idade} anos`);
}



// Questão 07
{
  const nome = 'Diego';
  const idade = 23;

  const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
  };

  console.log(usuario);
}