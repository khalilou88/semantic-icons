import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mail-lock-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M20 6H4l8 5z" opacity=".3" />
    <svg:path d="M12 13 4 8v10h12v-3.03a5 5 0 0 1 4-4.9V8l-8 5z" opacity=".3" />
    <svg:path
      d="M4 18V8l8 5 8-5v2.08c.32-.07.66-.1 1-.1h1V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h12v-2H4zM20 6l-8 5-8-5h16z"
    />
    <svg:path
      d="M23 15v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-3 0v-1c0-.55.45-1 1-1s1 .45 1 1v1h-2z"
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
export class SiMailLockIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
