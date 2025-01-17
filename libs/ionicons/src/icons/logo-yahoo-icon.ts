import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-yahoo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M0 139.009h97.648l56.86 145.729 57.6-145.729h95.066L164.022 484H68.337l39.189-91.417L.003 139.009H0zM417.5 256H311l94.907-228L512 28.005 417.5 256zm-78.208 21.221c32.672 0 59.156 26.533 59.156 59.258 0 32.727-26.484 59.26-59.156 59.26-32.667 0-59.146-26.533-59.146-59.26 0-32.725 26.483-59.258 59.146-59.258z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoYahooIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
