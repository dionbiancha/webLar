let form = document.getElementById('formulario');
var nome = document.getElementById('nome');

form.addEventListener('submit', function(e) {

    alert("Obrigado pelo contato "+nome.value);

    e.preventDefault();
});