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
}
