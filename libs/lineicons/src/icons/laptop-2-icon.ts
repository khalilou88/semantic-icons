import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-laptop-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 4.5C4.75736 4.5 3.75 5.50736 3.75 6.75V15H2.75C2.49007 15 2.24867 15.1346 2.11201 15.3557C1.97536 15.5768 1.96293 15.8529 2.07918 16.0854L3.16459 18.2562C3.54572 19.0185 4.32481 19.5 5.17705 19.5H18.8229C19.6752 19.5 20.4543 19.0185 20.8354 18.2562L21.9208 16.0854C22.0371 15.8529 22.0246 15.5768 21.888 15.3557C21.7513 15.1346 21.5099 15 21.25 15H20.25V6.75C20.25 5.50736 19.2426 4.5 18 4.5H6ZM20.0365 16.5L19.4938 17.5854C19.3667 17.8395 19.107 18 18.8229 18H5.17705C4.89297 18 4.63328 17.8395 4.50623 17.5854L3.96353 16.5H20.0365ZM18.75 15H5.25V6.75C5.25 6.33579 5.58579 6 6 6H18C18.4142 6 18.75 6.33579 18.75 6.75V15Z"
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
export class SiLaptop2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
