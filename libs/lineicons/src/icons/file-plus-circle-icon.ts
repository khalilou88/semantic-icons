import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-file-plus-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.9453 20.5C11.3327 21.0667 11.8027 21.5725 12.338 22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V9.62105C4.5 9.02455 4.73686 8.45247 5.15851 8.03055L10.5262 2.65951C10.9482 2.23725 11.5207 2 12.1177 2H17.25C18.4926 2 19.5 3.00736 19.5 4.25V10.3782C19.0266 10.1599 18.5241 9.99391 18 9.88753V4.25C18 3.83579 17.6642 3.5 17.25 3.5H12.248L12.2509 7.4984C12.2518 8.74166 11.2442 9.75 10.0009 9.75H6V19.75C6 20.1642 6.33579 20.5 6.75 20.5H10.9453ZM10.7488 4.55876L7.05986 8.25H10.0009C10.4153 8.25 10.7512 7.91389 10.7509 7.49947L10.7488 4.55876Z"
      fill="#323544"
    />
    <svg:path
      d="M15.8751 14.9999C15.8751 14.5857 16.2109 14.2499 16.6251 14.2499C17.0393 14.2499 17.3751 14.5857 17.3751 14.9999V15.8749H18.2502C18.6644 15.8749 19.0002 16.2107 19.0002 16.6249C19.0002 17.0391 18.6644 17.3749 18.2502 17.3749H17.3751V18.25C17.3751 18.6643 17.0393 19 16.6251 19C16.2109 19 15.8751 18.6643 15.8751 18.25V17.3749H15C14.5858 17.3749 14.25 17.0391 14.25 16.6249C14.25 16.2107 14.5858 15.8749 15 15.8749H15.8751V14.9999Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 16.625C11.25 13.6565 13.6565 11.25 16.625 11.25C19.5935 11.25 22 13.6565 22 16.625C22 19.5935 19.5935 22 16.625 22C13.6565 22 11.25 19.5935 11.25 16.625ZM16.625 12.75C14.4849 12.75 12.75 14.4849 12.75 16.625C12.75 18.7651 14.4849 20.5 16.625 20.5C18.7651 20.5 20.5 18.7651 20.5 16.625C20.5 14.4849 18.7651 12.75 16.625 12.75Z"
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
export class SiFilePlusCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
