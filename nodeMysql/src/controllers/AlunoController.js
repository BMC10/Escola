const database = require('../databases/connection')       //importando nossa variável de conexão
const path = require("path")

class AlunoController{

    novoAluno(request, response){
        response.render(path.join(__dirname, '../views/index.ejs'))   //Se for html é sendFile

        const {matricula, nome, turma, email, genero} = request.body
        console.log(matricula, nome, turma, email, genero)

        database.insert({matricula, nome, turma, email, genero}).table("alunos").then(data =>{
            console.log(data)
            response.json({message: 'Aluno criado com sucesso!'})
        }). catch(error => {
            console.log(error)
        })

    }

    listarAluno(request, response){
        database.select('*').from("alunos").then(alunos =>{     //.from ou .table
            console.log(alunos)
            response.json(alunos)
        }). catch(error => {
            console.log(error)
        })
    }

    buscarAluno(request, response){
        const id = request.params

        database.select('*').from("alunos").where({matricula:id.matricula}).then(alunos =>{     
            console.log(alunos)
            response.json(alunos)
        }). catch(error => {
            console.log(error)
        })  
    }

    deletarAluno(request, response){
        const id = request.params

        database.where({matricula:id.matricula}).del().table("alunos").then(alunos =>{     
            console.log(alunos)
            response.json({message: 'Aluno deletado com sucesso!'})
        }). catch(error => {
            console.log(error)
        })  
    }

    atualizarAluno(request, response){
        const id = request.params
        const {matricula, nome, turma, email, genero} = request.body

        database.where({matricula:id.matricula}).update({matricula, nome, turma, email, genero}).table("alunos").then(alunos =>{     
            console.log(alunos)
            response.json(alunos)
        }). catch(error => {
            console.log(error)
        })  
    }
    

}
module.exports = new AlunoController()