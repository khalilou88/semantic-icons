import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-format-shapes-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3h2v2H3zm16 16h2v2h-2zm0-16h2v2h-2zM3 19h2v2H3z"
      opacity=".3"
    />
    <svg:path
      d="m11.29 7-3.4 9h1.62l.73-2h3.49l.74 2h1.63l-3.41-9h-1.4zm-.6 5.74L12 8.91l1.3 3.83h-2.61zM17 3H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2V1h-6v2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm16 0h-2v-2h2v2zM19 3h2v2h-2V3zm0 14h-2v2H7v-2H5V7h2V5h10v2h2v10z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFormatShapesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
