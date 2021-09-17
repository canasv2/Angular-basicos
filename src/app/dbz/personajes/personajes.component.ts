import { Component, Input } from '@angular/core';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {
  
  //@Input() personaj: Personaje[] =[];

  
  
get personaj (){
  return this.dbzService.personajes;
}
  
constructor ( private dbzService: Dbzservice){}
 
}
