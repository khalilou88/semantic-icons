import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-panorama-horizontal-select-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 6.38v11.25c2.01-.59 4.61-1.13 8-1.13 3.38 0 5.99.54 8 1.13V6.37c-2.01.59-4.62 1.13-8 1.13-2.68 0-5.42-.39-8-1.12z"
      opacity=".3"
    />
    <svg:path
      d="M21.01 4C20.45 4 17.4 5.5 12 5.5c-5.31 0-8.49-1.49-9.01-1.49-.53 0-.99.44-.99 1.01V19c0 .57.46 1 .99 1 .57 0 3.55-1.5 9.01-1.5 5.42 0 8.44 1.5 9.01 1.5.53 0 .99-.43.99-1V5c0-.57-.46-1-.99-1zM20 17.63c-2.01-.59-4.62-1.13-8-1.13-3.39 0-5.99.54-8 1.13V6.38c2.58.73 5.32 1.12 8 1.12 3.38 0 5.99-.54 8-1.13v11.26z"
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
export class SiPanoramaHorizontalSelectIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
