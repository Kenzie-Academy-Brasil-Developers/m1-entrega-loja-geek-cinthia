let relogio = {
    image: `./assets/img/painting/clock.jpg`,
    name: `Pintura Relógio`,
    price: `R$20,00`,
    type: `painting`
}

let controle = {
    image: `./assets/img/painting/gamepad.jpg`,
    name: `Pintura Controle`,
    price: `R$35,00`,
    type: `painting`
}

let robo = {
    image: `./assets/img/painting/personagem.jpg`,
    name: `Pintura C3-PO`,
    price: `R$55,55`,
    type: `painting`
}

let asuka = {
    image: `./assets/img/actions/animewoman.jpg`,
    name: `Action Figure Asuka`,
    price: `R$189,00`,
    type: `action`
}

let goku = {
    image: `./assets/img/actions/dragonballpersonagem.jpg`,
    name: `Action Figure Goku`,
    price: `R$170,00`,
    type: `action`
}

let grogu = {
    image: `./assets/img/actions/starwarspersonagem.jpg`,
    name: `Miniatura Grogu`,
    price: `R$85,00`,
    type: `action`
}


let lista = [relogio, controle, robo, asuka, goku, grogu]

let listFigures = []
let listFrames = []

function separateItems(listaSelecionada) {
    for (i = 0; i < listaSelecionada.length; i++) {
        let posicaoNaLista = listaSelecionada[i]

        if (posicaoNaLista.type == `action`) {
        listFigures.push(posicaoNaLista)
        }

        else if (posicaoNaLista.type == `painting`) {
            listFrames.push(posicaoNaLista)
        }
    } 
} 
(separateItems(lista))

let secaolistFigure = document.getElementsByClassName(`caixaActions`)[0]

for (let j = 0; j < listFigures.length; j++){
    let divPrincipal = document.createElement(`div`)
    divPrincipal.classList.add(`divPrincipal`);

    let separador = document.createElement(`div`)
    separador.classList.add(`separador`);
    
    let elementoLista = document.createElement(`li`)
    elementoLista.classList.add(`action`);

    let criarImagem = document.createElement(`img`)
    criarImagem.src = `${listFigures[j].image}`
    criarImagem.classList.add(`imagemAction`);

    let nomeInserido = document.createElement(`span`)
    nomeInserido.innerText = `${listFigures[j].name}`
    nomeInserido.classList.add(`legenda`);

    let precoInserido = document.createElement(`span`)
    precoInserido.innerText = `${listFigures[j].price}`
    precoInserido.classList.add(`subLegenda`);

    divPrincipal.appendChild(elementoLista)

    elementoLista.appendChild(criarImagem)

    elementoLista.appendChild(separador)

    separador.appendChild(nomeInserido)
    
    separador.appendChild(precoInserido)

    secaolistFigure.appendChild(divPrincipal)
  }


  let secaolistFrame = document.getElementsByClassName(`caixaPinturas`)[0]

  for (let y = 0; y < listFrames.length; y++){
    let divFrames = document.createElement(`div`)
    divFrames.classList.add(`divFrames`);
  
    let separadorFrames = document.createElement(`div`)
    separadorFrames.classList.add(`separadorFrames`);
      
    let listaFrames = document.createElement(`li`)
    listaFrames.classList.add(`actionFrames`);
  
    let criarImagemFrames = document.createElement(`img`)
    criarImagemFrames.src = `${listFrames[y].image}`
    criarImagemFrames.classList.add(`imagemFrames`);
  
    let nomeFrames = document.createElement(`span`)
    nomeFrames.innerText = `${listFrames[y].name}`
    nomeFrames.classList.add(`legendaFrames`);
  
    let precoFrames = document.createElement(`span`)
    precoFrames.innerText = `${listFrames[y].price}`
    precoFrames.classList.add(`subLegendaFrames`);
  
    divFrames.appendChild(listaFrames)
  
    listaFrames.appendChild(criarImagemFrames)
  
    listaFrames.appendChild(separadorFrames)
  
    separadorFrames.appendChild(nomeFrames)
      
    separadorFrames.appendChild(precoFrames)
  
    secaolistFrame.appendChild(divFrames)
    }