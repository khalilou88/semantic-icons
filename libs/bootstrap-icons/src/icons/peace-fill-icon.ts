import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-peace-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14 13.292A8 8 0 0 0 8.5.015v7.778zm-.708.708L8.5 9.206v6.778a7.97 7.97 0 0 0 4.792-1.986zM7.5 15.985V9.207L2.708 14A7.97 7.97 0 0 0 7.5 15.985M2 13.292A8 8 0 0 1 7.5.015v7.778z"
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
export class SiPeaceFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('16');

  readonly height = input<string | number>('16');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
