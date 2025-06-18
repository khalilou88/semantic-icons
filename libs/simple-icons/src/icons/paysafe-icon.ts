import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-paysafe-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Paysafe</svg:title>
    <svg:path
      d="m23.905 12.233-7.672 7.673a.16.16 0 0 1-.115.047h-.048a.162.162 0 0 1-.162-.161v-7.787a.324.324 0 0 1-.094.228L8.188 19.86a.332.332 0 0 1-.466 0L.095 12.235a.332.332 0 0 1 0-.466L7.72 4.142a.334.334 0 0 1 .467 0l7.625 7.625c.06.06.094.143.094.23V4.208c0-.089.073-.162.162-.162h.048c.043 0 .084.018.115.048l7.672 7.672a.333.333 0 0 1 .002.467z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPaysafeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#5A28FF');
}
