const database = require('../databases/connection')  //importando o arquivo de conexão
const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))

router.use(express.static("public"))


const AlunoController = require('../controllers/AlunoController') // Importando o controler de aluno
const { request } = require('http')

router.get('/novoAluno', AlunoController.novoAluno) 

router.post('/novoAluno', AlunoController.novoAluno)

router.get('/listarAluno', AlunoController.listarAluno)

router.get('/buscarAluno/:matricula', AlunoController.buscarAluno)

router.delete('/deletarAluno/:matricula', AlunoController.deletarAluno)

router.put('/atualizarAluno/:matricula', AlunoController.atualizarAluno)


module.exports = router