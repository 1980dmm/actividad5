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

publicar(){
  // primero borrar el mensaje erróneo (por si estuviera mostrándose)
  this.limpiarError()
  // si la noticia se puede agregar, lo hacemos y la reiniciamos
  if (this.checkNewNoticia()){
    console.log("Agregamos y reiniciamos")
    this.clearNoticia()  
  } else {
  // si no sep puede agregar mostramos el mensaje de error
  this.mostrarError()
   console.log("No agregamos")
  }
  
}

clearNoticia(){
  this.newNoticia.body = "";
  this.newNoticia.title = "";
  this.newNoticia.date = "";
  this.newNoticia.image = "";
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

}
