import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-moon-cloudy-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z"
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
export class SiMoonCloudyLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
