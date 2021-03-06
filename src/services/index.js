import axios from 'axios';

const host = "https://clone-netflix-hmo.herokuapp.com/"

let example = () =>{

   return axios(
        {
            url:host+"login",
            method:"post",
            data:{"email":"prueba@gmail.com","password":"passss"}
        })

}


let getMovies = () => {

    return axios({
        url:host+"graphql",
        method:"post",
        data:{
            query:`
              query {
                allMovies{
                    _id,
                    name,
                    director,
                    synopsis,
                    year
                }
              }
            `
        },
        headers:{"Authorization":"JWT "+localStorage.getItem('token')}
    })


}


let getMovie = () =>{
    let id = "5b15f6df92a9e83d81fdad2e"
    return axios({
        url:host+"graphql",
        method:"post",
        data:{
            query:`
              query {
                singleMovies(id:"${id}"){
                    _id,
                    name,
                    director,
                    synopsis,
                    year
                }
              }
            `
        },
        headers:{"Authorization":"JWT "+localStorage.getItem('token')}
    })


}

let createMovie = (data) => {
    return axios({
        url:host+"graphql",
        method:"post",
        data:{
            query:`
              mutation {
                addMovie(data:{
                    name:"${data.name}",
                    image:"${data.image}",
                    synopsis:"${data.synopsis}",
                    year:${data.year},
                    director:"${data.director}",
                    rank:${data.rank},
                    premium:${data.premium},
                    language:"${data.language}",
                    url:"${data.url}",
                    duration:"${data.duration}"
                }){
                    _id,
                    name,
                    director,
                    synopsis,
                    year
                }
              }
            `,
        },
        headers:{"Authorization":"JWT "+localStorage.getItem('token')}
    })



}


export  {
    example,
    getMovies,
    getMovie,
    createMovie
}

