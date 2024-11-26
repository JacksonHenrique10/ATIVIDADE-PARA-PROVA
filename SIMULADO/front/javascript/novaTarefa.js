// funçaõ para puxar a pagina de usuario

$(document).ready(function () {


    axios.get(`${localStorage.getItem('ipApi')}listarUsuarios`)
        .then(response => {
            console.log(response.data);

            const userSelect = $('#nomeUser');

            userSelect.empty();
            userSelect.append(`<option value="">Selecione um usuário</option>`);
            const users = response.data.users;
            users.forEach(user => {
                userSelect.append(`<option value="${user.id_usuario}">${user.nome}</option>`);
            });
            // alert('Usuario cadastrado com sucesso')
        }).catch(error => {
            // alert('ocorreu um erro');
            console.log(error);


        });

    $(document).off('submit', '#formNovaTarefa'); // linha para ele nao pegar todos os que deram errado e subir para o banco apos da prox tentativa dar certo
    $(document).on('submit', '#formNovaTarefa', async function (event) {
        event.preventDefault();

        console.log(localStorage.getItem('ipApi'));

        const formData = {
            id_usuario: document.getElementById('nomeUser').value,
            descricao: document.getElementById('descricao').value,
            equipe: document.getElementById('equipe').value,
            prioridade: document.getElementById('prioridade').value,

        }

        axios.post(`${localStorage.getItem('ipApi')}novaTarefa`, formData)
            .then(response => {
                console.log(response.data);

                alert('Tarefa cadastrada com sucesso');
            }).catch(error => {
                alert('ocorreu um erro ao cadastrar a Tarefa');

                console.log(error);


            });
    });
})