import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-diamond-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.4668 8.69379L19.7134 8.12811C20.1529 7.11947 20.9445 6.31641 21.9323 5.87708L22.6919 5.53922C23.1027 5.35653 23.1027 4.75881 22.6919 4.57612L21.9748 4.25714C20.9616 3.80651 20.1558 2.97373 19.7238 1.93083L19.4706 1.31953C19.2942 0.893489 18.7058 0.893489 18.5293 1.31953L18.2761 1.93083C17.8442 2.97373 17.0384 3.80651 16.0252 4.25714L15.3081 4.57612C14.8973 4.75881 14.8973 5.35653 15.3081 5.53922L16.0677 5.87708C17.0555 6.31641 17.8471 7.11947 18.2866 8.12811L18.5331 8.69379C18.7136 9.10792 19.2864 9.10792 19.4668 8.69379ZM5 6C4.68525 6 4.38886 6.14819 4.2 6.4L1.2 10.4C0.913337 10.7822 0.937093 11.3138 1.25671 11.669L10.2567 21.669C10.4464 21.8797 10.7165 22 11 22C11.2835 22 11.5537 21.8797 11.7433 21.669L20.7433 11.669L19.2567 10.331L11 19.5052L3.29335 10.9422L5.5 8H14V6H5Z"
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
export class SiDiamondLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
