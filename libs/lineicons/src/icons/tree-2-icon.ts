import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tree-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.52344 9.5C4.52344 5.35786 7.8813 2 12.0234 2C16.1656 2 19.5234 5.35786 19.5234 9.5V11C19.5234 14.889 16.5634 18.0867 12.7734 18.463V21.25C12.7734 21.6642 12.4377 22 12.0234 22C11.6092 22 11.2734 21.6642 11.2734 21.25V18.463C7.48345 18.0867 4.52344 14.889 4.52344 11V9.5ZM12.7734 16.9536C15.7332 16.5845 18.0234 14.0597 18.0234 11V9.5C18.0234 6.18629 15.3371 3.5 12.0234 3.5C8.70973 3.5 6.02344 6.18629 6.02344 9.5V11C6.02344 14.0597 8.3137 16.5845 11.2734 16.9536V14.7522C10.9662 14.6439 10.6778 14.4669 10.432 14.2211L9.41304 13.2022C9.12014 12.9093 9.12013 12.4345 9.41302 12.1416C9.7059 11.8487 10.1808 11.8486 10.4737 12.1415L11.4927 13.1605C11.7855 13.4533 12.2604 13.4533 12.5533 13.1605L13.5722 12.1415C13.8651 11.8487 14.34 11.8487 14.6329 12.1415C14.9258 12.4344 14.9258 12.9093 14.6329 13.2022L13.614 14.2211C13.3685 14.4666 13.0804 14.6435 12.7734 14.7518V16.9536Z"
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
export class SiTree2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
