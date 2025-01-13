import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-request-page-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m19.41 7.41-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zM14 12c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1c0 .55-.45 1-1 1s-1-.45-1-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h3v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1c0-.55.45-1 1-1s1 .45 1 1h1c.55 0 1 .45 1 1s-.45 1-1 1h-3v1h3z"
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
export class SiRequestPageIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
