import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lit-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Lit</svg:title>
    <svg:path
      d="M2.4 9.6l4.8 4.8V24l-4.8-4.8V9.6zm4.8-4.8v9.6L12 9.6V0L7.2 4.8zM12 9.6v9.6l4.8-4.8V4.8L12 9.6zm4.8 4.8V24l4.8-4.8V9.6l-4.8 4.8z"
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
export class SiLitIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#324FFF');
}
