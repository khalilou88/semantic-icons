import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-atlassian-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.89224 11.255C7.57007 10.9328 7.11902 10.9328 6.92571 11.3517L2.06087 21.1136C1.86756 21.468 2.15752 21.9835 2.60857 21.9835H9.40647C9.632 21.9835 9.85752 21.8546 9.95417 21.6613C11.404 18.6006 10.5019 13.9935 7.89224 11.255ZM11.5006 2.33072C6.79684 9.86965 11.1784 15.8944 14.0458 21.6613C14.1425 21.8546 14.368 21.9835 14.5935 21.9835H21.3914C21.8425 21.9835 22.1324 21.5324 21.9391 21.1136C21.9391 21.1136 12.8215 2.78177 12.596 2.33072C12.3061 1.91189 11.7584 1.91189 11.5006 2.33072Z"
      fill="#323544"
    />
  `,
  host: {
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
export class SiAtlassianIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
