import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cards = [
    {
      imgSrc: '../../../assets/images/car-moon.webp',
      title: 'NASA Selects Companies to Advance Moon Mobility for Artemis Missions',
      description: 'Intuitive Machines, Lunar Outpost, and Venturi Astrolab to advance capabilities for a lunar terrain vehicle (LTV)'
    },
    {
      imgSrc: '../../../assets/images/astronaut-woman.webp',
      title: 'NASA Sets Coverage for Astronaut Loral O’Hara, Crewmates Return',
      description: 'Participant Marina Vasilevskaya of Belarus will depart from the station’s Rassvet module in the Roscosmos Soyuz MS-24 spacecraft at 11:55 p.m. EDT April 5, and will head for a parachute-assisted landing on the steppe of Kazakhstan, southeast of the town of Dzhezkazgan.'
    },
    {
      imgSrc: '../../../assets/images/eclipse-map-2024.webp',
      title: 'How to Watch Upcoming Total Solar Eclipse with NASA from Anywhere',
      description: 'Millions of people along the path of totality – which stretches from Texas to Maine in the United States – will see a total solar eclipse, when the Moon completely covers the Sun. Outside the path of totality, people across the contiguous United States will have a chance to see a partial solar eclipse, when the Moon covers part of the Sun. Learn how to safely view this celestial event.'
    }
  ];

  getCardWidth(index: number): string {
    if (index === 0) {
      return 'col-md-6 col-lg-6';
    } else {
      return 'col-md-6 col-lg-3';
    }
  }
}
