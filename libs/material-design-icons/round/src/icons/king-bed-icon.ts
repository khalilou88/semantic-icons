import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-king-bed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33l.51 1.53c.1.28.36.47.66.47a.7.7 0 0 0 .66-.47L5.67 17h12.67l.51 1.53c.09.28.35.47.65.47a.7.7 0 0 0 .66-.47l.51-1.53H22v-5c0-1.1-.9-2-2-2zm-9 0H6V8c0-.55.45-1 1-1h4v3zm7 0h-5V7h4c.55 0 1 .45 1 1v2z"
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
export class SiKingBedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
