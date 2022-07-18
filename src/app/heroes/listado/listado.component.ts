import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán']
  heroeBorrado:string[]=[];
  iteracion:number=0;
  activo:boolean=false;
  borrarHeroe(){
    this.activo=true;
    this.heroeBorrado[this.iteracion] = this.heroes.shift() || '';

    console.log(this.heroeBorrado);
    if(this.heroeBorrado[this.iteracion]==''){
      this.activo=false;
      this.heroeBorrado=[];
    }
    this.iteracion++;
  }
}
