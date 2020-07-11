"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

{
  var List = /*#__PURE__*/function () {
    function List() {
      _classCallCheck(this, List);

      this.data = [];
    }

    _createClass(List, [{
      key: "add",
      value: function add(data) {
        this.data.push(data);
        console.log(this.data);
      }
    }]);

    return List;
  }();

  var ToDoList = /*#__PURE__*/function (_List) {
    _inherits(ToDoList, _List);

    var _super = _createSuper(ToDoList);

    function ToDoList() {
      var _this;

      _classCallCheck(this, ToDoList);

      _this = _super.call(this);
      _this.usuario = 'Diego';
      return _this;
    }

    _createClass(ToDoList, [{
      key: "mostraUsuario",
      value: function mostraUsuario() {
        console.log(this.usuario);
      }
    }]);

    return ToDoList;
  }(List);

  var MinhaLista = new ToDoList();

  document.getElementById('novo-todo').onclick = function () {
    MinhaLista.add('Novo todo');
  };

  MinhaLista.mostraUsuario();
} // Desafio
// Questão 01

{
  var Usuario = /*#__PURE__*/function () {
    function Usuario(email, senha) {
      _classCallCheck(this, Usuario);

      this.email = email;
      this.senha = senha;
    }

    _createClass(Usuario, [{
      key: "isAdmin",
      value: function isAdmin() {
        return this.admin || false;
      }
    }]);

    return Usuario;
  }();

  var Admin = /*#__PURE__*/function (_Usuario) {
    _inherits(Admin, _Usuario);

    var _super2 = _createSuper(Admin);

    function Admin(email, senha) {
      var _this2;

      _classCallCheck(this, Admin);

      _this2 = _super2.call(this);
      _this2.admin = true;
      return _this2;
    }

    return Admin;
  }(Usuario);

  var User1 = new Usuario('email@teste.com', 'senha123');
  var Adm1 = new Admin('email@teste.com', 'senha123');
  console.log(User1.isAdmin()); // false

  console.log(Adm1.isAdmin()); // true
} // Questão 02

{
  var usuarios = [{
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
  }, {
    nome: 'Gabriel',
    idade: 15,
    empresa: 'Rocketseat'
  }, {
    nome: 'Lucas',
    idade: 30,
    empresa: 'Facebook'
  }];
  var usersAge = usuarios.map(function (usuario) {
    return usuario.idade;
  });
  var worksOnRocketseat = usuarios.filter(function (usuario) {
    return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
  });
  var worksOnGoogle = usuarios.find(function (usuario) {
    return usuario.empresa === 'Rocketseat';
  });
  var doubleAge = usuarios.map(function (usuario) {
    return _objectSpread(_objectSpread({}, usuario), {}, {
      idade: usuario.idade * 2
    });
  });
  var filterFifty = doubleAge.filter(function (item) {
    return item.idade < 50;
  });
  console.log(usersAge);
  console.log(worksOnRocketseat);
  console.log(worksOnGoogle);
  console.log(filterFifty);
} // Questão 03
// 3.1

{
  var arr = [1, 2, 3, 4, 5];
  console.log(arr.map(function (item) {
    return item + 10;
  }));
} // 3.2

{
  var usuario = {
    nome: 'Diego',
    idade: 23
  };

  var mostraIdade = function mostraIdade(usuario) {
    return usuario.idade;
  };

  console.log(mostraIdade(usuario));
} // 3.3

{
  var nome = "Diogo";
  var idade = 23;

  var mostraUsuario = function mostraUsuario() {
    var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
    var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
    return {
      nome: nome,
      idade: idade
    };
  };

  console.log(mostraUsuario(nome, idade));
  console.log(mostraUsuario(nome));
  console.log(mostraUsuario());
} // 3.4

{
  var promise = function promise() {
    return new Promise(function (resolve, reject) {
      return resolve();
    });
  };

  console.log(promise);
} // Questão 04
// 4.1 Desestruturação simples

{
  var empresa = {
    nome: 'Rocketseat',
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC'
    }
  };
  var _nome = empresa.nome,
      _empresa$endereco = empresa.endereco,
      cidade = _empresa$endereco.cidade,
      estado = _empresa$endereco.estado;
  console.log(_nome); // Rocketseat

  console.log(cidade); // Rio do Sul

  console.log(estado); // SC}
} // 4.2 Desestruturação em parâmetros

{
  var mostraInfo = function mostraInfo(_ref) {
    var nome = _ref.nome,
        idade = _ref.idade;
    return "".concat(nome, " tem ").concat(idade, " anos.");
  };

  console.log(mostraInfo({
    nome: 'Diego',
    idade: 23
  }));
} // Questão 5
// 5.1 Rest

{
  var _arr = [1, 2, 3, 4, 5, 6];

  var x = _arr[0],
      y = _arr.slice(1);

  console.log(x); // 1

  console.log(y); // [2, 3, 4, 5, 6]

  var soma = function soma() {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return params.reduce(function (total, atual) {
      return total + atual;
    });
  };

  console.log(soma(1, 2, 3, 4, 5, 6)); // 21

  console.log(soma(1, 2)); // 3
} // 5.2 Spread

{
  var _usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil'
    }
  };

  var usuario2 = _objectSpread(_objectSpread({}, _usuario), {}, {
    nome: 'Gabriel'
  });

  console.log(usuario2);

  var usuario3 = _objectSpread(_objectSpread({}, _usuario), {}, {
    cidade: 'Lontras'
  });

  console.log(usuario3);
} // Questão 06

{
  var _usuario2 = 'Diego';
  var _idade = 23;
  console.log("O usu\xE1rio ".concat(_usuario2, " possui ").concat(_idade, " anos"));
} // Questão 07

{
  var _nome2 = 'Diego';
  var _idade2 = 23;
  var _usuario3 = {
    nome: _nome2,
    idade: _idade2,
    cidade: 'Rio do Sul'
  };
  console.log(_usuario3);
}
