import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-filen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Filen</svg:title>
    <svg:path
      d="M12 0C5.387 0 0 5.387 0 12s5.387 12 12 12 12-5.387 12-12S18.613 0 12 0zm0 1.531a10.47 10.47 0 0 1 6.384 2.196v3.92H8.052a.749.749 0 0 0-.749.748v2.373c-.425.26-.69.719-.7 1.217A1.464 1.464 0 1 0 8.83 10.74V9.172h10.332a.749.749 0 0 0 .748-.75V5.193A10.47 10.47 0 0 1 22.47 12l-.012.151h-3.324a.749.749 0 0 0-.749.749v7.372a10.47 10.47 0 0 1-1.963 1.193V14.12c.425-.26.69-.718.7-1.217a1.464 1.464 0 0 0-2.927 0c.01.499.275.957.7 1.217v7.92a10.47 10.47 0 0 1-2.894.43 10.463 10.463 0 0 1-3.19-.502v-6.024h1.83c.259.426.718.69 1.216.7a1.464 1.464 0 0 0 0-2.927 1.464 1.464 0 0 0-1.217.7H8.033a.749.749 0 0 0-.749.75v6.177A10.471 10.471 0 0 1 4.8 19.576V5.252h8.314c.26.425.718.69 1.216.7a1.464 1.464 0 0 0 0-2.928 1.464 1.464 0 0 0-1.216.701H5.619A10.47 10.47 0 0 1 12 1.532zM3.274 6.266v11.468A10.469 10.469 0 0 1 1.53 12c.01-2.04.615-4.033 1.743-5.734zm16.637 7.412h2.42a10.47 10.47 0 0 1-2.42 5.13z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFilenIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
