import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-left-down-long-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.7783 5.63577L18.3643 4.22156L8.75734 13.8284L4.92896 10L4.92896 19.0711L14 19.0711L10.1716 15.2426L19.7783 5.63577Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowLeftDownLongFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
