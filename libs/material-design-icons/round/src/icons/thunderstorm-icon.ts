import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-thunderstorm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48zm-1.97 13.09-.84-.42.9-1.03c.36-.42.32-1.05-.09-1.41-.42-.36-1.05-.32-1.41.09l-1.75 2c-.2.23-.29.55-.23.85.06.3.26.56.53.7l.84.42-.9 1.03c-.36.42-.32 1.05.09 1.41.19.17.42.25.66.25.28 0 .55-.12.75-.34l1.75-2c.2-.23.29-.55.23-.85a.982.982 0 0 0-.53-.7zm-6 0-.85-.43.9-1.03c.36-.42.32-1.05-.09-1.41-.42-.36-1.05-.32-1.41.09l-1.75 2c-.2.23-.29.55-.23.85.06.3.26.56.53.7l.84.42L7 22.34c-.36.42-.32 1.05.09 1.41.19.17.43.25.66.25.28 0 .55-.12.75-.34l1.75-2c.2-.23.29-.55.23-.85a.982.982 0 0 0-.53-.7z"
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
export class SiThunderstormIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
