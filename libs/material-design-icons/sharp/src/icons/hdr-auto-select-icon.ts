import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hdr-auto-select-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.5 18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm12-2v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5zM13 22h1.5v-2h1.1l.9 2H18l-.86-2H18v-4h-5v6zm1.5-4.5h2v1h-2v-1zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z"
    />
    <svg:path
      d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2.04 9-.63-1.79h-2.83L9.96 11H8.74l2.63-7h1.25l2.63 7h-1.21z"
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
export class SiHdrAutoSelectIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
