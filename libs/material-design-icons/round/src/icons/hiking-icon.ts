import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hiking-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM18.25 9c-.41 0-.75.34-.75.75v1.03c-1.23-.37-2.22-1.17-2.8-2.18l-1-1.6c-.41-.65-1.11-1-1.84-1-.78 0-1.59.5-1.78 1.44L7.25 21.76c-.13.64.36 1.24 1.02 1.24.49 0 .91-.34 1.02-.81L10.9 15l2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45L12.9 13.5l.6-3c1 1.15 2.41 2.01 4 2.34v9.41c0 .41.34.75.75.75s.75-.34.75-.75V9.75c0-.41-.34-.75-.75-.75zM7.43 13.13l-2.12-.41a.999.999 0 0 1-.79-1.17l.76-3.93a2 2 0 0 1 2.34-1.58l1.16.23-1.35 6.86z"
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
export class SiHikingIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
