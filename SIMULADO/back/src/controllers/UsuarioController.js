import Usuario from '../models/UsuarioModel.js'


export const UsuarioController = {
    novoUsuario: async (req, res) => {
        try {
            const { nome, email } = req.body;
            const usuario = new Usuario({ nome, email })
            const result = await usuario.insertUsuario();
            res.json({ result });



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
    }


}



