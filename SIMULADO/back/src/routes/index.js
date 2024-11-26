import { Router } from "express";
import { UsuarioController } from '../controllers/UsuarioController.js';
import { TarefaController } from "../controllers/tarefaController.js";


const router = Router();

router.post('/novoUsuario', UsuarioController.novoUsuario); // para criar a funçaõ cadastrar usuario
router.get('/listarUsuarios', UsuarioController.listarUsuarios); //funçaõ lista usuarios
router.post('/novaTarefa', TarefaController.novaTarefa); //função nova tarefa
router.get('/listarTarefas',TarefaController.listarTarefas);
router.put('/atualizarStatus/:id',TarefaController.atualizarStatus);


export default router;
