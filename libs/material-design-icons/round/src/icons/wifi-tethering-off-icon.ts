import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wifi-tethering-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.11 3.51c-.4.39-.4 1.03-.01 1.42l1.98 1.98A9.958 9.958 0 0 0 2 13c0 2.36.82 4.53 2.19 6.24.37.47 1.07.5 1.5.08.36-.36.39-.92.08-1.32A7.914 7.914 0 0 1 4 13c0-1.75.57-3.35 1.51-4.66l1.43 1.43A6.02 6.02 0 0 0 6 13c0 1.25.38 2.4 1.03 3.35.34.5 1.08.54 1.51.11.35-.35.37-.88.1-1.29C8.24 14.54 8 13.8 8 13c0-.63.15-1.23.41-1.76l1.61 1.61c0 .05-.02.1-.02.15 0 .55.23 1.05.59 1.41.36.36.86.59 1.41.59.05 0 .1-.01.16-.02l6.91 6.91a.996.996 0 1 0 1.41-1.41L3.51 3.51a.984.984 0 0 0-1.4 0zM17.7 14.87c.19-.59.3-1.22.3-1.87 0-3.31-2.69-6-6-6-.65 0-1.28.1-1.87.3l1.71 1.71C11.89 9 11.95 9 12 9c2.21 0 4 1.79 4 4 0 .05 0 .11-.01.16l1.71 1.71zM12 5c4.42 0 8 3.58 8 8 0 1.22-.27 2.37-.77 3.4l1.49 1.49A9.953 9.953 0 0 0 22 13c0-5.52-4.48-10-10-10-1.78 0-3.44.46-4.89 1.28l1.48 1.48C9.63 5.27 10.78 5 12 5z"
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
export class SiWifiTetheringOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
