import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-alarm-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7 0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52A9 9 0 0 0 8.47 4.72l1.57 1.57zm-6.33-3.5a.99.99 0 0 0-1.39 0l-.02.03a.972.972 0 0 0 0 1.39l.68.68-.17.14c-.42.34-.47.96-.13 1.38l.03.03c.35.42.96.47 1.38.12l.31-.25.8.8A8.964 8.964 0 0 0 3 13a9 9 0 0 0 9 9c2.25 0 4.31-.83 5.89-2.2l1.41 1.41c.38.38 1 .38 1.39 0l.03-.03c.38-.38.38-1 0-1.39l-17.01-17zM12 20c-3.86 0-7-3.14-7-7 0-1.7.61-3.26 1.62-4.47l9.85 9.85A6.956 6.956 0 0 1 12 20zm7.91-13.44c.42.35 1.03.29 1.38-.12l.03-.03a.981.981 0 0 0-.12-1.38l-3.1-2.59a.981.981 0 0 0-1.38.12l-.03.03a.981.981 0 0 0 .12 1.38l3.1 2.59zM7.43 3.68c.18-.34.15-.77-.11-1.09l-.03-.03c-.3-.36-.8-.43-1.2-.22l1.34 1.34z"
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
export class SiAlarmOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
