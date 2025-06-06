import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-leaf-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.52344 2C8.89979 2 10.9664 3.32622 12.0234 5.27888C13.0805 3.32622 15.1471 2 17.5234 2H20.0234C20.4377 2 20.7734 2.33579 20.7734 2.75V5.25C20.7734 8.70178 17.9752 11.5 14.5234 11.5H12.7734L12.7734 21.2508C12.7734 21.665 12.4377 22.0008 12.0234 22.0008C11.6092 22.0008 11.2734 21.665 11.2734 21.2508L11.2734 11.5H9.52344C6.07166 11.5 3.27344 8.70178 3.27344 5.25V2.75C3.27344 2.33579 3.60922 2 4.02344 2H6.52344ZM11.2734 10V8.25C11.2734 5.62665 9.14679 3.5 6.52344 3.5H4.77344V5.25C4.77344 7.87335 6.90008 10 9.52344 10H11.2734ZM12.7734 10H14.5234C17.1468 10 19.2734 7.87335 19.2734 5.25V3.5H17.5234C14.9001 3.5 12.7734 5.62665 12.7734 8.25V10Z"
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
export class SiLeaf1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
