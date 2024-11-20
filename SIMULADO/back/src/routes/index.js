import { Router } from "express";
import{UsuarioController} from '../controllers/UsuarioController.js';


const router = Router();

router.post('/novoUsuario',UsuarioController.novoUsuario); // para criar a funçaõ cadastrar usuario


export default router;
