import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cafe-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M448 64H80v254.34a19.83 19.83 0 005.86 14.14l29.65 29.66a19.87 19.87 0 0014.15 5.86h204.68a19.87 19.87 0 0014.15-5.86l29.65-29.66a19.83 19.83 0 005.86-14.14V192h32a16 16 0 0011.31-4.69l32-32A16 16 0 00464 144V80a16 16 0 00-16-16zm-16 73.37L409.37 160H384V96h48zM48 400h368v32H48z"
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
export class SiCafeSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
