const urlBase = "https://m2-api-living.herokuapp.com/news"
const Header = "application/json"

export async function BuscarNoticia(){

     const request = await fetch(`${urlBase}?page=1`,{
        method: "GET",
        headers:{
        "Content-Type": `${Header}`
        }
    })
    .then((res)=>res.json())
    .then((res)=>{
        localStorage.setItem("@noticia", JSON.stringify(res.news) )
     return res.news
    })

    return request
}


export async function AcessarPostId(id){

    const request = await fetch(`${urlBase}/${id}`,{
        method: "GET",
        headers:{
        "Content-Type": `${Header}`
        }
    })
    .then((res)=>res.json())
    .then((res)=> res)

    return request
}
