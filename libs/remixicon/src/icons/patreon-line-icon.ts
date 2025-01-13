import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-patreon-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.001 17C10.8588 17 7.50098 13.6421 7.50098 9.5C7.50098 5.35786 10.8588 2 15.001 2C19.1431 2 22.501 5.35786 22.501 9.5C22.501 13.6421 19.1431 17 15.001 17ZM15.001 15C18.0385 15 20.501 12.5376 20.501 9.5C20.501 6.46243 18.0385 4 15.001 4C11.9634 4 9.50098 6.46243 9.50098 9.5C9.50098 12.5376 11.9634 15 15.001 15ZM2.00098 2H7.00098V22H2.00098V2ZM4.00098 4V20H5.00098V4H4.00098Z"
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
export class SiPatreonLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
