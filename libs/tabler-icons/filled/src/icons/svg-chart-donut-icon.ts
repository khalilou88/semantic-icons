import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-chart-donut-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-chart-donut"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M11.292 2.61c.396 .318 .65 .78 .703 1.286l.005 .104v4a1 1 0 0 1 -.748 .968a3.1 3.1 0 1 0 3.78 3.78a1 1 0 0 1 .968 -.748h3.8a2 2 0 0 1 2 2a1 1 0 0 1 -.026 .226a10 10 0 1 1 -12 -12l.057 -.01l.052 -.01a1.9 1.9 0 0 1 1.409 .404m3.703 -.11l.045 .002l.067 .004l.081 .014l.032 .004l.072 .022l.04 .01a10 10 0 0 1 6.003 5.818l.108 .294a1 1 0 0 1 -.943 1.332h-4.5a1 1 0 0 1 -.76 -.35a8 8 0 0 0 -.89 -.89a1 1 0 0 1 -.35 -.76v-4.5q .001 -.119 .026 -.23l.03 -.102a1 1 0 0 1 .168 -.299l.03 -.033l.039 -.043a1 1 0 0 1 .089 -.08l.051 -.034l.03 -.023l.045 -.025l.052 -.03a1 1 0 0 1 .435 -.101"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgChartDonutIcon {
  readonly class = input<string>('');
}
