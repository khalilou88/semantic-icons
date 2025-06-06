import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-future-learn-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>FutureLearn</svg:title>
    <svg:path
      d="M22.081.61v7.566h-7.223v6.661H7.566v6.634H0v1.92h9.471v-6.649h7.306v-6.66H24V.61Z"
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
export class SiFutureLearnIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DE00A5');
}
