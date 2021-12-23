var cont = 0
function addTarefa(){
  cont++;
  var tarefa = document.getElementById("tarefa").value;
  var fazer =  document.getElementById("fazer");
  fazer.innerHTML += "<br> <input type=\"checkbox\"><label>" +  tarefa +"</label>";
}

