import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ferry-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M22 12a1 1 0 0 1 .86 1.51l-2.202 3.709a4.06 4.06 0 0 1 -3.365 1.781h-15.293a1 1 0 0 1 -.957 -1.291l1.521 -5a1 1 0 0 1 .957 -.709zm-3 1a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-5.106 -7.447l.723 1.447h.874a1 1 0 0 1 .864 .497l2.037 3.503h-12.832l.973 -3.284a1 1 0 0 1 .958 -.716h4.89l-.275 -.553a1 1 0 0 1 1.788 -.894"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFerryIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
