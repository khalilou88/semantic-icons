import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-camera-switch-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM9.64042 7.53044C10.3555 7.19033 11.1555 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 14.05 16.8588 15.4502 15.8273 16.4499L13.75 12.6H15.4986C15.4995 12.5668 15.5 12.5334 15.5 12.5C15.5 10.567 13.933 9 12 9C11.4912 9 11.0078 9.10856 10.5716 9.30378L9.64042 7.53044ZM14.3175 17.4894C13.6132 17.817 12.828 18 12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 10.9678 7.12654 9.58193 8.13738 8.58462L10.25 12.5H8.5C8.5 14.433 10.067 16 12 16C12.4923 16 12.9608 15.8984 13.3857 15.715L14.3175 17.4894Z"
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
export class SiCameraSwitchLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
