import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloud-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.38687 9.98359C6.45685 6.94319 8.94344 4.5 12.0007 4.5C14.4558 4.5 16.5415 6.07501 17.3051 8.26898C19.9715 8.72575 22.0001 11.0476 22.0001 13.8439C22.0001 16.9678 19.4676 19.5003 16.3437 19.5003H6.76578C4.13371 19.5003 2 17.3666 2 14.7345C2 12.23 3.93195 10.1767 6.38687 9.98359ZM12.0007 6C9.72784 6 7.88536 7.84248 7.88536 10.1153V10.7188C7.88536 11.133 7.54957 11.4688 7.13536 11.4688H6.76578C4.96214 11.4688 3.5 12.9309 3.5 14.7345C3.5 16.5382 4.96214 18.0003 6.76578 18.0003H16.3437C18.6392 18.0003 20.5001 16.1394 20.5001 13.8439C20.5001 11.6577 18.8118 9.86517 16.6684 9.69996C16.3454 9.67506 16.0748 9.44553 15.9977 9.13086C15.5566 7.33307 13.9334 6 12.0007 6Z"
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
export class SiCloud2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
