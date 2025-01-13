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
      d="M6.83 4H19c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-3.38-3.38c.24-.19.4-.46.4-.78v-.5c0-.28-.22-.5-.5-.5H17c-.28 0-.5.22-.5.5h-.17l-1.83-1.83V10.5h2c0 .28.22.5.5.5h.5c.28 0 .5-.22.5-.5V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17L6.83 4zm13.66 17.9a.996.996 0 0 1-1.41 0l-1.9-1.9H5a2 2 0 0 1-2-2V6c0-.05.02-.1.02-.15l-.92-.92a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM11 13.83l-.83-.83H10c-.28 0-.5.22-.5.5h-2v-3h.17L6.4 9.22c-.24.19-.4.46-.4.78v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-.17z"
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
export class SiClosedCaptionDisabledIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
