import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-riding-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.5 21C3.01472 21 1 18.9853 1 16.5C1 14.0147 3.01472 12 5.5 12C7.98528 12 10 14.0147 10 16.5C10 18.9853 7.98528 21 5.5 21ZM5.5 18C6.32843 18 7 17.3284 7 16.5C7 15.6716 6.32843 15 5.5 15C4.67157 15 4 15.6716 4 16.5C4 17.3284 4.67157 18 5.5 18ZM18.5 21C16.0147 21 14 18.9853 14 16.5C14 14.0147 16.0147 12 18.5 12C20.9853 12 23 14.0147 23 16.5C23 18.9853 20.9853 21 18.5 21ZM18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18ZM11.5314 9.79706L13 12V18H11V13L8.28117 10.7343C8.18221 10.6661 8.08802 10.588 8 10.5C7.21895 9.71895 7.21895 8.45262 8 7.67157L10.8284 4.84315C11.6095 4.0621 12.8758 4.0621 13.6569 4.84315L15.0711 6.25736C16.1746 7.36086 17.5548 8.01891 18.9884 8.23151L18.978 10.2474C17.0335 10.0218 15.1485 9.16323 13.6569 7.67157L11.5314 9.79706ZM16 5C14.8954 5 14 4.10457 14 3C14 1.89543 14.8954 1 16 1C17.1046 1 18 1.89543 18 3C18 4.10457 17.1046 5 16 5Z"
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
export class SiRidingFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
