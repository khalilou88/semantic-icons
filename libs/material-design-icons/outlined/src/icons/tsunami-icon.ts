import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tsunami-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.67 17.63c-3.8 2.8-6.12.4-6.67 0-.66.49-2.92 2.76-6.67 0C3.43 19.03 2.65 19 2 19v2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37zm.66-5.63H22v-2h-2.67C17.5 10 16 8.5 16 6.67c0-1.02.38-1.74 1.09-3.34-1.37-.21-2-.33-3.09-.33C7.36 3 2.15 8.03 2.01 14.5l-.01 2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5-.02-3.33-1.37-3.8 2.8-6.12.4-6.67 0-.9.67-.54.41-.91.63-.7-.94-1.09-2.06-1.09-3.26 0-2.58 1.77-4.74 4.21-5.33-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12zm-14 1.13c-.62.46-.82.63-1.3.87.27-3.53 2.38-6.48 5.43-7.96A7.49 7.49 0 0 0 8 10.5c0 1.42.4 2.77 1.13 3.95-.72.07-1.79.15-3.8-1.32z"
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
export class SiTsunamiIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
