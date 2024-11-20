// funçaõ para puxar a pagina de usuario

$(document).ready(function () {
    $(document).on('submit', '#formUsuario', async function (event) {
        event.preventDefault();
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
        }

        axios.post(`${localStorage.getItem('ipApi')}novoUsuario`, formData)
            .then(response => {
                alert('Usuario cadastrado com sucesso')
            }).catch(error => {
                alert('ocorreu um erro');

            })
    })
})