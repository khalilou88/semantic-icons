import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-volkswagen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.889 4.7492C13.2867 4.58367 12.6489 4.50451 12.0041 4.50451C11.3593 4.50451 10.7498 4.59087 10.1546 4.742L12.0253 9.9813L13.889 4.7492Z"
      fill="#323544"
    />
    <svg:path
      d="M19.3801 12.0037C19.3801 11.0681 19.2242 10.1757 18.9124 9.34807L15.4047 18.6464C17.7574 17.3941 19.3801 14.8896 19.3801 12.0037Z"
      fill="#323544"
    />
    <svg:path
      d="M15.7173 5.51908L13.556 11.5644H10.509L8.34067 5.49027C7.53992 5.95808 6.83842 6.5698 6.25736 7.3039L9.3398 15.4219L10.4665 12.4568H13.4285L14.5552 15.4219L17.666 7.20312C17.1204 6.52662 16.4543 5.95808 15.7102 5.51187"
      fill="#323544"
    />
    <svg:path
      d="M12.004 2C6.58309 2 2.1543 6.49081 2.1543 12.0036C2.1543 17.5164 6.58309 22 12.004 22C17.4249 22 21.8466 17.502 21.8466 12.0036C21.8466 6.50522 17.432 2 12.004 2ZM12.004 20.7262C7.27756 20.7262 3.40854 16.8111 3.40854 12.0108C3.40854 7.2105 7.27047 3.27384 12.004 3.27384C16.7375 3.27384 20.5994 7.19612 20.5994 12.0108C20.5994 16.8255 16.7375 20.7262 12.004 20.7262Z"
      fill="#323544"
    />
    <svg:path
      d="M11.9398 14.0547L10.0337 19.0709V19.2293C10.6572 19.4092 11.3163 19.4955 12.0036 19.4955C12.6485 19.4955 13.272 19.4164 13.8672 19.258L13.846 19.0709L11.9398 14.0547Z"
      fill="#323544"
    />
    <svg:path
      d="M4.62725 12.0036C4.62725 14.8248 6.17203 17.2933 8.46794 18.5671L5.04534 9.51352C4.76898 10.2908 4.62725 11.1256 4.62725 12.0036Z"
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
export class SiVolkswagenIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
