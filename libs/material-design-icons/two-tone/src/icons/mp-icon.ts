import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M15 10.5h1.5V12H15z" opacity=".3" />
    <svg:path
      d="M5 5v14h14V5H5zm7.5 10H11v-4.5h-1v3H8.5v-3h-1V15H6v-5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5zm5.5-2.5c0 .55-.45 1-1 1h-2V15h-1.5V9H17c.55 0 1 .45 1 1v2.5z"
      opacity=".3"
    />
    <svg:path
      d="M17 9h-3.5v6H15v-1.5h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-.5 3H15v-1.5h1.5V12zm-5-3H7c-.55 0-1 .45-1 1v5h1.5v-4.5h1v3H10v-3h1V15h1.5v-5c0-.55-.45-1-1-1z"
    />
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h14v14H5z"
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
export class SiMpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
