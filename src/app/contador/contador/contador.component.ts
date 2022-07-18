import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
        <h1>{{title}}</h1>

        <h1>La base es {{base}}</h1>
        <button (click)="acumular(base)">Sumar</button>
        <span>{{contador}}</span>
        <button (click)="acumular(-base)">Restar</button>    
    `
})
export class ContadorComponent{
    
    title:string ="Contador App";
    contador:number = 0;
    base:number = 5;
  
  
    acumular(numero:number){
      this.contador +=numero;
    }

}