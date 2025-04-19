import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { Icon } from '@semantic-icons/nx-generators';
import { BehaviorSubject, Observable } from 'rxjs';

export type LibraryIdType =
  | 'heroicons'
  | 'feather'
  | 'material'
  | 'bootstrap'
  | 'fontawesome';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly iconsSubject = new BehaviorSubject<Icon[]>([]);
  public icons$ = this.iconsSubject.asObservable();
  private currentLibrary: LibraryIdType = 'heroicons';

  // This would normally come from an API, but we'll mock it for this example
  private readonly iconLibraries: { [key: string]: Icon[] } = {
    heroicons: [
      {
        id: 'heroicons-1',
        name: 'User',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        tags: ['user', 'person', 'profile'],
      },
      {
        id: 'heroicons-2',
        name: 'Home',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        tags: ['home', 'house', 'main'],
      },
      {
        id: 'heroicons-3',
        name: 'Settings',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
        tags: ['settings', 'gear', 'cog', 'preferences'],
      },
    ],
    feather: [
      {
        id: 'feather-1',
        name: 'Mail',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
        tags: ['mail', 'email', 'message'],
      },
      {
        id: 'feather-2',
        name: 'Heart',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
        tags: ['heart', 'love', 'like', 'favorite'],
      },
    ],
    material: [
      {
        id: 'material-1',
        name: 'Delete',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>',
        tags: ['delete', 'trash', 'remove'],
      },
      {
        id: 'material-2',
        name: 'Add',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
        tags: ['add', 'plus', 'new'],
      },
    ],
    bootstrap: [
      {
        id: 'bootstrap-1',
        name: 'Cart',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>',
        tags: ['cart', 'shopping', 'checkout'],
      },
    ],
    fontawesome: [
      {
        id: 'fontawesome-1',
        name: 'Star',
        svgContent:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>',
        tags: ['star', 'favorite', 'rating'],
      },
    ],
  };

  constructor(private readonly http: HttpClient) {
    this.loadIcons();
  }

  setCurrentLibrary(libraryId: LibraryIdType): void {
    this.currentLibrary = libraryId;
    this.loadIcons();
  }

  private loadIcons(): void {
    let icons: Icon[] = [];

    if (this.currentLibrary == 'heroicons') {
      this.http.get('heroicons.json').subscribe((response) => {
        this.iconsSubject.next(response as Icon[]);
      });
    } else {
      icons = this.iconLibraries[this.currentLibrary] || [];
      this.iconsSubject.next(icons);
    }
  }

  searchIcons(query: string): Observable<Icon[]> {
    return this.icons$.pipe(
      map((icons) => {
        if (!query) return icons;

        const lowerQuery = query.toLowerCase();
        return icons.filter(
          (icon) =>
            icon.name.toLowerCase().includes(lowerQuery) ||
            icon.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
        );
      }),
    );
  }

  getIconById(id: string): Icon | undefined {
    const icons = this.iconsSubject.getValue();
    return icons.find((icon) => icon.id === id);
  }
}
