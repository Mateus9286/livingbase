import { AcessarPostId } from "../../Js/ApiRequest.js";

async function renderNoticia(){
const id = localStorage.getItem("@IdNoticia")
const acessar = await AcessarPostId(id)

const titulo = document.querySelector("h1")
const texto = document.querySelector(".texto")
const image = document.querySelector(".imgpost")
const noticia = document.querySelector("#noticia")

titulo.innerText = acessar.title
texto.innerText = acessar.description
image.src = acessar.image
noticia.innerText = acessar.content
}
renderNoticia()


function filtroBotoes(){
const buttons = document.querySelectorAll(".btnFilter");

buttons.forEach((element) => {
    element.addEventListener("click",(event)=>{
        event.preventDefault()
        window.location.replace("../../index.html")
      localStorage.setItem("filtro",element.innerText)
    })
  })

}
filtroBotoes()


function voltarPageHome(){
    const btnHome = document.querySelector(".btnHome")

    btnHome.addEventListener("click",(event)=>{
        event.preventDefault()
        window.location.replace("../../index.html")
    })
}
voltarPageHome()


function voltarAoTopo(){
    const btn = document.querySelector(".btnVoltarTopo");
  btn.addEventListener("click", function() {
      window.scrollTo(0, 0);
  });
  }
  voltarAoTopo()
