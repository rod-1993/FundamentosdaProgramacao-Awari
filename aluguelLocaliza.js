
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

class Localiza {
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

var localiza1 = new Localiza();
var bruno = new Cliente("Bruno", 12345678910, 28, "Rua X", 11981027818, "09/09/99", 12345, "foto.png", 2028, "bruno@provedor.com");
var arthur = new Cliente("arthur", 12345678911, 28, "Rua A", 11981027818, "09/09/99", 12345, "foto.png", 2028, "bruno@provedor.com");
var claudio = new Cliente("claudio", 12345678912, 28, "Rua X", 11981027818, "09/09/99", 12345, "foto.png", 2028, "bruno@provedor.com");
var marcela = new Cliente("marcela", 12345678913, 28, "Rua X", 11981027818, "09/09/99", 12345, "foto.png", 2028, "bruno@provedor.com");
//console.log(bruno)

localiza1.addCliente(bruno);
localiza1.addCliente(arthur);
localiza1.addCliente(claudio);
localiza1.addCliente(marcela);

console.log(localiza1.getListarClientes());
console.log(localiza1.getCliente(12345678913));
console.log(localiza1.getCliente(12345678912).getNome());
