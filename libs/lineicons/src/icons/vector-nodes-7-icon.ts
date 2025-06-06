import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vector-nodes-7-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.52344 2.75C4.52344 2.33579 4.85922 2 5.27344 2H8.27344C8.68765 2 9.02344 2.33579 9.02344 2.75V5.75C9.02344 6.16421 8.68765 6.5 8.27344 6.5H7.48438L7.48438 9.75H8.27344C8.68765 9.75 9.02344 10.0858 9.02344 10.5V11.25H15.0234V10.5C15.0234 10.0858 15.3592 9.75 15.7734 9.75H18.7734C19.1877 9.75 19.5234 10.0858 19.5234 10.5V13.5C19.5234 13.9142 19.1877 14.25 18.7734 14.25H18.0234V17.5H18.7734C19.1877 17.5 19.5234 17.8358 19.5234 18.25V21.25C19.5234 21.6642 19.1877 22 18.7734 22H15.7734C15.3592 22 15.0234 21.6642 15.0234 21.25V18.25C15.0234 17.8358 15.3592 17.5 15.7734 17.5H16.5234V14.25H15.7734C15.3592 14.25 15.0234 13.9142 15.0234 13.5V12.75H9.02344V13.5C9.02344 13.9142 8.68765 14.25 8.27344 14.25H5.27344C4.85922 14.25 4.52344 13.9142 4.52344 13.5V10.5C4.52344 10.0858 4.85922 9.75 5.27344 9.75H5.98438L5.98438 6.5H5.27344C4.85922 6.5 4.52344 6.16421 4.52344 5.75V2.75ZM16.5234 12.75H18.0234V11.25H16.5234V12.75ZM7.52344 11.25H6.02344V12.75H7.52344V11.25ZM7.52344 5V3.5H6.02344V5H7.52344ZM16.5234 19V20.5H18.0234V19H16.5234Z"
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
export class SiVectorNodes7Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
