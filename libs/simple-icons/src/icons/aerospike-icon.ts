import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-aerospike-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Aerospike</svg:title>
    <svg:path
      d="M14.347 15.375 7.45 12.283l6.897-3.072v6.164zM24 0v24H0V0h24zm-4.705 5.386L5.672 11.548l-1.607.743 1.607.688 13.623 6.163v-1.565l-3.576-1.602V8.612l3.576-1.586v-1.64z"
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
export class SiAerospikeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#C22127');
}
