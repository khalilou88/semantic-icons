import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-eac-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>EAC</svg:title>
    <svg:path
      d="M2.667 24h2.667v-2.667H2.667v-8h2.667v-2.666H2.667v-8h2.667V0H0v24zm21.334-2.667h-2.668V2.667h2.668V0h-5.333v24h5.333zM13.334 0H8v24h2.667V13.335h2.667V24H16V0Zm0 10.667h-2.667v-8h2.667z"
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
export class SiEacIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
