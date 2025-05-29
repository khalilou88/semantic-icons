import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-create-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M464.37 49.2a22.07 22.07 0 0 0-31.88-.76l-18.31 18.25 31.18 31.1 18-17.91a22.16 22.16 0 0 0 1.01-30.68M252.76 336H176v-76.75999999999999l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6zM400 143.16l32.79-32.86-31.09-31.09L368.85 112H400z"
    />
    <svg:path d="M208 304h31.49L400 143.16V112h-31.15L208 272.51z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCreateSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
