import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-app-shortcut-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zm3.38-8.38.4.87c.09.2.37.2.46 0l.4-.87.87-.4c.2-.09.2-.37 0-.46l-.87-.4-.4-.87c-.09-.2-.37-.2-.46 0l-.4.87-.87.4c-.2.09-.2.37 0 .46l.87.4z"
    />
    <svg:path
      d="m15.54 9-.79 1.75-1.75.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76a.5.5 0 0 0 .91 0l.79-1.75 1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79L16.46 9a.508.508 0 0 0-.92 0zm5.23 4.5-.4.87-.87.4c-.2.09-.2.37 0 .46l.87.4.4.87c.09.2.37.2.46 0l.4-.87.87-.4c.2-.09.2-.37 0-.46l-.87-.4-.4-.87a.257.257 0 0 0-.46 0z"
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
export class SiAppShortcutIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
