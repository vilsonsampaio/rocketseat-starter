/*

// Exercício 01
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/vilsonsampaio');
xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}



// Exercício 02
var minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/vilsonsampaio');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição')
        }
      }
    }
  })
}


minhaPromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  })
;



// Exercício 03
axios.get('https://api.github.com/users/vilsonsampaio')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  })
;

*/





// Desafio
// Questao 01
function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      if (idade > 18) {
        resolve()
      } else {
        reject();
      }
    }, 2000)
  })
}

checaIdade(18)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  })
;



// Questão 02
function preencherLista() {
  var username = document.querySelector('input').value || 'diego3g';
  var url = `https://api.github.com/users/${username}/repos`;
  var ulElement = document.querySelector('ul');
  
  ulElement.innerHTML = '<li>Carregando...</li>';

  axios.get(url)
  .then(function(response) {
    ulElement.innerText = '';
    for (data of response.data) {
      var liElement = document.createElement('li');
      liElement.innerText = data.name;
      ulElement.appendChild(liElement);
    }
  })
  .catch(function(error) {
    ulElement.innerText = error;
    console.warn(error);
  })
;
}
