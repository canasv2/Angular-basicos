import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iron Man';
    edad: number =50;

    get Nombre_capitalizado(): string{
        return this.nombre.toUpperCase();
    }

    Obtener_nombre(): string{
        return ` ${this.nombre} - ${this.edad}`
    }

    Cambiar_nombre(): void{
        this.nombre = 'spider-man';
    }
    Cambiar_edad(): void{
        this.edad = 30;
    }
}