import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-villa-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 21H4c-.55 0-1-.45-1-1V8.69c0-.42.25-.79.64-.94l11-4.23a1 1 0 0 1 1.36.94V10H8c-.55 0-1 .45-1 1v10zm10-9h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1s1 .45 1 1v4h4c.55 0 1-.45 1-1v-8c0-1.1-.9-2-2-2s-2 .9-2 2z"
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
export class SiVillaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
