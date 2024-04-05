import { Component } from '@angular/core';

@Component({
  selector: 'app-solar-system-planets',
  templateUrl: './solar-system-planets.component.html',
  styleUrl: './solar-system-planets.component.scss'
})
export class SolarSystemPlanetsComponent {
  planetas = [
    {
      nome: "Mercury",
      descricao: "Mercury is the closest planet to the Sun and the smallest in the solar system. It lacks a significant atmosphere due to its proximity to the Sun, resulting in extremely high temperatures during the day and low temperatures at night. Its surface is covered with craters and plains.",
      imagem: "../../../assets/images/Mercurio.png"
    },
    {
      nome: "Venus",
      descricao: "Venus is known as Earth's sister planet due to its similar size and mass. However, its atmosphere is extremely dense, composed mainly of carbon dioxide, with clouds of sulfuric acid. It is the hottest planet in the solar system due to extreme greenhouse effect.",
      imagem: "../../../assets/images/Venus.png"
    },
    {
      nome: "Earth",
      descricao: "Earth is the only planet known to support life. It has an atmosphere rich in oxygen and a variety of ecosystems that sustain a vast range of life forms. The presence of liquid water on the surface is crucial for the existence of life as we know it.",
      imagem: "../../../assets/images/Terra.png"
    },
    {
      nome: "Mars",
      descricao: "Mars is known as the 'Red Planet' due to its reddish surface, caused by the presence of iron oxide. Although currently cold and dry, evidence suggests that Mars once had rivers, lakes, and even a primitive ocean, indicating a warmer, wetter past.",
      imagem: "../../../assets/images/Marte.png"
    },
    {
      nome: "Jupiter",
      descricao: "Jupiter is the largest planet in the solar system and is known for its colorful cloud bands, formed by powerful atmospheric winds. It has the Great Red Spot, a giant storm that has been occurring for centuries. Jupiter also has a complex system of moons, including Europa, which harbors a potentially habitable subsurface ocean.",
      imagem: "../../../assets/images/Jupiter.png"
    },
    {
      nome: "Saturn",
      descricao: "Saturn is famous for its impressive rings, composed mainly of ice and rock. It is the second-largest planet in the solar system and has dozens of moons, including Titan, with a dense atmosphere and hydrocarbon lakes on its surface.",
      imagem: "../../../assets/images/Saturno.png"
    },
    {
      nome: "Uranus",
      descricao: "Uranus is a giant gas planet that has a tilted rotation axis, causing it to essentially spin on its side relative to its orbital plane. Its atmosphere is mainly composed of hydrogen, helium, and methane, giving the planet its distinctive blue-green coloration.",
      imagem: "../../../assets/images/Urano.png"
    }
  ];
  
}
