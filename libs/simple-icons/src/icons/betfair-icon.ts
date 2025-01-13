import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-betfair-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Betfair</svg:title>
    <svg:path
      d="M20.218 3.14h-7.083v3.6H9.352l7.359 8.582L24 6.67h-3.782zM0 17.26h3.782v3.6h7.083v-3.6h3.783l-7.29-8.583z"
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
export class SiBetfairIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFB80B');
}
