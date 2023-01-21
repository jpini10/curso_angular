import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(){
  this.btnclass=` btn ${this.btnclass}`;
  }

  @Input('valor') progreso: number=50;
  @Input() btnclass: string='btn-primary';
  @Output('valor') valorsalida: EventEmitter<number>= new EventEmitter();

  onchange(nuevovalor:number){
    if(nuevovalor>=100){
      this.progreso=100;
    }else if(nuevovalor<=0){
      this.progreso=0;
    }else{
      this.progreso=nuevovalor;
    }

  }
 cambiarvalor(valor: number){
if(this.progreso>=100 &&  valor>=  0){
  this.valorsalida.emit(100);
  this.progreso = 100;
  return
}
if(this.progreso<=0 &&  valor<  0){
  this.valorsalida.emit(0);
  this.progreso = 0;
  return
}
   this.progreso= this.progreso + valor;
   this.valorsalida.emit(this.progreso);
 }

}
