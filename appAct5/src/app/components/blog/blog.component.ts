import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/i-noticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newNoticia: INoticia = { title: "", image: "", body: "", date: ""}
  arrayNoticias: INoticia[] =[];
  mensajeError: string = "";

  constructor(){
    this.arrayNoticias = [
      {title: "EEUU sigue por detrás de China en patentes de IA generativa: el país asiático lidera este ámbito de manera aplastante",
       image:"https://i.blogs.es/ecfd98/1inteligencia-artificial-china-portada/1200_800.jpeg",
       body:"Si bien Estados Unidos es el hogar de algunas de las compañías de inteligencia artificial generativa (GenAI) más conocidas del momento, China lidera en cantidad de invenciones. El último informe de Organización Mundial de la Propiedad Intelectual (OMPI) señala que desde 2017 el gigante asiático ha publicado más patentes en este campo cada año que todas las demás regiones del planeta juntas.",
       date:"2024-07-05" 
      },
      {title:"El robot humanoide de Figure ya es capaz de trabajar de manera autónoma en una fábrica, así que lo está haciendo en BMW",
        image:"https://i.blogs.es/caf55b/figure-bmw-3/1200_800.jpeg",
        body:"Estamos presenciando en directo como la robótica evoluciona y, de alguna u otra forma, se entrelaza con nuestras vidas. Aún no podemos ir a una tienda a comprar androides avanzados al más puro estilo ‘Detroit Become Human’, pero probablemente un aspirador Roomba, Conga o de otra marca nos ayuda a mantener limpio el suelo de casa. En paralelo, la mayor parte de los coches que nos rodean seguramente provienen de líneas de producción altamente robotizadas.",
        date:"2024-07-04"

      }

    ] 
  }

publicar(){
  // primero borrar el mensaje erróneo (por si estuviera mostrándose)
  this.limpiarError()
  // si la noticia se puede agregar, lo hacemos y la reiniciamos
  if (this.checkNewNoticia()){
    console.log("Agregamos y reiniciamos")
    console.log(this.newNoticia)
    this.arrayNoticias.push(this.newNoticia);
    console.log(this.arrayNoticias)
    this.clearNoticia()  
    this.cargarBlog()
  } else {
  // si no sep puede agregar mostramos el mensaje de error
  this.mostrarError()
   console.log("No agregamos")
  }
  
}

clearNoticia(){
  this.newNoticia = { body: "", title: "", date: "", image:"" }
}

checkNewNoticia(): boolean{
  // comprueba si la noticia se puede agregar
  if ( this.newNoticia.title === "" ||
       this.newNoticia.date === "" ||
       this.newNoticia.image === "" ||
       this.newNoticia.body === "" ){
        return false
       }
       else{
        return true
       }
}

mostrarError(){
  this.mensajeError="No se puede publicar la noticia poruque no están informados todos los campos"
}

limpiarError(){
  this.mensajeError="";
}

cargarBlog(): string{
  let html: string = "";
  this.arrayNoticias.forEach((noticia:INoticia) => {
    //html = html + `<div class="noticia">`
    html = html + `<div><h2>${noticia.title}</h2></div>`
    html = html + `<div><p>${noticia.date}</p></div>`
    html = html + `<div><img src="${noticia.image}"></div>`
    html = html + `<div><p>${noticia.body}</p></div>`
    //html = html + '</div>'
  })
  return html
}

}
