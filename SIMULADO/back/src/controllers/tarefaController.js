import Tarefa from '../models/TarefaModel.js'


export const TarefaController = {
    novaTarefa: async (req, res) => {
        try {
            const { id_usuario, descricao, equipe, prioridade } = req.body;
            console.log(req.body);
            const status = "NÃO INICIADO";
            console.log(descricao)
            const tarefa = new Tarefa({ id_usuario, descricao, equipe, prioridade, status });
            console.log(tarefa);
            const result = await tarefa.insertTarefa()
            res.json({ tarefa });

            console.log(result)



        } catch (error) {
            res.json({ message: error })
        }
    },

    listarUsuarios: async (req, res) => {
        try {

            const users = await Usuario.listarUsuarios();
            // console.log(users)
            res.json({ users });



        } catch (error) {
            res.json({ message: error })
        }
    },

    listarTarefas: async (req, res) => {
        try {
            console.log("oiuiuiyiyiyiyi")
            const tarefas = await Tarefa.listarTarefas();
            console.log("we",tarefas)
            res.json({ tarefas });



        } catch (error) {
            res.json({ message: error })
        }
    },

    atualizarStatus: async (req, res) => {
        try {
            const {id}=req.params;
            const {status}=req.body;
            const newStatus = status.toUpperCase();
            
            const atualizarStatus = await Tarefa.atualizarStatus(id,status);
          
            res.json({ atualizarStatus });



        } catch (error) {
            res.json({ message: error })
        }
    }



}



