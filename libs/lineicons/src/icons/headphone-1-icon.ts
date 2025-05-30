import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-headphone-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 3.25C7.16753 3.25 3.25 7.16753 3.25 12V17.0518C3.25 17.054 3.25001 17.0563 3.25003 17.0586V17.25C3.25003 18.4926 4.25739 19.5 5.50003 19.5H6.50003C7.74267 19.5 8.75003 18.4926 8.75003 17.25V13.75C8.75003 12.5074 7.74267 11.5 6.50003 11.5H5.50003C5.24061 11.5 4.99144 11.5439 4.75955 11.6247C4.95486 7.79505 8.12185 4.75 12 4.75C15.8782 4.75 19.0452 7.79502 19.2405 11.6246C19.0087 11.5439 18.7596 11.5 18.5002 11.5H17.5002C16.2576 11.5 15.2502 12.5074 15.2502 13.75V17.25C15.2502 18.4926 16.2576 19.5 17.5002 19.5H18.5002C19.7429 19.5 20.7502 18.4926 20.7502 17.25V13.75C20.7502 13.7418 20.7502 13.7336 20.7501 13.7254V12C20.7501 7.16753 16.8326 3.25 12 3.25ZM19.2501 13.7358V17.0518C19.2501 17.0565 19.2501 17.0612 19.2502 17.066V17.25C19.2502 17.6642 18.9144 18 18.5002 18H17.5002C17.086 18 16.7502 17.6642 16.7502 17.25V13.75C16.7502 13.3358 17.086 13 17.5002 13H18.5002C18.9097 13 19.2425 13.3281 19.2501 13.7358ZM6.50003 13C6.91424 13 7.25003 13.3358 7.25003 13.75V17.25C7.25003 17.6642 6.91424 18 6.50003 18H5.50003C5.08582 18 4.75003 17.6642 4.75003 17.25V13.75C4.75003 13.3358 5.08582 13 5.50003 13H6.50003Z"
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
export class SiHeadphone1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
