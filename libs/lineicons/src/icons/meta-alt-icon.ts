import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-meta-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.3538 5.35449C14.7139 5.35449 13.4319 6.58966 12.2714 8.1587C10.6767 6.12822 9.34303 5.35449 7.74703 5.35449C4.49314 5.35449 2 9.58915 2 14.0713C2 16.876 3.35691 18.6451 5.62969 18.6451C7.26552 18.6451 8.44197 17.8739 10.5334 14.2179C10.5334 14.2179 11.4053 12.6783 12.0051 11.6178C12.2152 11.9571 12.4366 12.3228 12.6691 12.7147L13.6499 14.3646C15.5603 17.5616 16.6248 18.6451 18.5536 18.6451C20.7678 18.6451 22 16.8519 22 13.9888C22 9.29584 19.4507 5.35449 16.3538 5.35449ZM8.93859 13.228C7.2429 15.8861 6.65628 16.4819 5.71221 16.4819C4.74062 16.4819 4.16315 15.6289 4.16315 14.1079C4.16315 10.854 5.78552 7.5268 7.71952 7.5268C8.76683 7.5268 9.64207 8.13166 10.9827 10.0509C9.70969 12.0034 8.93859 13.228 8.93859 13.228ZM15.3384 12.8934L14.1658 10.9377C13.8484 10.4216 13.5434 9.94656 13.2509 9.51256C14.3077 7.88132 15.1795 7.06853 16.2163 7.06853C18.3703 7.06853 20.0935 10.2399 20.0935 14.1354C20.0935 15.6203 19.6071 16.4819 18.5994 16.4819C17.6336 16.4819 17.1722 15.844 15.3384 12.8934Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMetaAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
