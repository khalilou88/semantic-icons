import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kebab-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm3 11c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3zm.5-6v1h-4v-1h4zM5.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm3 11c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3zm.5-6v1H5v-1h4z"
      opacity=".3"
    />
    <svg:path
      d="M17.75 7h.75a2.5 2.5 0 0 0 0-5h-.75V1h-1.5v1h-.75a2.5 2.5 0 0 0 0 5h.75v1H13v5h3.25v1h-.75a2.5 2.5 0 0 0 0 5h.75v4h1.5v-4h.75a2.5 2.5 0 0 0 0-5h-.75v-1H21V8h-3.25V7zM15.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm3 11c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3zm.5-6v1h-4v-1h4zM7.75 7h.75a2.5 2.5 0 0 0 0-5h-.75V1h-1.5v1H5.5a2.5 2.5 0 0 0 0 5h.75v1H3v5h3.25v1H5.5a2.5 2.5 0 0 0 0 5h.75v4h1.5v-4h.75a2.5 2.5 0 0 0 0-5h-.75v-1H11V8H7.75V7zM5.5 5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3zm3 11c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3zm.5-6v1H5v-1h4z"
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
export class SiKebabDiningIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
