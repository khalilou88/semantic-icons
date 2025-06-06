import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-closed-caption-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.83 6H19v10.17l-1.4-1.4c.24-.18.4-.45.4-.77v-1h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17L8.83 6zM7.5 13.5h2V13h.67l-2.5-2.5H7.5v3zm3.5.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.32.16-.59.4-.78L5 7.83V18h10.17L11 13.83V14z"
      opacity=".3"
    />
    <svg:path
      d="M6.83 4H19c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16L19 16.17V6H8.83l-2-2zm12.95 18.61L17.17 20H5a2 2 0 0 1-2-2V6c0-.05.02-.1.02-.15L1.39 4.22 2.8 2.81 18 18l1.82 1.82 1.37 1.37-1.41 1.42zM7.5 13.5h2V13h.67l-2.5-2.5H7.5v3zm7.67 4.5L11 13.83V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.32.16-.59.4-.78L5 7.83V18h10.17zM18 14v-1h-1.5v.5h-.17l1.28 1.28c.23-.19.39-.46.39-.78zm-3.5-2.33V10.5h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17l1.5 1.5z"
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
export class SiClosedCaptionDisabledIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
