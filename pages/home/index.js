import { BuscarNoticia } from "../../Js/ApiRequest.js";

const Buscar = await BuscarNoticia();


function listar(arr) {
  const ul = document.querySelector("#container");
  ul.innerHTML = "";
  arr.forEach((element) => {
    templateNoticias(element);
  });
}
listar(Buscar);


function templateNoticias(arr) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const picture = document.createElement("picture");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const span = document.createElement("span");

  picture.classList.add("marginText");
  img.classList.add("imgNoticias");
  h2.classList.add("tituloLi");
  p.classList.add("textLi");
  span.classList.add("spamLi");

  img.src = arr.image;
  h2.innerText = arr.title;
  p.innerText = arr.description;
  span.id = arr.id;
  span.innerText = "Acessar conteúdo";

  span.addEventListener("click",(event)=>{
    event.preventDefault()
    localStorage.setItem("@IdNoticia", span.id)
    window.location.replace("./pages/post/index.html")
  })

  picture.append(img);
  li.append(picture, h2, p, span);
  ul.append(li);

  return li;
}


export function filtrandoNoticia(){
const noticias = JSON.parse(localStorage.getItem("@noticia"));

const buttons = document.querySelectorAll(".btnFilter");

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const filtro = noticias.filter((noticia) => noticia.category == element.innerText);
    listar(filtro);
  });
});
}
filtrandoNoticia()


function filtrandoTodasNoticias(){

const botaoTodos = document.querySelector(".btnTodos");

botaoTodos.addEventListener("click",(event)=>{
    event.preventDefault()
    listar(Buscar)
})
}
filtrandoTodasNoticias()


function listando(){
  const filtro = localStorage.getItem("filtro")
  const noticias = JSON.parse(localStorage.getItem("@noticia"));
  if(filtro){
    if(filtro == "Todos"){
      listar(Buscar)
      localStorage.removeItem("filtro")
    }else{
    const filtrando = noticias.filter((noticia) => noticia.category == filtro);
    listar(filtrando)
    localStorage.removeItem("filtro")
    }
  }
}
listando()


function voltarAoTopo(){
  const btn = document.querySelector(".btnVoltarTopo");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
}
voltarAoTopo()
