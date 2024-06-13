const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como o Bullying se manifesta na sociedade?",
        alternativas: [
            {
                texto: "Se maniesta através de insultos, intimidade, apelidos cruéis, acusaçôes injustas, meter medo na pessoa, que geralmente tem atuaçâo e grupos.",
                afirmacao: "Através de respito e amizades do dia a dia. "
            },
            {
                texto: "Através de respito e amizades do dia a dia.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Quais impactos causam na aúde mental da pessoa que sofre Bullying?",
        alternativas: [
            {
                texto: "Causa ansiedade, baixa autoestima, depressão e, até mesmo tentativas de suicidio, ao algumas das graves consequências do Bullying.",
                afirmacao: "Causa ansiedade, baixa autoestima, depressão e, até mesmo tentativas de suicidio, ao algumas das graves consequências do Bullying."
            },
            {
                texto: "Divertimento e alegria para o dia da pessoa, o deixano mais animada.",
                afirmacao: "Divertimento e alegria para o dia da pessoa, o deixano mais animada."
            }
        ]
    },
    {
        enunciado: "Como ajudar quem sofre Bullying?",
        alternativas: [
            {
                texto: "Abordar o assunto com delicadeza e empatia, ouvir atentamente dando a oportunidade de falar sobre suas experiências e sentimentos em relação ao Bullying",
                afirmacao: "Abordar o assunto com delicadeza e empatia, ouvir atentamente dando a oportunidade de falar sobre suas experiências e sentimentos em relação ao Bullying"
            },
            {
                texto: "Fazer piadas que falam de suas caracteristicas negativas.",
                afirmacao: "Fazer piadas que falam de suas caracteristicas negativas."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Bullying:";
    textoResultado.textContent =  "Todo ato de violência física ou psicológica, intencional e repetitivo que ocorre sem motivação evidente, praticado por indivíduo ou grupo, contra uma ou mais pessoas, com o objetivo de intimidá-la ou agredi-la, causando dor e angústia à vítima";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
