import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-image-search-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.7 11.53c-.7.31-1.45.47-2.21.47C12.46 12 10 9.53 10 6.5c0-.17.01-.34.03-.5H4v14h14v-8.17l-.3-.3zM5.5 18l2.75-3.53 1.96 2.36 2.75-3.54L16.5 18h-11z"
      opacity=".3"
    />
    <svg:path
      d="m10.21 16.83-1.96-2.36L5.5 18h11l-3.54-4.71zM20 6.5C20 4.01 17.99 2 15.5 2S11 4.01 11 6.5s2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21 13.42 22.42 12 19.3 8.89c.44-.7.7-1.51.7-2.39zM15.5 9a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM18 20H4V6h6.03c.06-.72.27-1.39.58-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.17l-2-2V20z"
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
export class SiImageSearchIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
