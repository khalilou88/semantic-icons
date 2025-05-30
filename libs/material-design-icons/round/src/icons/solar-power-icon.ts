import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-solar-power-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.33 16H11v-3H5.6c-.94 0-1.75.65-1.95 1.57L3.33 16zM13 16h7.67l-.32-1.43A2.007 2.007 0 0 0 18.4 13H13v3zm8.11 2H13v4h6.51c1.28 0 2.23-1.18 1.95-2.43L21.11 18zM4.49 22H11v-4H2.89l-.35 1.57C2.26 20.82 3.21 22 4.49 22zM12 8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1zm6.59.62a.996.996 0 0 0 0-1.41l-.71-.71a.996.996 0 1 0-1.41 1.41l.71.71c.39.39 1.02.39 1.41 0zm-11.77 0 .71-.71A.996.996 0 1 0 6.12 6.5l-.71.7a.996.996 0 0 0 0 1.41c.39.4 1.02.4 1.41.01zM5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm15 0h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm-8 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5z"
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
export class SiSolarPowerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
