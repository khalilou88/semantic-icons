import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-php-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.15 5.5498L8.43273 14.3844H10.4327L11.2914 9.96713H12.7914C13.3437 9.96713 13.7059 10.4066 13.6006 10.9488L12.9327 14.3844H14.9327L15.6006 10.9488C15.9167 9.32234 14.8298 8.00387 13.173 8.00387H11.673L12.15 5.5498H10.15ZM2.17285 8.00392H5.92285C7.71777 8.00392 8.89521 9.43226 8.55272 11.1942C8.21023 12.9562 6.47751 14.3845 4.68259 14.3845H2.93259L2.45557 16.8386H0.455566L2.17285 8.00392ZM3.31421 12.4212H5.06421C5.75456 12.4212 6.42099 11.8719 6.55272 11.1942C6.68444 10.5165 6.23159 9.96717 5.54123 9.96717H3.79123L3.31421 12.4212ZM17.1728 8.00392H20.9228C22.7178 8.00392 23.8952 9.43226 23.5527 11.1942C23.2102 12.9562 21.4775 14.3845 19.6826 14.3845H17.9326L17.4556 16.8386H15.4556L17.1728 8.00392ZM18.3142 12.4212H20.0642C20.7546 12.4212 21.421 11.8719 21.5527 11.1942C21.6844 10.5165 21.2316 9.96717 20.5412 9.96717H18.7912L18.3142 12.4212Z"
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
export class SiPhpLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
