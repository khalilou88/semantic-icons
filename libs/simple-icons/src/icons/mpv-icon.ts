import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mpv-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>mpv</svg:title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.312 22.775c-6.153 0-11.142-4.988-11.142-11.142S6.16.491 12.312.491c6.154 0 11.142 4.989 11.142 11.142s-4.988 11.142-11.142 11.142zm.643-20.464a8.587 8.587 0 1 0 0 17.174 8.587 8.587 0 0 0 0-17.174zm-1.113 15.257a5.517 5.517 0 1 1 0-11.034 5.517 5.517 0 0 1 0 11.034zm-1.399-7.995L14.4 11.97l-3.957 2.518V9.573z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMpvIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#691F69');
}
