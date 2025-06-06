import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cell-wifi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.29 7.68 7.7 20.29c-.63.63-.18 1.71.71 1.71H21c.55 0 1-.45 1-1V8.39c0-.89-1.08-1.34-1.71-.71zM20 20h-2v-7.22l2-2V20zM9.61 10.68c-.28.17-.32.56-.09.79l.82.82c.39.39 1.02.39 1.41 0l.82-.82c.23-.23.18-.62-.09-.79-.87-.54-1.99-.54-2.87 0zM8.42 9.3a4.553 4.553 0 0 1 5.27 0c.36.26.85.22 1.16-.1.39-.39.35-1.06-.1-1.38a6.402 6.402 0 0 0-7.4 0c-.45.32-.5.99-.1 1.38a.9.9 0 0 0 1.17.1z"
    />
    <svg:path
      d="M16.26 6.69c.34.28.83.28 1.14-.03l.12-.12c.35-.35.31-.92-.08-1.24-3.67-3.05-9.02-3.07-12.7-.06-.43.35-.47.99-.08 1.37.32.33.84.37 1.19.08 3.01-2.48 7.4-2.48 10.41 0z"
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
export class SiCellWifiIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
