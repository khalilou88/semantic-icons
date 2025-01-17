import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-angellist-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.8146 10.3683C17.267 9.10824 18.5917 5.42488 18.5917 4.26171C18.5917 3.22779 17.9455 2.35541 16.8469 2.35541C14.7167 2.35541 14.0383 6.47187 13.0666 8.72052C12.2913 6.58483 11.1706 2 9.35096 2C8.12318 2 7.5739 2.90468 7.5739 4.03554C7.5739 5.39257 8.89862 9.01131 9.38327 10.3683C9.1571 10.2714 8.86631 10.2391 8.60783 10.2391C7.70315 10.2391 6.73384 11.37 6.73384 12.2746C6.73384 12.63 6.9277 13.147 7.05694 13.4055C5.60298 13.8255 5.05371 14.7302 5.05371 16.2165C5.05371 19.0275 7.70315 22 11.4834 22C16.0715 22 18.9471 18.5428 18.9471 14.084C18.8825 12.3716 18.6563 10.8853 16.8146 10.3683ZM15.4253 6.23263C15.5545 5.78029 16.233 3.71244 16.8792 3.71244C17.2346 3.71244 17.3316 4.06785 17.3316 4.35864C17.3316 5.10178 15.7807 9.17286 15.5222 10.1422L14.1975 9.91599L15.4253 6.23263ZM8.80169 3.87399C8.80169 3.42165 9.35096 2.09693 10.6111 5.68336L11.9358 9.59289C11.2896 9.56058 10.8372 9.46365 10.5788 9.6252C10.1587 8.55897 8.80169 5.00485 8.80169 3.87399ZM8.70476 11.4992C9.83562 11.4992 11.3542 15.1826 11.3542 15.6995C11.3542 15.8934 11.1603 16.1519 10.9342 16.1519C10.1264 16.1519 7.92932 13.147 7.92932 12.3393C7.92932 12.0485 8.38166 11.4992 8.70476 11.4992ZM15.8776 18.8013C14.7468 20.0291 13.2928 20.7076 11.6127 20.7076C9.28634 20.7076 7.47697 19.4475 6.6046 17.2827C5.9584 15.6026 6.73384 14.6333 7.41235 14.6333C7.8647 14.6333 9.54483 16.9596 9.54483 17.4443C9.54483 17.6381 9.22172 17.7674 9.09248 17.7674C8.44628 17.7674 8.22011 17.1858 7.08925 15.7641C5.9584 16.895 7.89701 19.189 9.35096 19.189C10.3849 19.189 11.0311 18.2197 10.8372 17.5412C10.9665 17.5412 11.1603 17.5412 11.2896 17.5089C11.3219 18.5428 11.645 19.8352 12.9374 19.9321C12.9374 19.8998 13.0343 19.6737 13.0343 19.6737C13.0343 18.9952 12.6143 18.4136 12.6143 17.7027C12.6143 16.6042 13.4867 15.5057 14.359 14.8918C14.6821 14.6656 15.0376 14.5363 15.393 14.4071C15.7484 14.2779 16.1684 14.084 16.4269 13.8255C16.3946 13.3732 16.2007 13.0178 15.7807 13.0178C14.6498 12.9855 10.9988 13.1147 10.9988 11.4346C10.9988 11.2084 10.9988 10.9176 11.6773 10.9176C12.9051 10.9176 16.1361 11.2407 17.1054 12.0485C17.8162 12.5977 18.0424 16.378 15.8776 18.8013ZM12.065 13.8255C12.4204 13.9548 12.8405 13.9548 13.1959 14.0517C12.9374 14.2779 12.6466 14.504 12.4204 14.7948C12.2912 14.504 12.162 14.2132 12.065 13.8255Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAngellistIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
