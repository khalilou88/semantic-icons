import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-highlighter-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.05865 4.00153C9.18526 2.86205 10.1484 2 11.2949 2H12.7555C13.9019 2 14.8651 2.86206 14.9917 4.00153L16.1499 14.425C16.2218 15.0723 16.0097 15.719 15.5684 16.1979L15.1707 16.6296C15.0754 16.7331 15.0111 16.8613 14.9852 16.9996L14.6097 19.0021C14.5423 19.3615 14.2284 19.622 13.8627 19.622H13.6963V20.559C13.6963 20.8717 13.5024 21.1515 13.2096 21.2613L11.3671 21.9522C11.1368 22.0386 10.8787 22.0066 10.6766 21.8664C10.4744 21.7263 10.3538 21.496 10.3538 21.25L10.3538 19.622H10.1942C9.8285 19.622 9.51465 19.3615 9.44726 19.0021L9.07347 17.0086C9.04755 16.8703 8.98325 16.7421 8.88792 16.6386L8.48193 16.1979C8.04065 15.719 7.82857 15.0723 7.90049 14.425L9.05865 4.00153ZM11.2949 3.5C10.9127 3.5 10.5917 3.78735 10.5495 4.16717L9.61862 12.5449H14.4317L13.5009 4.16718C13.4587 3.78735 13.1376 3.5 12.7555 3.5H11.2949ZM14.5984 14.0449H9.45195L9.39132 14.5906C9.36734 14.8064 9.43804 15.0219 9.58513 15.1816L9.99112 15.6223C10.2771 15.9327 10.47 16.3173 10.5478 16.7322L10.8084 18.122H13.2486L13.5108 16.7232C13.5886 16.3083 13.7815 15.9237 14.0675 15.6133L14.4652 15.1816C14.6123 15.0219 14.683 14.8064 14.659 14.5906L14.5984 14.0449Z"
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
export class SiHighlighter2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
