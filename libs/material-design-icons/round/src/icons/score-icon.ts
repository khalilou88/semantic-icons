import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-score-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2.75c0-.41.34-.75.75-.75s.75.34.75.75V8l1.79-2.69a.71.71 0 0 1 1.18.79L15.2 8l1.27 1.9c.31.47-.02 1.1-.59 1.1-.24 0-.46-.12-.59-.31L13.5 8v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5zm-5 2.5c0-.55.45-1 1-1h1.5V6.5H7.75c-.41 0-.75-.34-.75-.75S7.34 5 7.75 5H10c.55 0 1 .45 1 1v1.75c0 .55-.45 1-1 1H8.5v.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.55 0-1-.45-1-1V8.25zm11.74 5.01-5.03 5.03a.996.996 0 0 1-1.41 0L9 15l-2.49 2.49c-.56.56-1.51.16-1.51-.62 0-.23.09-.46.26-.62l3.03-3.03a.996.996 0 0 1 1.41 0L13 16.5l4.49-4.49c.56-.56 1.51-.16 1.51.62 0 .24-.09.46-.26.63z"
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
export class SiScoreIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
