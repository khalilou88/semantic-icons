import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gps-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 16L15 22H9L12 16ZM9.37258 16.2548C7.94863 15.3737 7 13.7976 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 13.7976 16.0514 15.3737 14.6274 16.2548L13.2718 13.5436C13.7165 13.1768 14 12.6215 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 12.6215 10.2835 13.1768 10.7282 13.5436L9.37258 16.2548ZM7.13153 20.7369C4.07014 19.0274 2 15.7554 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 15.7554 19.9299 19.0274 16.8685 20.7369L15.5246 18.0492C17.6033 16.8354 19 14.5808 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 14.5808 6.39666 16.8354 8.47539 18.0492L7.13153 20.7369Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGpsFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
