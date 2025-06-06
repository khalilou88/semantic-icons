import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tauri-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Tauri</svg:title>
    <svg:path
      d="M13.912 0a8.72 8.72 0 0 0-8.308 6.139c1.05-.515 2.18-.845 3.342-.976 2.415-3.363 7.4-3.412 9.88-.097 2.48 3.315 1.025 8.084-2.883 9.45a6.131 6.131 0 0 1-.3 2.762 8.72 8.72 0 0 0 3.01-1.225A8.72 8.72 0 0 0 13.913 0zm.082 6.451a2.284 2.284 0 1 0-.15 4.566 2.284 2.284 0 0 0 .15-4.566zm-5.629.27a8.72 8.72 0 0 0-3.031 1.235 8.72 8.72 0 1 0 13.06 9.9131 10.173 10.174 0 0 1-3.343.965 6.125 6.125 0 1 1-7.028-9.343 6.114 6.115 0 0 1 .342-2.772zm1.713 6.27a2.284 2.284 0 0 0-2.284 2.283 2.284 2.284 0 0 0 2.284 2.284 2.284 2.284 0 0 0 2.284-2.284 2.284 2.284 0 0 0-2.284-2.284z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTauriIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#24C8D8');
}
