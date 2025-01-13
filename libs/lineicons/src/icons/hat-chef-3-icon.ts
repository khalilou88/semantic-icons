import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hat-chef-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.001 2C10.2069 2 8.64653 2.99434 7.83845 4.4604C6.27659 4.09033 4.5939 4.76437 3.75023 6.22564C2.72046 8.00927 3.33157 10.29 5.1152 11.3198L5.54006 11.5651V20C5.54006 20.4142 5.87584 20.75 6.29006 20.75H17.6423C18.0565 20.75 18.3923 20.4142 18.3923 20V11.6034L18.8857 11.3186C20.6693 10.2888 21.2805 8.00807 20.2507 6.22444C19.4071 4.76328 17.7246 4.08924 16.1628 4.45912C15.3546 2.99377 13.7946 2 12.001 2ZM8.94355 5.64474C9.39622 4.39283 10.5953 3.5 12.001 3.5C13.4062 3.5 14.605 4.39226 15.058 5.64356C15.1297 5.84158 15.2813 6.00033 15.4759 6.08102C15.6704 6.16171 15.8899 6.1569 16.0807 6.06777C17.1164 5.58393 18.3692 5.96558 18.9516 6.97444C19.5672 8.04063 19.2019 9.40396 18.1357 10.0195L17.2673 10.5209C17.0352 10.6549 16.8923 10.9025 16.8923 11.1704V15.5H7.04006V11.132C7.04006 10.8641 6.89711 10.6165 6.66506 10.4825L5.8652 10.0207C4.79901 9.40516 4.43371 8.04183 5.04927 6.97564C5.63182 5.96664 6.88486 5.58503 7.92067 6.06916C8.11152 6.15837 8.33109 6.16319 8.52567 6.08245C8.72026 6.00171 8.87191 5.84286 8.94355 5.64474ZM7.04006 17H16.8923V19.25H7.04006V17Z"
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
export class SiHatChef3Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
