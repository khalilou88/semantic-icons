import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-circle-letter-x-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2.447 5.106a1 1 0 0 0 -1.341 .447l-1.106 2.21l-1.106 -2.21a1 1 0 0 0 -1.234 -.494l-.107 .047a1 1 0 0 0 -.447 1.341l1.774 3.553l-1.775 3.553a1 1 0 0 0 .345 1.283l.102 .058a1 1 0 0 0 1.341 -.447l1.107 -2.211l1.106 2.211a1 1 0 0 0 1.234 .494l.107 -.047a1 1 0 0 0 .447 -1.341l-1.776 -3.553l1.776 -3.553a1 1 0 0 0 -.345 -1.283z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCircleLetterXIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
