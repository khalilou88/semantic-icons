import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-x-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.333 6.929L14.546 1H13.31L8.783 6.147 5.169 1H1l5.466 7.783L1 15h1.235l4.779-5.436L10.83 15H15L9.333 6.929zM7.641 8.852l-.554-.776L2.68 1.911h1.898l3.557 4.977.552.776 4.623 6.47h-1.897L7.641 8.851z"
      fill="currentColor"
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
export class SiLogoXIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('none');
}
