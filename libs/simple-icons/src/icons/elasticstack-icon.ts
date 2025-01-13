import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-elasticstack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Elastic Stack</svg:title>
    <svg:path
      d="M1.875 0C.839 0 0 .84 0 1.875v4.792h24V1.875C24 .839 23.16 0 22.125 0zM0 8.889v6.222h24V8.89zm0 8.444v4.792C0 23.161.84 24 1.875 24h9v-6.667zm13.125 0V24h9C23.161 24 24 23.16 24 22.125v-4.792z"
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
export class SiElasticstackIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#005571');
}
