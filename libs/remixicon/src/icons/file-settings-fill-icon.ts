import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-file-settings-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM8.59456 12.8115L7.60291 13.384L8.60297 15.1161L9.59532 14.5431C9.98844 14.915 10.4677 15.1967 11.0001 15.3551V16.5H13.0001V15.355C13.5325 15.1966 14.0117 14.9149 14.4048 14.543L15.3972 15.116L16.3972 13.3839L15.4055 12.8114C15.4673 12.551 15.5 12.2793 15.5 12C15.5 11.7207 15.4673 11.449 15.4054 11.1885L16.3972 10.616L15.3971 8.88393L14.4047 9.4569C14.0116 9.08506 13.5324 8.80337 13 8.64494V7.5H11V8.64494C10.4676 8.80338 9.98834 9.08508 9.59523 9.45694L8.60291 8.88402L7.60291 10.6161L8.59454 11.1886C8.53272 11.449 8.5 11.7207 8.5 12C8.5 12.2794 8.53273 12.5511 8.59456 12.8115ZM12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFileSettingsFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
