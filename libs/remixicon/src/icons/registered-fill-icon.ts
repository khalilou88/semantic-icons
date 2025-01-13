import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-registered-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.5 7H8V17H10V14H12.217L14.397 17H16.869L14.3191 13.4907C15.327 12.8763 16 11.7668 16 10.5C16 8.63144 14.5357 7.10487 12.692 7.00518L12.5 7ZM12.5 9C13.2797 9 13.9204 9.59489 13.9931 10.3555L14 10.5L13.9931 10.6445C13.925 11.3576 13.3576 11.925 12.6445 11.9931L12.5 12H10V9H12.5Z"
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
export class SiRegisteredFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
