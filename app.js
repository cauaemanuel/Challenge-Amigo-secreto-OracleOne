//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const inputAmigo = document.getElementById("amigo");
let amigos = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();
    if (nome !== "") {
        amigos.push(nome);
        atualizarLista();
        inputAmigo.value = "";
    }
}

function atualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const li = document.createElement("li");
        li.innerHTML = `O amigo sorteado é: <strong>${sorteado}</strong>`;
        resultado.innerHTML = "";
        resultado.appendChild(li);
        amigos = [];
        atualizarLista();
    } else {
        resultado.innerHTML = "<li>Nenhum amigo na lista para sortear!</li>";
    }
}
