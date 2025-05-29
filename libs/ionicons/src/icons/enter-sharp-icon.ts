import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-enter-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M160 240h147.37l-64-64L266 153.37 368.63 256 266 358.63 243.37 336l64-64H160v148a12 12 0 0 0 12 12h296a12 12 0 0 0 12-12V92a12 12 0 0 0-12-12H172a12 12 0 0 0-12 12ZM32 240h128v32H32z"
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
export class SiEnterSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
