import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-phonelink-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M22 17v-7h-4v4.61L20.39 17z" opacity=".3" />
    <svg:path
      d="M23 8h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93V9c0-.55-.45-1-1-1zm-1-2V4H7.39l2 2zM.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.41-1.41L2.06 1.51.65 2.92zM4 6.27 14.73 17H4V6.27z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPhonelinkOffIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
