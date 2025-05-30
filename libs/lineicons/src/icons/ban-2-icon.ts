import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ban-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2.00098C6.47715 2.00098 2 6.47813 2 12.001C2 17.5238 6.47715 22.001 12 22.001C17.5228 22.001 22 17.5238 22 12.001C22 6.47813 17.5228 2.00098 12 2.00098ZM3.5 12.001C3.5 7.30656 7.30558 3.50098 12 3.50098C14.0774 3.50098 15.9808 4.24624 17.4573 5.48398L5.48301 17.4583C4.24526 15.9818 3.5 14.0784 3.5 12.001ZM6.54375 18.5189L18.5179 6.54473C19.7551 8.02111 20.5 9.92405 20.5 12.001C20.5 16.6954 16.6944 20.501 12 20.501C9.92307 20.501 8.02013 19.7561 6.54375 18.5189Z"
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
export class SiBan2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
