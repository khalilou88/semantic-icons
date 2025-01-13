import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-soriana-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Soriana</svg:title>
    <svg:path
      d="M18.994 3.2c-1.16 0-2.772.494-3.94 2.104-.223.314-.39.664-.494 1.034a4.27 4.27 0 0 0 .678 3.692c.6.812 1.368 1.42 2.044 1.96.332.26 1.034.926 1.26 1.208.34.422.596.674.902 1.606.186.564.212 1.308.12 1.73C21.684 14.384 24 11.594 24 8.56c0-3.486-2.498-5.36-5.006-5.36M15.05 14.986c-.886-1.204-1.908-1.936-2.754-2.706-.368-.336-.772-.584-1.07-.88-1.434-1.424-2.102-3.18-1.764-5.34.268-1.692 1.108-2.806 2.124-3.622a7.098 7.098 0 0 0-4.278-1.372C3.274 1.066-.1 4.31.002 8.306c.184 7.22 9.224 13.37 12.948 14.628 1.992-1.02 3.05-2.928 3.05-4.884 0-1.426-.612-2.6-.95-3.064"
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
export class SiSorianaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#D52B1E');
}
