import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-play-store-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.88626 2L13.6994 10.8115L15.9736 8.53729C12.866 6.65184 8.70388 4.12253 6.83204 2.98532L5.57797 2.22559C5.35633 2.09056 5.11897 2.01784 4.88626 2ZM3.54099 3.05499C3.52315 3.15181 3.50781 3.24911 3.50781 3.35357V20.7675C3.50781 20.8405 3.5225 20.9085 3.53269 20.9782L12.4985 12.0125L3.54099 3.05499ZM17.4682 9.44464L14.9004 12.0125L17.4234 14.5355C18.7602 13.7252 19.686 13.1626 19.7888 13.1006C20.2432 12.8229 20.4998 12.4039 20.4921 11.9461C20.4854 11.4968 20.2287 11.0951 19.7921 10.848C19.6945 10.7919 18.7812 10.2404 17.4682 9.44464ZM13.6994 13.2134L4.91281 22C5.08352 21.9703 5.25401 21.9194 5.41707 21.8208C5.64301 21.6833 11.746 17.9805 15.9288 15.4428L13.6994 13.2134Z"
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
export class SiPlayStoreIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
