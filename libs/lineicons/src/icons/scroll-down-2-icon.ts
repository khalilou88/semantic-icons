import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scroll-down-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.4698 16.2776C11.7626 16.5702 12.2372 16.5702 12.5301 16.2776L14.7801 14.0291C15.0731 13.7363 15.0733 13.2614 14.7805 12.9684C14.4877 12.6754 14.0129 12.6753 13.7199 12.9681L11.9999 14.6868L10.2802 12.9681C9.98718 12.6753 9.5123 12.6754 9.2195 12.9684C8.9267 13.2614 8.92685 13.7363 9.21984 14.0291L11.4698 16.2776Z"
      fill="#323544"
    />
    <svg:path
      d="M12 9.05488C11.5582 9.05488 11.2 8.69671 11.2 8.25488C11.2 7.81306 11.5582 7.45478 12 7.45478C12.4418 7.45478 12.8 7.81295 12.8 8.25478C12.8 8.69661 12.4418 9.05488 12 9.05488Z"
      fill="#323544"
    />
    <svg:path
      d="M11.2 11.0713C11.2 11.5131 11.5582 11.8713 12 11.8713C12.4418 11.8713 12.8 11.5131 12.8 11.0713C12.8 10.6295 12.4418 10.2712 12 10.2712C11.5582 10.2712 11.2 10.6295 11.2 11.0713Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.00098C7.85786 2.00098 4.5 5.35884 4.5 9.50098V14.501C4.5 18.6431 7.85786 22.001 12 22.001C16.1421 22.001 19.5 18.6431 19.5 14.501V9.50098C19.5 5.35884 16.1421 2.00098 12 2.00098ZM6 9.50098C6 6.18727 8.68629 3.50098 12 3.50098C15.3137 3.50098 18 6.18727 18 9.50098V14.501C18 17.8147 15.3137 20.501 12 20.501C8.68629 20.501 6 17.8147 6 14.501V9.50098Z"
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
export class SiScrollDown2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
