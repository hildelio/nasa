import { Component } from '@angular/core';

@Component({
  selector: 'app-solar-system-planets',
  templateUrl: './solar-system-planets.component.html',
  styleUrl: './solar-system-planets.component.scss'
})
export class SolarSystemPlanetsComponent {
   planetas = [
    {
      nome: "Mercúrio",
      descricao: "Mercúrio é o planeta mais próximo do Sol e o menor do sistema solar. Ele não possui atmosfera significativa e sua superfície é coberta por crateras e planícies.",
      imagem: "../../../assets/images/Mercurio.png"
    },
    {
      nome: "Vênus",
      descricao: "Vênus é conhecido como o planeta irmão da Terra devido às suas características semelhantes em tamanho e massa. No entanto, sua atmosfera é extremamente densa e tóxica.",
      imagem: "../../../assets/images/Venus.png"
    },
    {
      nome: "Terra",
      descricao: "A Terra é o único planeta conhecido por abrigar vida. Ela possui uma atmosfera rica em oxigênio e uma variedade de ecossistemas que sustentam uma vasta gama de formas de vida.",
      imagem: "../../../assets/images/Terra.png"
    },
    {
      nome: "Marte",
      descricao: "Marte é conhecido como o 'Planeta Vermelho' devido à sua superfície avermelhada. Ele possui características que sugerem a presença de água em seu passado distante.",
      imagem: "../../../assets/images/Marte.png"
    },
    {
      nome: "Júpiter",
      descricao: "Júpiter é o maior planeta do sistema solar e é conhecido por suas faixas de nuvens coloridas e pela Grande Mancha Vermelha, uma tempestade gigante que ocorre há séculos.",
      imagem: "../../../assets/images/Jupiter.png"
    },
    {
      nome: "Saturno",
      descricao: "Saturno é famoso por seus impressionantes anéis, compostos principalmente de gelo e rocha. Ele é o segundo maior planeta do sistema solar, após Júpiter.",
      imagem: "../../../assets/images/Saturno.png"
    },
    {
      nome: "Urano",
      descricao: "Urano é um planeta gasoso gigante que possui um eixo de rotação inclinado de lado. Ele tem uma atmosfera composta principalmente de hidrogênio e hélio.",
      imagem: "../../../assets/images/Urano.png"
    }
  ];
  

}
