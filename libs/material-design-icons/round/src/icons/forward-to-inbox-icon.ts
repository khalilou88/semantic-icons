import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-forward-to-inbox-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 5.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V20h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-1.79z"
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
export class SiForwardToInboxIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
