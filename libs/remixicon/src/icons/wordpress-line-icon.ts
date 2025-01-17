import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-wordpress-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14.6059 19.566L12.4512 13.5807L10.27 19.8125C10.8271 19.9353 11.406 20 12 20C12.9124 20 13.789 19.8473 14.6059 19.566ZM17.0741 18.1853C18.8605 16.7181 20 14.4921 20 12C20 10.9742 19.8069 9.99354 19.4552 9.09231C19.2048 10.5459 18.7629 12.4415 18.4794 13.4073L17.0741 18.1853ZM16.8726 5.65461C15.5233 4.61695 13.8337 4 12 4C9.47362 4 7.22075 5.17108 5.75463 7H7.14502V9H6.39547L9.15016 16.958L11.3768 10.5962L10.8021 9H8.64502L8.64505 7H13.6451L13.645 9H12.9278L15.5492 16.2817L16.5606 12.8429C17.0844 11.0096 16.653 10.2107 16.2222 9.41327C15.9334 8.87865 15.645 8.34466 15.645 7.5C15.645 6.66923 16.1515 5.95677 16.8726 5.65461ZM4.42479 9.42105C4.14939 10.2302 4 11.0977 4 12C4 14.8098 5.44856 17.2813 7.63963 18.7084L4.42479 9.42105Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWordpressLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
