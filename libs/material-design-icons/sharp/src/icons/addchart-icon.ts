import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-addchart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 9h2v8h-2V9zm-2 8v-6H7v6h2zm10 2H5V5h6V3H3v18h18v-8h-2v6zm-4-6v4h2v-4h-2zm4-8V2h-2v3h-3v2h3v3h2V7h3V5h-3z"
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
export class SiAddchartIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
