import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-paragliding-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.95-3a1 1 0 0 0-.99.92c-.2 2.03-1.05 2.68-1.48 3.02C14.68 18.54 14 19 12 19s-2.68-.46-3.48-1.06c-.43-.34-1.28-.99-1.48-3.02a1 1 0 0 0-.99-.92 1 1 0 0 0-1 1.09c.22 2.08 1.07 3.47 2.24 4.41.5.4 1.1.7 1.7.9L9 24h6v-3.6c.6-.2 1.2-.5 1.7-.9 1.17-.94 2.03-2.32 2.24-4.41.07-.58-.41-1.09-.99-1.09zM12 0C5.92 0 1 1.9 1 4.25v3.49c0 .81.88 1.26 1.56.83.14-.09.28-.18.44-.26L5 13h2l1.5-6.28a27.852 27.852 0 0 1 7 0L17 13h2l2-4.69c.16.09.3.17.44.26.68.43 1.56-.02 1.56-.83V4.25C23 1.9 18.08 0 12 0zM5.88 11.24 4.37 7.69c.75-.28 1.6-.52 2.53-.71l-1.02 4.26zm12.24 0L17.1 6.98c.93.19 1.78.43 2.53.71l-1.51 3.55z"
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
export class SiParaglidingIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
