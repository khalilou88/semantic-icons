import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chart-grid-dots-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M18 2a1 1 0 0 1 1 1v.171a3.008 3.008 0 0 1 1.83 1.83l.17 -.001a1 1 0 0 1 0 2h-.171a3.008 3.008 0 0 1 -1.828 1.829l-.001 2.171h2a1 1 0 0 1 0 2h-2v2.171a3.008 3.008 0 0 1 1.83 1.83l.17 -.001a1 1 0 0 1 0 2h-.171a3.008 3.008 0 0 1 -1.828 1.829l-.001 .171a1 1 0 0 1 -2 0v-.17a3.008 3.008 0 0 1 -1.829 -1.83h-2.171v2a1 1 0 0 1 -2 0v-2h-2.171a3.008 3.008 0 0 1 -1.828 1.829l-.001 .171a1 1 0 0 1 -2 0v-.17a3.008 3.008 0 0 1 -1.829 -1.83h-.171a1 1 0 0 1 0 -2h.17a3.008 3.008 0 0 1 1.83 -1.83v-.34a3.008 3.008 0 0 1 -1.829 -1.83h-.171a1 1 0 0 1 0 -2h.17a3.008 3.008 0 0 1 1.83 -1.83v-2.17h-2a1 1 0 1 1 0 -2h2v-2a1 1 0 1 1 2 0v2h4v-2a1 1 0 0 1 2 0v2h2.17a3.008 3.008 0 0 1 1.83 -1.83v-.17a1 1 0 0 1 1 -1zm-7 11h-2.171a3.008 3.008 0 0 1 -1.828 1.829v.342a3.008 3.008 0 0 1 1.828 1.829h2.171v-4zm6 0h-4v4h2.17a3.008 3.008 0 0 1 1.83 -1.83v-2.17zm-6 -6h-4v2.171a3.008 3.008 0 0 1 1.83 1.83l2.17 -.001v-4zm4.171 0h-2.171v4h4v-2.17a3.008 3.008 0 0 1 -1.829 -1.83z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChartGridDotsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
