import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-13mp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 19h14V5H5v14zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1zM12 10h3V9h-2V8h2V7h-3V5.5h3.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H12V10zM7 5.5h3v6H8.5V7H7V5.5zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6v-5z"
      opacity=".3"
    />
    <svg:path d="M8.5 11.5H10v-6H7V7h1.5z" />
    <svg:path d="M8.5 11.5H10v-6H7V7h1.5z" opacity=".3" />
    <svg:path
      d="M16.5 10.5v-4c0-.55-.45-1-1-1H12V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1z"
    />
    <svg:path
      d="M16.5 10.5v-4c0-.55-.45-1-1-1H12V7h3v1h-2v1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1zM15 14h1.5v1.5H15z"
      opacity=".3"
    />
    <svg:path
      d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z"
    />
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
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
export class Si13mpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
