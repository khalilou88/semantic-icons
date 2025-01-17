import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-camera-movie-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.2391 7C15.5625 6.49485 15.75 5.89432 15.75 5.25C15.75 3.45507 14.2949 2 12.5 2C11.3108 2 10.2709 2.63866 9.70433 3.59168C9.23578 3.22117 8.64372 3 8 3C6.48122 3 5.25 4.23122 5.25 5.75C5.25 6.20011 5.35814 6.62497 5.54985 7H4.75C3.50736 7 2.5 8.00736 2.5 9.25V17.25C2.5 18.4926 3.50736 19.5 4.75 19.5H16.25C17.4926 19.5 18.5 18.4926 18.5 17.25V16.9224L20.5663 18.2724C21.3977 18.8155 22.5 18.219 22.5 17.2259V9.27417C22.5 8.28106 21.3977 7.68453 20.5663 8.22769L18.5 9.57763V9.25C18.5 8.00736 17.4926 7 16.25 7H15.2391ZM10.75 5.25C10.75 4.2835 11.5335 3.5 12.5 3.5C13.4665 3.5 14.25 4.2835 14.25 5.25C14.25 6.2165 13.4665 7 12.5 7C11.5335 7 10.75 6.2165 10.75 5.25ZM18.5 11.3694L21 9.73611V16.764L18.5 15.1307V11.3694ZM9.25 5.75C9.25 6.44036 8.69036 7 8 7C7.30964 7 6.75 6.44036 6.75 5.75C6.75 5.05964 7.30964 4.5 8 4.5C8.69036 4.5 9.25 5.05964 9.25 5.75ZM4.75 8.5H16.25C16.6642 8.5 17 8.83579 17 9.25V17.25C17 17.6642 16.6642 18 16.25 18H4.75C4.33579 18 4 17.6642 4 17.25V9.25C4 8.83579 4.33579 8.5 4.75 8.5Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCameraMovie1Icon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
