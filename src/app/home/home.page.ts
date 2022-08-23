import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1 : string
  num2 : string
  saida : string

  constructor() {}

  somar(){
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)
    var soma = n1 + n2
    this.saida = soma.toString()
  }

  subtrair(){
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)
    var subtracao = n1 - n2
    this.saida = subtracao.toString()
  }

  dividir(){
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)
    if (n2!=0){
      var divisao = n1 / n2
      this.saida = divisao.toString()
    }
      else{
        this.saida = "Não existe divisão por ZERO"
    }
  }

  multiplicar(){
    var n1 = parseFloat(this.num1)
    var n2 = parseFloat(this.num2)
    var multiplicacao = n1 * n2
    this.saida = multiplicacao.toString()
  }
  
}
