import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[] = ['Batman', 'Superman', 'Spiderman', 'Goku'];
  borrado: string = '';


  Borrar_heroe(){
     this.borrado = this.heroes.shift() || '';
    
  }
}

