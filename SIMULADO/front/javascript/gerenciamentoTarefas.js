// funçaõ para puxar a pagina de usuario

$(document).ready(async function () {

    const board = {
        "Não Iniciado": document.querySelector("#não-iniciado"),
        "Em Desenvolvimento": document.querySelector("#em-desenvolvimento"),
        "Finalizado": document.querySelector("#finalizado"),
    }



    const statusMapping = {
        "não iniciado": "Não Iniciado",
        "em desenvolvimento": "Em Desenvolvimento",
        "finalizado": "Finalizado",
    }


    async function buscarTarefas() {
        console.log("qasdfg")
        Object.values(board).forEach(column => {
            const cards = column.querySelectorAll('.card');
            cards.forEach(card => card.remove());
        })
        try {
            // console.log("qwertyuiop")
            const response = await axios.get(`${localStorage.getItem('ipApi')}listarTarefas`)
            console.log(response);
            const tasks = response.data.tarefas;


            console.log(tasks);


            tasks.forEach(tarefa => {
                const mappedStatus = statusMapping[tarefa.status?.toLowerCase()];
                const column = board[mappedStatus];

                if (column) {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                    <h3>Descrição:${tarefa.descricao}</h3>
                    <p>Equipe:${tarefa.equipe}</p>
                    <p>Prioridade:${tarefa.prioridade}</p>
                    <p>Vinculado a:${tarefa.nome}</p>
                <div class="card-action">
                    <button class="btn-edit" onclick="carregarPagina('novaTarefa')" href="#" data-id="${tarefa.id_tarefa}">Editar</button>
                    <button class="btn-delete" data-id="${tarefa.id_tarefa}">Delete</button>
                </div>

                <div class="card-status">
                    <select class="status-dropdown" data-id="${tarefa.id_tarefa}">
                        <option value="Não Iniciado" ${mappedStatus === "Não Iniciado" ? 'selected' : ''}>Não Iniciado</option>
                        <option value="Em Desenvolvimento"  ${mappedStatus === "Em Desenvolvimento" ? 'selected' : ''}>Em Desenvolvimento</option>
                        <option value="Finalizado" ${mappedStatus === "Finalizado" ? 'selected' : ''} >Finalizado</option>
                    </select>
                    <button class="btn-save-status" data-id="${tarefa.id_tarefa}">Salvar</button>
                </div>

                `;
                    column.appendChild(card);
                } else {
                    console.warn("Status desconhecido ou coluna nao encontrada", tarefa.status)
                }
            })
        } catch (error) {
            console.warn("Erro ao buscar tarefas", error)

        }

    }
    await buscarTarefas();


    $(document).off('click', '.btn-save-status'); // linha para ele nao pegar todos os que deram errado e subir para o banco apos da prox tentativa dar certo
    $(document).on('click', '.btn-save-status', async function (event) {
        const taskId = $(this).data('id');
        const newStatus = $(`.status-dropdown[data-id='${taskId}']`).val();

        try {
            await axios.put(`${localStorage.getItem('ipApi')}atualizarStatus/ ${taskId}`,{status:newStatus});
            await buscarTarefas();

        } catch (error) {
            console.log(error);
        }
    })


})