
// Pega todos os cards dos produtos
const cards = document.querySelectorAll(".card");


// Passa por cada card
cards.forEach(card => {

    // Pega os elementos daquele card
    const botaoMenos = card.querySelector(".menos");
    const botaoMais = card.querySelector(".mais");
    const numero = card.querySelector(".numero");
    const botaoComprar = card.querySelector(".comprar");


    // Começa com quantidade 1
    let quantidade = 1;


    // ================= BOTÃO MENOS =================

    botaoMenos.addEventListener("click", () => {

        if (quantidade > 1) {

            quantidade--;

            numero.textContent = quantidade;

        }

    });


    // ================= BOTÃO MAIS =================

    botaoMais.addEventListener("click", () => {

        quantidade++;

        numero.textContent = quantidade;

    });


    // ================= BOTÃO COMPRAR =================

    botaoComprar.addEventListener("click", () => {

        // Impede clicar novamente enquanto está "comprado"
        botaoComprar.disabled = true;


        // Muda o texto
        botaoComprar.textContent = "Comprado! ✓";


        // Adiciona a classe para mudar a aparência
        botaoComprar.classList.add("comprado");


        // Mostra no console o que foi comprado
        console.log(
            "Compra realizada:",
            quantidade,
            "unidade(s)"
        );


        // Depois de 2 segundos
        setTimeout(() => {

            // Volta o botão ao normal
            botaoComprar.textContent = "Comprar";

            botaoComprar.classList.remove("comprado");

            botaoComprar.disabled = false;

        }, 2000);

    });

});

