import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-noise-control-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 4c1.2 0 2.33.26 3.35.74.36.17.79.12 1.07-.17l.06-.06c.47-.47.35-1.29-.25-1.57C14.95 2.34 13.51 2 12 2s-2.95.34-4.24.94c-.6.28-.72 1.1-.25 1.57l.06.06c.28.28.71.34 1.07.17C9.67 4.26 10.8 4 12 4zm8 8c0 1.2-.26 2.33-.74 3.35-.17.36-.12.79.17 1.07l.06.06c.47.47 1.29.35 1.57-.25.6-1.28.94-2.72.94-4.23s-.34-2.95-.94-4.24c-.28-.6-1.1-.72-1.57-.25l-.06.06c-.28.28-.34.71-.17 1.07.48 1.03.74 2.16.74 3.36zm-8 8c-1.2 0-2.33-.26-3.35-.74-.36-.17-.79-.12-1.07.17l-.06.06c-.47.47-.35 1.29.25 1.57 1.28.6 2.72.94 4.23.94s2.95-.34 4.24-.94c.6-.28.72-1.1.25-1.57l-.06-.06a.942.942 0 0 0-1.07-.17c-1.03.48-2.16.74-3.36.74zm-8-8c0-1.2.26-2.33.74-3.35.17-.36.12-.79-.17-1.07l-.06-.07c-.47-.47-1.28-.35-1.57.25a10.043 10.043 0 0 0 0 8.48c.28.6 1.1.72 1.57.25l.06-.06c.28-.28.34-.71.17-1.07A7.902 7.902 0 0 1 4 12zm7.5-6c-2.89 0-5.15 2.74-4.33 5.76.22.8.68 1.51 1.27 2.1l1.27 1.27c.15.16.28.38.4.71.41 1.13 1.38 2.04 2.58 2.16a3.02 3.02 0 0 0 2.93-1.53c.36-.65-.15-1.45-.9-1.45-.34 0-.68.16-.84.47-.16.29-.5.51-.88.51a1 1 0 0 1-.95-.68c-.15-.44-.4-1.08-.93-1.61l-1.36-1.36C9.28 11.87 9 11.19 9 10.5A2.5 2.5 0 0 1 11.5 8c.98 0 1.83.57 2.24 1.4.18.36.52.6.91.6.75 0 1.22-.79.89-1.46A4.482 4.482 0 0 0 11.5 6z"
    />
    <svg:circle cx="13.5" cy="12.5" r="1.5" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNoiseControlOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
