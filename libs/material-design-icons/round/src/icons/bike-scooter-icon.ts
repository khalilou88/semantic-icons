import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bike-scooter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10 14h.74L8.82 5.56A2.009 2.009 0 0 0 6.87 4H4c-.55 0-1 .45-1 1s.45 1 1 1h2.87l1.42 6.25h-.01A6.008 6.008 0 0 0 4.09 17H0v2h6v-1c0-2.21 1.79-4 4-4zm8.75-6h-.56l-1.35-3.69A1.999 1.999 0 0 0 14.96 3H12c-.55 0-1 .45-1 1s.45 1 1 1h2.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99 3.16.15 5.88-2.83 5.12-6.1C23.34 9.57 21.13 8 18.75 8zm.13 8c-1.54-.06-2.84-1.37-2.88-2.92-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6.52-.19.79-.76.6-1.28l-.63-1.73.01-.01A2.969 2.969 0 0 1 22 13c0 1.72-1.38 3.06-3.12 3z"
    />
    <svg:path
      d="M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBikeScooterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
