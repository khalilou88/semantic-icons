import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-adult-content-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.54 1.69-4.9L7.59 9h2.83L7.1 5.69A7.924 7.924 0 0 1 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.54-1.69 4.9l-1.9-1.9h-2.83l3.31 3.31A7.874 7.874 0 0 1 12 20c-4.41 0-8-3.59-8-8z"
    />
    <svg:path
      d="m14.25 14-1.5-2 1.5-2h-1.5L12 11l-.75-1h-1.5l1.5 2-1.5 2h1.5l.75-1 .75 1zM8 10l-.75 1-.75-1H5l1.5 2L5 14h1.5l.75-1L8 14h1.5L8 12l1.5-2zm8 4 .75-1 .75 1H19l-1.5-2 1.5-2h-1.5l-.75 1-.75-1h-1.5l1.5 2-1.5 2z"
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
export class SiNoAdultContentIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
