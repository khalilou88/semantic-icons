import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-eraser-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.0443 3.12928C11.6657 2.05312 13.0417 1.6844 14.1179 2.30572L18.881 5.05572C19.9572 5.67705 20.3259 7.05312 19.7046 8.12928L14.8882 16.4715C14.6811 16.8303 14.2224 16.9532 13.8637 16.7461L13.647 16.621L12.5239 18.5662C12.3168 18.9249 11.8581 19.0478 11.4994 18.8407L5.87024 15.5907C5.51152 15.3836 5.38862 14.9249 5.59572 14.5662L6.7188 12.621L6.50245 12.4961C6.14373 12.289 6.02082 11.8303 6.22793 11.4715L11.0443 3.12928ZM12.348 15.871L8.01784 13.371L7.26976 14.6667L11.5999 17.1667L12.348 15.871ZM13.9641 15.072L18.4056 7.37928C18.6127 7.02056 18.4898 6.56187 18.131 6.35476L13.3679 3.60476C13.0092 3.39766 12.5505 3.52056 12.3434 3.87928L7.90197 11.572L8.0905 11.6809C8.09995 11.6858 8.10934 11.691 8.11866 11.6964L13.7478 14.9464C13.7571 14.9517 13.7663 14.9573 13.7753 14.963L13.9641 15.072Z"
      fill="#323544"
    />
    <svg:path
      d="M5.25 20.5C4.83579 20.5 4.5 20.8358 4.5 21.25C4.5 21.6642 4.83579 22 5.25 22H18.75C19.1642 22 19.5 21.6642 19.5 21.25C19.5 20.8358 19.1642 20.5 18.75 20.5H5.25Z"
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
export class SiEraser1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
