import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-30fps-select-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 4v2h5v2H5v2h4v2H4v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.17-1.5-1-1.5.83 0 1-.67 1-1.5V6c0-1.1-.9-2-2-2H4zm14 0c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3zm0 2h-3v6h3V6zM5 22H3v-5h2v5zm4 0H7v-5h2v5zm4 0h-2v-5h2v5zm8 0h-6v-5h6v5z"
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
export class Si30fpsSelectIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
