import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hdr-enhanced-select-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm3 7h-2v2h-2V9H9V7h2V5h2v2h2v2zm-5 7H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm8-4.5h-5v6h1.5v-2h1.1l.9 2H18l-.86-2H18v-4zm-1.5 2.5h-2v-1h2v1zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm18.5.5v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5z"
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
export class SiHdrEnhancedSelectIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
