function Enviar() {
    var nome = document.getElementById("name");

    if (nome.value != "") {
        alert('Obrigada sr(a) ' + nome.value + ' seus dados foram cadastrados com sucesso, até mais!!');
    }
}