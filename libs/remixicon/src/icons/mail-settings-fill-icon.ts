import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mail-settings-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 13.3414C21.3744 13.1203 20.7013 13 20 13C16.6863 13 14 15.6863 14 19C14 19.7013 14.1203 20.3744 14.3414 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13.3414ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM17.05 19.5485C17.0172 19.3706 17 19.1873 17 19C17 18.8127 17.0172 18.6294 17.05 18.4515L16.0359 17.866L17.0359 16.134L18.0505 16.7197C18.3278 16.4824 18.6489 16.2948 19 16.1707V15H21V16.1707C21.3511 16.2948 21.6722 16.4824 21.9495 16.7197L22.9641 16.134L23.9641 17.866L22.95 18.4515C22.9828 18.6294 23 18.8127 23 19C23 19.1873 22.9828 19.3706 22.95 19.5485L23.9641 20.134L22.9641 21.866L21.9495 21.2803C21.6722 21.5176 21.3511 21.7052 21 21.8293V23H19V21.8293C18.6489 21.7052 18.3278 21.5176 18.0505 21.2803L17.0359 21.866L16.0359 20.134L17.05 19.5485ZM20 20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18C19.4477 18 19 18.4477 19 19C19 19.5523 19.4477 20 20 20Z"
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
export class SiMailSettingsFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
