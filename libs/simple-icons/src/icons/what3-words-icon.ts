import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-what3-words-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>what3words</svg:title>
    <svg:path
      d="M0 0v24h24V0zm13.515 6.75a.75.75 0 0 1 .696.987l-3 9a.75.75 0 0 1-.711.513.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .727-.513zm-4.499.002a.75.75 0 0 1 .695.985l-3 9A.75.75 0 0 1 6 17.25a.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .728-.511zm9 0a.75.75 0 0 1 .695.985l-3 9a.75.75 0 0 1-.711.513.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .728-.511z"
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
export class SiWhat3WordsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E11F26');
}
