import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-doorbell-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 10v9h12v-9l-6-4.5L6 10zm6 7.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1zm.75-8.25v.25c1.44.34 2.25 1.62 2.25 3.16V15h1v1H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75z"
      opacity=".3"
    />
    <svg:path d="M12 3 4 9v12h16V9l-8-6zm6 16H6v-9l6-4.5 6 4.5v9z" />
    <svg:path
      d="M11.25 9.25v.25C9.82 9.84 9 11.12 9 12.66V15H8v1h8v-1h-1v-2.34c0-1.54-.81-2.82-2.25-3.16v-.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75zM12 17.5c.55 0 1-.45 1-1h-2c0 .55.45 1 1 1z"
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
export class SiDoorbellIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
