
//Criando classe de Veiculos
class Veiculo {
    constructor(placa, modelo, ano, cor, quilometragem, diaria) {
        this.placa = placa;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.quilometragem = quilometragem;
        this.diaria = diaria;
    }
    getNome() {
        return this.nome
    }
}    

class Esportivo extends Veiculo {
    constructor(placa, modelo, ano, cor, quilometragem, diaria, tmp100km, melhorias) {
        super(placa, modelo, ano, cor, quilometragem, diaria);
        this.tmp100km = tmp100km;
        this.melhorias = melhorias;
    }
}

class Utilitario extends Veiculo {
    constructor(placa, modelo, ano, cor, quilometragem, diaria, qtPassageiros, tmBagageiro, kmlitro) {
        super(placa, modelo, ano, cor, quilometragem, diaria);
        this.qtPassageiros = qtPassageiros;
        this.tmBagageiro = tmBagageiro;
        this.kmlitro = kmlitro;
        
    }
}
//Criando classe de reserva
class Reserva {
    constructor(codigo, carro, cliente, situacao, dtinicio, dtfim) {
        this.codigo = codigo;
        this.carro = carro;
        this.cliente = cliente;
        this.situacao = situacao;
        this.dtinicio = dtinicio;
        this.dtfim = dtfim;
    }
}

//Criando classe Funcionarios e clientes
class Pessoa {
    constructor(nome, cpf, idade, endereço, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.endereço = endereço;
        this.telefone = telefone;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, cpf, idade, endereço, telefone, dtContratacao, salario, qtAlugueis, situacao) {
        super(nome, cpf, idade, endereço, telefone);
        this.dtContratacao = dtContratacao;
        this.salario = salario;
        this.qtAlugueis = qtAlugueis;
        this.situacao = situacao;
        
    }

    getNome() {
        return this.nome;
    }
    
    getCPF() {
        return this.cpf;
    }
}

class Cliente extends Pessoa {
    constructor(nome, cpf, idade, endereço, telefone, dtNascimento, numCarteira, foto, anoVencimento, email) {
        super(nome, cpf, idade, endereço, telefone);
        this.dtNascimento = dtNascimento;
        this.numCarteira = numCarteira;
        this.foto = foto;
        this.anoVencimento = anoVencimento;
        this.email = email;
    }
    
    getNome() {
        return this.nome;
    }
    
    getCPF() {
        return this.cpf;
    }
}
//Criando classe Promoção
class Promocao {
    constructor(titulo, descricao, dtValidade) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dtValidade = dtValidade;
    }
}

class LocalizaCliente {
    constructor() {
        this.clientes = [];
    }
    
    addCliente(cliente) {
        this.clientes.push(cliente);
    }

    getCliente(cpf) {
        return this.clientes.filter(cliente => {
            if(cliente.getCPF() == cpf) {
                return cliente;
            }
        })[0];//o [0] faz retornar o primeiro elemento inserido, buscando pelo CPF
    }

    getListarClientes() {
        return this.clientes;
    }
}

class LocalizaFuncionario {
    constructor() {
        this.funcionarios = [];
    }
    
    addFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    getFuncionario(cpf) {
        return this.funcionarios.filter(funcionario => {
            if(funcionario.getCPF() == cpf) {
                return funcionario;
            }
        })[0];//o [0] faz retornar o primeiro elemento inserido, buscando pelo CPF
    }

    getListarFuncionarios() {
        return this.funcionarios;
    }
}
//Localizar Clientes
var localizaCliente = new LocalizaCliente();
var bruno = new Cliente("Bruno", 12345678910, 28, "Rua X", 11981027818, "09/09/99", 12345, "foto.png", 2028, "bruno@provedor.com");
var arthur = new Cliente("arthur", 12345678911, 28, "Rua A", 11981027818, "09/09/99", 12345, "foto.png", 2028, "bruno@provedor.com");
var claudio = new Cliente("claudio", 12345678912, 28, "Rua X", 11981027818, "09/09/99", 12345, "foto.png", 2028, "bruno@provedor.com");
var marcela = new Cliente("marcela", 12345678913, 28, "Rua X", 11981027818, "09/09/99", 12345, "foto.png", 2028, "bruno@provedor.com");

localizaCliente.addCliente(bruno);
localizaCliente.addCliente(arthur);
localizaCliente.addCliente(claudio);
localizaCliente.addCliente(marcela);

console.log('--------------------------------------------');
console.log('Segue abaixo a lista de CLientes')
console.log(localizaCliente.getListarClientes());
//console.log(localizaCliente.getCliente(12345678913));
console.log('Segue' + localizaCliente.getCliente(12345678912).getNome());
console.log('Segue' + localizaCliente.getCliente(12345678911).getNome());

//Localizar Funcionarios
var localizaFuncionario = new LocalizaFuncionario();
var adolfo = new Funcionario("Adolfo", 12345678910, 29, "Rua Leviatan", 1198888888, "12/02/2020" ,"R$ 3.000,00" ,12 ,"Em aberto")
var carlos = new Funcionario("Carlos", 12345678910, 29, "Rua Carrel", 1198888888, "13/02/2020" ,"R$ 4.000,00" ,12 ,"Em aberto")

localizaFuncionario.addFuncionario(adolfo);
localizaFuncionario.addFuncionario(carlos);

console.log('--------------------------------------------');
console.log('Segue abaixo a lista de funcionários')
console.log(localizaFuncionario.getListarFuncionarios());
