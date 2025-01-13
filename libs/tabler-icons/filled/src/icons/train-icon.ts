import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-train-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M11 5c6.634 0 10.853 3.11 10.996 7.754l.004 .246a3 3 0 0 1 -3 3h-16a1 1 0 0 1 -1 -1v-9a1 1 0 0 1 1 -1zm-4 2h-3v3h3zm4 0h-2v3h3v-2.974a19 19 0 0 0 -1 -.026m3.001 .257l-.001 2.743h5.04c-.979 -1.337 -2.689 -2.306 -5.039 -2.743m6.999 10.743a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2z"
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
export class SiTrainIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
