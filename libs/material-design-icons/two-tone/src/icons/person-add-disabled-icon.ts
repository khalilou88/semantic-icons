import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-person-add-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9 18h5.87L13 16.13l-1.1.3C9.89 16.99 9.08 17.76 9 18zm8-10c0-1.1-.9-2-2-2a2 2 0 0 0-1.97 1.67l2.31 2.31A2.02 2.02 0 0 0 17 8z"
      opacity=".3"
    />
    <svg:path
      d="M14.48 11.95c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 .18.03.35.05.52l3.43 3.43zM15 6c1.1 0 2 .9 2 2a2 2 0 0 1-1.67 1.97l-2.31-2.31C13.19 6.72 14.01 6 15 6zm1.69 8.16L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84zM0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41L1.41 1.71 0 3.12zm13.01 13.01L14.88 18H9c.08-.24.88-1.01 2.91-1.57l1.1-.3zM6 9.12l.88.88H6v-.88z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPersonAddDisabledIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
