import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-assist-walker-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12.5" cy="4.5" r="2" />
    <svg:path
      d="m19.77 17.72-.64-6.37A1.49 1.49 0 0 0 17.64 10H16c-1.5-.02-2.86-.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-.51 0-1.02.2-1.41.59L4.08 9.91c-.53.68-.51 1.57-.21 2.13l1.43 2.8-2.55 3.26a1 1 0 0 0 .17 1.4c.44.34 1.07.26 1.41-.17l2.56-3.29c.33-.42.47-.95.41-1.48l-.07-.53.77.72V19c0 .55.45 1 1 1s1-.45 1-1v-4.29c0-.53-.21-1.04-.59-1.41l-1.53-1.53 2.36-2.36c.94.94 1.72 1.82 3.59 2.32l-.75 7.46c-.04.44.3.83.75.83.38 0 .7-.29.75-.66l.33-2.84h3.18l.14 1.22c-.44.26-.73.74-.73 1.28 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.56-.29-1.04-.73-1.3zM15.09 15l.41-3.5h2l.41 3.5h-2.82z"
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
export class SiAssistWalkerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
