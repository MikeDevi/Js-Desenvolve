<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Lista de Tarefas</title>
<style>
  body{
    font-family: Arial;
    background: #f2f2f2;
    padding: 20px;
  }
  .tarefa{
    margin: 6px 0;
    padding: 8px;
    background: #fff;
    border-radius: 6px;
  }
  .concluida{
    text-decoration: line-through;
    color: green;
    font-style: italic;
  }
</style>
</head>
<body>

<h2>Lista de Tarefas</h2>

<input type="text" id="descricao" placeholder="Nova tarefa...">
<button id="btnAdd">Adicionar</button>

<div id="lista"></div>

<script>
  // Array de tarefas
  let tarefas = [];

  function render(){
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index)=>{
      const div = document.createElement("div");
      div.className = "tarefa";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = tarefa.status;
      checkbox.addEventListener("change", ()=>{
        tarefas[index].status = !tarefas[index].status;
        render();
      });

      const span = document.createElement("span");
      span.textContent = tarefa.descricao;
      if(tarefa.status){
        span.classList.add("concluida");
      }

      div.appendChild(checkbox);
      div.appendChild(span);
      lista.appendChild(div);
    });
  }

  document.getElementById("btnAdd").addEventListener("click", ()=>{
    const desc = document.getElementById("descricao");
    if(desc.value.trim() === "") return;

    tarefas.push({
      descricao: desc.value,
      status: false
    });

    desc.value = "";
    render();
  });
</script>

</body>
</html>