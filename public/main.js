function salvar() {
    console.log('function salvar okay')
    const tarefaNome = document.getElementById('tarefa').value;
    const status = 'paused';
    const data = { tarefaNome, status };
    fetch('tarefas/adiciona', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('enviada')
        location.reload();
    });
}

function alterarStatus(num, id){
    let novoStatus;
    if(num == '1') novoStatus = "Started";
    if(num == '2') novoStatus = "paused";
    if(num == '3') novoStatus = "completed";
    
    const data = { 'status' : novoStatus};
    fetch(`tarefas/altera-status/${id}`, {
        method:"PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        location.reload();
    })
}

function deletarTarefa(id){
    fetch(`tarefas/delete-tarefa/${id}`, {
        method: "DELETE",
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        location.reload();
    })
    
}