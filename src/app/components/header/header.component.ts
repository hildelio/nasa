import { Component, inject } from '@angular/core';
import { Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);
  // route = inject(ActivatedRoute)

  isLinkActive(linkPath: string): boolean {
    return this.router.isActive(linkPath, true);
  }
}
