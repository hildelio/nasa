import { Component, inject } from '@angular/core';
import { NasaEonetService } from '../../services/nasa-eonet.service';

@Component({
  selector: 'app-nasa-event-list',
  templateUrl: './nasa-event-list.component.html',
  styleUrl: './nasa-event-list.component.scss'
})
export class NasaEventListComponent {
  events: any[] = [];
  currentPage = 1;
  itemsPerPage = 18;

  nasaEonetService = inject(NasaEonetService);

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.nasaEonetService.getEvents().subscribe(data => {
      this.events = data.events;
    });
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.events.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }

  get visibleEvents(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.events.slice(startIndex, startIndex + this.itemsPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  getEventLink(event: any): string {
    if (event.sources && event.sources.length > 0) {
      const sourceLink = event.sources.find((source: any) => source.id === 'EO' || source.id === 'SIVolcano');
      if (sourceLink && sourceLink.url) {
        return sourceLink.url;
      }
    }
    return 'not-found';
  }
}
