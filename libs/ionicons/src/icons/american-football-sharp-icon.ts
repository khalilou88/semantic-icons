import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-american-football-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M120.9 120.51c-44.75 44.56-67.29 101.05-78.64 145.9l202.31 201.44c45.05-11.3 101.78-33.74 146.53-78.3s67.29-101.05 78.64-145.91L267.43 42.21C222.38 53.51 165.65 76 120.9 120.51m214 33.63 22.52 22.42-33.78 33.63 22.52 22.42L323.55 255 301 232.61 278.52 255 301 277.45l-22.51 22.42L256 277.45l-22.52 22.42L256 322.29l-22.52 22.42L211 322.29l-33.78 33.63-22.55-22.42 33.78-33.63-22.52-22.42L188.45 255 211 277.45 233.48 255 211 232.61l22.51-22.42L256 232.61l22.52-22.42L256 187.77l22.52-22.42L301 187.77ZM478.48 198.41C485.85 143.65 464 48.05 464 48.05s-96.14-21.88-151.14-14.54c-2.54.33-5.21.72-8 1.14l172.47 171.71c.43-2.76.81-5.42 1.15-7.95M33.52 311.65C26.15 366.41 48.05 464 48.05 464s60 16 99.86 16a392 392 0 0 0 51.23-3.45c2.54-.33 5.21-.72 8-1.15L34.67 303.7c-.43 2.76-.81 5.42-1.15 7.95"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAmericanFootballSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
