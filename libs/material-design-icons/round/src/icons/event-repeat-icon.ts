import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-event-repeat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 12V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V10h14v2h2zm-5.87 8c-.55 0-.91.56-.68 1.06A4.988 4.988 0 0 0 19 24c2.76 0 5-2.24 5-5s-2.24-5-5-5c-1.36 0-2.6.55-3.5 1.43v-.68c0-.41-.34-.75-.75-.75s-.75.34-.75.75V17c0 .55.45 1 1 1h2.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.7c.63-.62 1.5-1 2.45-1 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.42 0-2.64-.85-3.19-2.06a.745.745 0 0 0-.68-.44z"
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
export class SiEventRepeatIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
