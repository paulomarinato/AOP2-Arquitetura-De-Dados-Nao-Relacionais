
use('universidade');

db.alunos.insertOne({
    nome: "João Silva",
    matricula: "2024001",
    email: "joao.silva@email.com",
    curso: "Ciência da Computação",
    cep: "29100001",
    disciplinas: [
        {
            nome: "Banco de Dados",
            nota1: 8.5,
            nota2: 9.0,
            mediaFinal: 8.75,
            nome_do_professor: "Maria Santos"
        },
        {
            nome: "Programação",
            nota1: 7.0,
            nota2: 8.5,
            mediaFinal: 7.75,
            nome_do_professor: "Pedro Oliveira"
        }
    ]
});


db.alunos.insertMany([
    {
        nome: "Ana Costa",
        matricula: "2024002",
        email: "ana.costa@email.com",
        curso: "Engenharia de Software",
        cep: "29110000",
        disciplinas: [
            {
                nome: "Banco de Dados",
                nota1: 9.5,
                nota2: 9.0,
                mediaFinal: 9.25,
                nome_do_professor: "Maria Santos"
            },
            {
                nome: "Estrutura de Dados",
                nota1: 8.0,
                nota2: 8.5,
                mediaFinal: 8.25,
                nome_do_professor: "Carlos Mendes"
            }
        ]
    },
    {
        nome: "Pedro Alves",
        matricula: "2024003",
        email: "pedro.alves@email.com",
        curso: "Sistemas de Informação",
        cep: "29120000",
        disciplinas: [
            {
                nome: "Programação",
                nota1: 6.5,
                nota2: 7.0,
                mediaFinal: 6.75,
                nome_do_professor: "Pedro Oliveira"
            }
        ]
    },
    {
        nome: "Mariana Lima",
        matricula: "2024004",
        email: "mariana.lima@email.com",
        curso: "Ciência da Computação",
        cep: "29125000",
        disciplinas: [
            {
                nome: "Banco de Dados",
                nota1: 10.0,
                nota2: 9.5,
                mediaFinal: 9.75,
                nome_do_professor: "Maria Santos"
            },
            {
                nome: "Estrutura de Dados",
                nota1: 8.5,
                nota2: 9.0,
                mediaFinal: 8.75,
                nome_do_professor: "Carlos Mendes"
            }
        ]
    },
    {
        nome: "Lucas Ferreira",
        matricula: "2024005",
        email: "lucas.ferreira@email.com",
        curso: "Engenharia de Software",
        cep: "12345678", 
        disciplinas: [
            {
                nome: "Programação",
                nota1: 7.5,
                nota2: 8.0,
                mediaFinal: 7.75,
                nome_do_professor: "Pedro Oliveira"
            }
        ]
    }
]);

print("Alunos cadastrados com sucesso!");


db.professores.insertOne({
    nome: "Maria Santos",
    matricula: "PROF001",
    formacao: "Doutorado em Ciência da Computação",
    cargaHoraria: 35,
    disciplinas: ["Banco de Dados", "Arquitetura de Dados Não Relacionais"]
});


db.professores.insertMany([
    {
        nome: "Pedro Oliveira",
        matricula: "PROF002",
        formacao: "Mestrado em Engenharia de Software",
        cargaHoraria: 32,
        disciplinas: ["Programação", "Algoritmos"]
    },
    {
        nome: "Carlos Mendes",
        matricula: "PROF003",
        formacao: "Doutorado em Ciência da Computação",
        cargaHoraria: 38,
        disciplinas: ["Estrutura de Dados", "Análise de Algoritmos"]
    },
    {
        nome: "Fernanda Rocha",
        matricula: "PROF004",
        formacao: "Mestrado em Sistemas de Informação",
        cargaHoraria: 25,
        disciplinas: ["Redes de Computadores"]
    },
    {
        nome: "Roberto Souza",
        matricula: "PROF005",
        formacao: "Doutorado em Engenharia de Software",
        cargaHoraria: 42,
        disciplinas: ["Engenharia de Software", "Qualidade de Software"]
    }
]);

print("Professores cadastrados com sucesso!");

print("\n=== Professores com carga horária entre 30 e 40 ===");
const professoresFiltrados = db.professores.find({
    cargaHoraria: { $gt: 30, $lt: 40 }
});
professoresFiltrados.forEach(professor => {
    print(`Nome: ${professor.nome}, Carga Horária: ${professor.cargaHoraria}h`);
});

db.professores.updateOne(
    { nome: "Pedro Oliveira" },
    { $set: { formacao: "Doutorado em Engenharia de Software" } }
);
print("\nFormação do professor Pedro Oliveira atualizada!");

const professorAtualizado = db.professores.findOne({ nome: "Pedro Oliveira" });
print(`Nova formação: ${professorAtualizado.formacao}`);

print("\n=== Removendo alunos de Vila Velha ===");
const resultadoRemocao = db.alunos.deleteMany({
    cep: { $gte: "29100001", $lte: "29129999" }
});
print(`Total de alunos removidos: ${resultadoRemocao.deletedCount}`);

print("\n=== Script executado com sucesso! ===");

