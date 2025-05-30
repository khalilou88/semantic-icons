import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-adonis-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 21C4.74136 21 3 19.2586 3 12C3 4.74136 4.74136 3 12 3C19.2586 3 21 4.74136 21 12C21 19.2586 19.2586 21 12 21ZM9.45216 7.45416L6.62932 13.8697C6.501 14.1813 6.39103 14.5845 6.39103 14.9328C6.39103 16.5275 7.50914 17.6457 9.10383 17.6457C9.62646 17.6457 10.0604 17.5084 10.5016 17.3688L10.502 17.3686C10.9582 17.2242 11.4223 17.0774 12 17.0774C12.5844 17.0774 13.0374 17.223 13.4849 17.3667L13.485 17.3667C13.9216 17.507 14.353 17.6457 14.8961 17.6457C16.4908 17.6457 17.609 16.5275 17.609 14.9328C17.609 14.5845 17.4989 14.1813 17.3707 13.8697L14.5479 7.45416C14.0712 6.37275 13.1548 5.78613 12 5.78613C10.8452 5.78613 9.92873 6.37268 9.45216 7.45416ZM9.2138 14.8778L12 8.57234L14.7495 14.8778C13.9613 14.4929 12.9715 14.3096 12 14.3096C10.9919 14.3096 10.0386 14.4929 9.2138 14.8778Z"
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
export class SiAdonisIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
