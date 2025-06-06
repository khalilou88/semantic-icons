import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stats-chart-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="48"
      height="160"
      x="64"
      y="320"
      rx="8"
      ry="8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="48"
      height="256"
      x="288"
      y="224"
      rx="8"
      ry="8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="48"
      height="368"
      x="400"
      y="112"
      rx="8"
      ry="8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="48"
      height="448"
      x="176"
      y="32"
      rx="8"
      ry="8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStatsChartOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
