import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-stroller-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11L17 14.17v-7.9c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2v-.52C22 4.56 20.52 3 18.65 3zm-7.98 7.67L2.81 2.81 1.39 4.22l7.97 7.97-2.66 3.12c-.55.65-.09 1.65.76 1.65h6.66l1.17 1.17C14.54 18.42 14 19.14 14 20c0 1.1.9 2 2 2 .86 0 1.58-.54 1.87-1.3l1.91 1.91 1.41-1.41-4.8-4.8-5.72-5.73zm2.8-5.64c.27-.32.58-.72.98-1.09a9.347 9.347 0 0 0-7.81-.13l4.25 4.25 2.58-3.03z"
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
export class SiNoStrollerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
