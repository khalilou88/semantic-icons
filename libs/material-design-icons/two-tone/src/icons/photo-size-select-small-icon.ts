import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-photo-size-select-small-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 19h2v2h-2zm-4 0h2v2h-2zM1 19c0 1.1.9 2 2 2h8v-6H1v4zM9 3h2v2H9zM5 3h2v2H5zm12 0h2v2h-2zM1 11h2v2H1zm0-4h2v2H1zm2-4C2 3 1 4 1 5h2V3zm10 0h2v2h-2zm8 18c1 0 2-1 2-2h-2v2zm0-10h2v2h-2zm0-8v2h2c0-1-1-2-2-2zm0 12h2v2h-2zm0-8h2v2h-2z"
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
export class SiPhotoSizeSelectSmallIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
