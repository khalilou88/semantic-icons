import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-manjaro-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Manjaro</svg:title>
    <svg:path
      d="M0 0v24h6.75V6.75h8.625V0H0zm8.625 8.625V24h6.75V8.625h-6.75zM17.25 0v24H24V0h-6.75z"
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
export class SiManjaroIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#35BF5C');
}
