import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-app-settings-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m21.81 12.74-.82-.63v-.22l.8-.63c.16-.12.2-.34.1-.51l-.85-1.48a.395.395 0 0 0-.35-.2c-.05 0-.1.01-.15.03l-.95.38c-.08-.05-.11-.07-.19-.11l-.15-1.01a.408.408 0 0 0-.4-.36h-1.71c-.2 0-.37.15-.4.34l-.14 1.01c-.03.02-.07.03-.1.05l-.09.06-.95-.38a.401.401 0 0 0-.5.17l-.85 1.48c-.1.17-.06.39.1.51l.8.63v.23l-.8.63a.39.39 0 0 0-.1.51l.85 1.48c.07.13.21.2.35.2.05 0 .1-.01.15-.03l.95-.37c.08.05.12.07.2.11l.15 1.01c.03.2.2.34.4.34h1.71c.2 0 .37-.15.4-.34l.15-1.01c.03-.02.07-.03.1-.05l.09-.06.95.38a.401.401 0 0 0 .5-.17l.85-1.48a.39.39 0 0 0-.1-.51zM18 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppSettingsAltIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
