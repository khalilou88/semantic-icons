import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-slow-down-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 13C4 15.2091 4.89543 17.2091 6.34315 18.6569L4.92893 20.0711C3.11929 18.2614 2 15.7614 2 13 2 7.47715 6.47715 3 12 3 17.5228 3 22 7.47715 22 13 22 15.7614 20.8807 18.2614 19.0711 20.0711L17.6569 18.6569C19.1046 17.2091 20 15.2091 20 13 20 8.58172 16.4183 5 12 5 7.58172 5 4 8.58172 4 13ZM8.70703 8.29297 13.207 12.793 11.7928 14.2072 7.29282 9.70718 8.70703 8.29297Z"
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
export class SiSlowDownLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
