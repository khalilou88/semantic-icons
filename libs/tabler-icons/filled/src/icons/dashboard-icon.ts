import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dashboard-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 2.954a10 10 0 0 1 6.222 17.829a1 1 0 0 1 -.622 .217h-11.2a1 1 0 0 1 -.622 -.217a10 10 0 0 1 6.222 -17.829m4.207 5.839a1 1 0 0 0 -1.414 0l-2.276 2.274a2.003 2.003 0 0 0 -2.514 1.815l-.003 .118a2 2 0 1 0 3.933 -.517l2.274 -2.276a1 1 0 0 0 0 -1.414"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDashboardIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
