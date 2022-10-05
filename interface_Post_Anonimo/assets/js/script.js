
const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button');
const feed = document.querySelector(".feed__box")

function pegarTweet(event) {
    event.preventDefault();
    
    const tweetTextArea = textarea.value;
    criarTweet(tweetTextArea)
}

tweetar.addEventListener('click', pegarTweet)

function criarTweet(tweetTexto) {
    //Texto
    //console.log(tweetTexto)

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    //Objeto
    const tweet = {
        nome: "Anônimo",
        foto: "assets/img/user3.png",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }
    criarTemplateTweet(tweet)
}

//Publicar Tweet
function criarTemplateTweet (tweet) {
    //DESESTRUTURAR  OS ELEMENTOS
    const {nome,foto,usuario,texto,tempo} = tweet

    //CRIANDO ELEMENTOS PARA CRIAR O TEMPLATE
    let li = document.createElement("li");
    li.classList.add("feed__item")
    let img = document.createElement("img");
    img.src = foto

    let div = document.createElement("div");
    div.classList.add("box__post")
    let h2 = document.createElement("h2");
    h2.innerText = nome

    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`
    span.classList.add("user__name")

    let p = document.createElement("p");
    p.innerText = texto

    //ADCIONANDO OS ELEMENTOS DENTRO DA LI
    li.appendChild(img)
    li.appendChild(div)

    //ADCIONANDO OS ELEMENTOS DENTRO DA div
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    feed.appendChild(li)
    textarea.value = ""
}
