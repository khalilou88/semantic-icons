import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-view-week-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.33 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.33c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2zM22 18V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H20a2 2 0 0 0 2-2zm-7.33 0V6c0-1.1-.9-2-2-2h-1.33c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h1.33c1.1 0 2-.9 2-2z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiViewWeekIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
