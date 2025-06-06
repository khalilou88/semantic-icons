import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-file-xmark-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.75 20.5V22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V9.62105C4.5 9.02455 4.73686 8.45247 5.15851 8.03055L10.5262 2.65951C10.9482 2.23725 11.5207 2 12.1177 2H17.25C18.4926 2 19.5 3.00736 19.5 4.25V9.75H18V4.25C18 3.83579 17.6642 3.5 17.25 3.5H12.248L12.2509 7.4984C12.2518 8.74166 11.2442 9.75 10.0009 9.75H6V19.75C6 20.1642 6.33579 20.5 6.75 20.5H9.75ZM10.7488 4.55876L7.05986 8.25H10.0009C10.4153 8.25 10.7512 7.91389 10.7509 7.49947L10.7488 4.55876Z"
      fill="#323544"
    />
    <svg:path
      d="M12.4853 12.4853C12.1924 12.7782 12.1924 13.2531 12.4853 13.546L15.5643 16.625L12.4853 19.704C12.1924 19.9969 12.1924 20.4718 12.4853 20.7647C12.7782 21.0576 13.2531 21.0576 13.546 20.7647L16.625 17.6857L19.7026 20.7633C19.9955 21.0562 20.4704 21.0562 20.7633 20.7633C21.0562 20.4704 21.0562 19.9955 20.7633 19.7026L17.6857 16.625L20.7633 13.5474C21.0562 13.2545 21.0562 12.7796 20.7633 12.4867C20.4704 12.1938 19.9955 12.1938 19.7026 12.4867L16.625 15.5643L13.546 12.4853C13.2531 12.1924 12.7782 12.1924 12.4853 12.4853Z"
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
export class SiFileXmarkIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
