const lblEscritorio = document.querySelector("h1");
const btnAtender = document.querySelector("button");
const lblTicket = document.querySelector("small");
const divAlerta = document.querySelector(".alert");
const lblPendientes = document.querySelector("#lblPendientes")
const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has("escritorio")) {
    window.location = "index.html";
    throw new Error("El escritorio es obligatorio");
}

const escritorio = searchParams.get("escritorio");

const socket = io();

socket.on('connect', () => {
    btnAtender.disabled = false;
    divAlerta.style.display = "none"
});

socket.on('disconnect', () => {
    btnAtender.disabled = true;
});

socket.on('tickets-pendientes', (tickets) => {
    lblPendientes.innerText = tickets.length
    if (tickets.length === 0) {
        divAlerta.style.display = ""
        lblPendientes.style.display = "none"
        return;
    }
    divAlerta.style.display = "none"
    lblPendientes.style.display = ""
});


btnAtender.addEventListener('click', () => {
    socket.emit('atender-ticket', {
        escritorio
    }, ({
        ok,
        ticket
    }) => {
        if (!ok) {
            lblTicket.innerText = `Nadie`
            divAlerta.style.display = ""
            lblPendientes.style.display = "none"
            return;
        }
        // const audio = new Audio('./audio/new-ticket.mp3');
        // audio.play();

        // Crear instancia del objeto SpeechSynthesis
        const synth = window.speechSynthesis;

        // Crear instancia de SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(`Ticket ${ticket.numero}`);
        synth.speak(utterance);
        lblTicket.innerText = `Ticket ${ticket.numero}`

    });

});