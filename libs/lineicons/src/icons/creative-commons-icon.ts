import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-creative-commons-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 4.2597C7.72515 4.2597 4.2597 7.72515 4.2597 12C4.2597 16.2748 7.72515 19.7403 12 19.7403C16.2748 19.7403 19.7403 16.2748 19.7403 12C19.7403 7.72515 16.2748 4.2597 12 4.2597ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      fill="#323544"
    />
    <svg:path
      d="M8.75606 14.8269C10.0924 14.8269 11.2128 13.8915 11.5007 12.6373H10.154C9.90735 13.1719 9.3728 13.5419 8.75603 13.5419C7.9028 13.5419 7.21407 12.8532 7.21407 12C7.21407 11.1468 7.9028 10.458 8.75603 10.458C9.37277 10.458 9.90735 10.8281 10.154 11.3524H11.5007C11.2128 10.1085 10.0924 9.17308 8.75606 9.17308C7.19357 9.17308 5.9292 10.4375 5.9292 11.9999C5.9292 13.5625 7.19357 14.8269 8.75606 14.8269ZM14.8743 14.8269C16.2106 14.8269 17.3311 13.8915 17.6189 12.6373H16.2723C16.0255 13.1719 15.491 13.5419 14.8742 13.5419C14.021 13.5419 13.3323 12.8532 13.3323 12C13.3323 11.1468 14.021 10.458 14.8742 10.458C15.4909 10.458 16.0255 10.8281 16.2723 11.3524H17.6189C17.3311 10.1085 16.2106 9.17308 14.8743 9.17308C13.3118 9.17308 12.0475 10.4375 12.0475 11.9999C12.0474 13.5625 13.3118 14.8269 14.8743 14.8269Z"
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
export class SiCreativeCommonsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
