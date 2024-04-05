import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  welcomeTitle = 'Welcome to NASA Explorer!';
  welcomeText = 'Explore the wonders of space and learn about NASA missions.';
  exploreButtonText = 'EXPLORE NOW';

  earthInfoTitle = 'Earth Information Center';
  earthInfoText = `For more than 50 years, NASA satellites have provided data on Earth's land, water, air, temperature, and climate. NASA's Earth Information Center allows visitors to see how our planet is changing in six key areas: sea level rise and coastal impacts, health and air quality, wildfires, greenhouse gases, sustainable energy, and agriculture.`;

  exobiologyTitle = 'Exobiology Deputy Branch Chief Melissa Kirven-Brooks';
  exobiologyText = `“… I’ve just seen such tremendous things happen since I’ve been part of the Astrobiology Program, and that’s why I’m pretty confident we’re going to find life elsewhere, because there are just so many brilliant people working on this.” — Melissa Kirven-Brooks, Exobiology Deputy Branch Chief and Future Workforce Lead of the NASA Astrobiology Program, NASA’s Ames Research Center`;

  becomeAnAstronautTitle = 'Become an Astronaut';
  becomeAnAstronautText = `NASA is hiring astronauts! Do you have what it takes to join the next class of astronauts? Learn more about the basic requirements and qualifications for becoming an astronaut.`;
  applyButtonText = 'APPLY NOW';


  cardImage1 = '../../../assets/images/astronauta-fotorrealista-de-plano-medio.jpg';
  cardTitle1 = 'NASA Missions';
  cardDescription1 = 'Discover the latest NASA missions and explore the universe with us.';

  cardImage2 = '../../../assets/images/imagem-completa-de-um-astronauta-a-usar-equipamento.jpg';
  cardTitle2 = 'Space Exploration';
  cardDescription2 = 'Explore the mysteries of space and learn about NASA\'s missions to uncover the secrets of the universe.';

  cardImage3 = '../../../assets/images/um-astronauta-no-espaco-com-o-sol-atras-dele.jpg';
  cardTitle3 = 'Astronaut Training';
  cardDescription3 = 'Discover what it takes to become an astronaut and join NASA\'s journey to explore beyond Earth.';
}
