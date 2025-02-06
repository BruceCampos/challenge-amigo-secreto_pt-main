//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Desafio

let amigos = [];
        
        function adicionarAmigo() {
            let input = document.getElementById("amigo");
            let nome = input.value.trim();
            if (!nome) {
                alert("Digite um nome valido.");
                return;
            }
            if (nome && !amigos.includes(nome)) {
                amigos.push(nome);
                atualizarLista();
                input.value = "";
            }
        }
        
        function atualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(nome => {
                let li = document.createElement("li");
                li.textContent = nome;
                lista.appendChild(li);
            });
        }
        
        function sortearAmigo() {
            if (amigos.length < 2) {
                alert("É preciso pelo menos dois participantes.");
                return;
            }
            let ganhador = amigos[Math.floor(Math.random() * amigos.length)];
            document.getElementById("resultado").innerHTML = `<h3>O amigo secreto sorteado é: ${ganhador}</h3>`;
            amigos = [];
            atualizarLista();
        }

