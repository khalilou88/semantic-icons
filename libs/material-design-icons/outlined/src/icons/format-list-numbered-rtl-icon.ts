import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-format-list-numbered-rtl-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 17h2v.5h-1v1h1v.5h-2v1h3v-4h-3v1zm1-9h1V4h-2v1h1v3zm-1 3h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3v1zM2 5h14v2H2V5zm0 12h14v2H2v-2zm0-6h14v2H2v-2z"
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
export class SiFormatListNumberedRtlIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
