import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stamp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.12229 4.3875C9.04305 3.0932 10.0714 2 11.3681 2H12.6788C13.9755 2 15.0038 3.0932 14.9246 4.3875L14.3208 14.25H18.5234C19.7661 14.25 20.7734 15.2574 20.7734 16.5V19.75C20.7734 20.1642 20.4377 20.5 20.0234 20.5H19.5234V21.25C19.5234 21.6642 19.1877 22 18.7734 22H5.27344C4.85922 22 4.52344 21.6642 4.52344 21.25V20.5H4.02344C3.82453 20.5 3.63376 20.421 3.49311 20.2803C3.35246 20.1397 3.27344 19.9489 3.27344 19.75V16.5C3.27344 15.2574 4.2808 14.25 5.52344 14.25H9.72611L9.12229 4.3875ZM19.2734 19V16.5C19.2734 16.0858 18.9377 15.75 18.5234 15.75H5.52344C5.10922 15.75 4.77344 16.0858 4.77344 16.5V19H19.2734ZM13.4274 4.29583C13.4538 3.8644 13.111 3.5 12.6788 3.5H11.3681C10.9358 3.5 10.5931 3.8644 10.6195 4.29583L11.2289 14.25H12.818L13.4274 4.29583Z"
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
export class SiStampIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
