import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-motorbike-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 13.2561V12H2V10H8.36547L11.2 8H14.6915L13.5996 5H11V3H15L16.0919 6H20V9H17.1838L18.6405 13.0022C21.0608 13.0764 23 15.0617 23 17.5C23 19.9853 20.9853 22 18.5 22C16.0147 22 14 19.9853 14 17.5C14 15.6722 15.0897 14.0989 16.6549 13.3944L15.4194 10H14.4718L12.89 15.87L12.8876 15.8689L12.8897 15.8745L9.96536 16.9389C9.98822 17.1227 10 17.31 10 17.5C10 19.9853 7.98528 22 5.5 22C3.01472 22 1 19.9853 1 17.5C1 15.5407 2.25221 13.8738 4 13.2561ZM6 13.0275C7.37617 13.1796 8.56531 13.9523 9.28138 15.0595L11.2383 14.3472L12.4032 10H11.8563L9 12H6V13.0275ZM5.5 20C6.88071 20 8 18.8807 8 17.5C8 16.1193 6.88071 15 5.5 15C4.11929 15 3 16.1193 3 17.5C3 18.8807 4.11929 20 5.5 20ZM18.5 20C19.8807 20 21 18.8807 21 17.5C21 16.1193 19.8807 15 18.5 15C17.1193 15 16 16.1193 16 17.5C16 18.8807 17.1193 20 18.5 20Z"
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
export class SiMotorbikeLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
