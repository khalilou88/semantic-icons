import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-troubleshoot-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m21.29 19.88-3.98-3.98a7.93 7.93 0 0 0 1.58-6.2c-.54-3.41-3.33-6.14-6.75-6.62C7.57 2.44 3.61 5.69 3.07 10h2.02a6.01 6.01 0 0 1 6.85-4.93c2.61.4 4.7 2.57 5.02 5.2A6.011 6.011 0 0 1 11 17c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69l3.98 3.98a.996.996 0 1 0 1.41-1.41z"
    />
    <svg:path
      d="m8.43 9.69 1.03 4.47c.11.49.55.84 1.05.84.46 0 .87-.3 1.02-.74l1.01-3.04.69 1.66c.16.37.52.62.92.62h.58c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.23l-.97-2.34c-.17-.4-.56-.66-1-.66h-.05c-.46 0-.87.3-1.02.74l-.88 2.63-1.04-4.54C9.43 7.35 8.99 7 8.49 7c-.47 0-.89.31-1.03.76L6.45 11h-4.7c-.41 0-.75.34-.75.75s.34.75.75.75h5.07c.44 0 .82-.28.95-.7l.66-2.11z"
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
export class SiTroubleshootIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
