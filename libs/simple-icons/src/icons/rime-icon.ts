import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-rime-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Rime</svg:title>
    <svg:path
      d="M21.733 0H2.267C1 0 0 1 0 2.267v19.466C0 23 1 24 2.267 24h19.466C23 24 24 23 24 21.733V2.267C24 1 22.933 0 21.733 0Zm-1.6 20.667H19.8c-.6 0-5.933-.134-7.733-.134-1.934 0-7.867.134-7.934.134H3.8v-1.134L3.733 18.4h.334c.066 0 4.2-.2 6.733-.267v-2.466c-2.733-.134-4.667-.867-5.933-2.134-1.934-2-1.8-4.866-1.734-7.933v-.867l2.4.067v.933c-.066 2.6-.2 4.867 1.067 6.134.8.8 2.133 1.266 4.2 1.4V3.533h2.4V13.2c2-.133 3.4-.6 4.2-1.4 1.2-1.267 1.133-3.533 1.067-6.133v-.934l2.4-.066v.866c.133 3.067.2 5.934-1.734 7.934-1.266 1.266-3.2 2-5.933 2.133v2.467c2.467.066 6.667.266 6.733.266h.334l-.067 1.134Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRimeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
