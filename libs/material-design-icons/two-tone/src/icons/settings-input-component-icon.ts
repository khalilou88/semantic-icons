import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-settings-input-component-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 16c0 .55.45 1 1 1s1-.45 1-1v-2h-2v2zm-8 0c0 .55.45 1 1 1s1-.45 1-1v-2H3v2zm16 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2v2z"
      opacity=".3"
    />
    <svg:path
      d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5V2zm0 14c0 .55-.45 1-1 1s-1-.45-1-1v-2h2v2zm0-4H3V8h2v4zm8-10c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2V2zm0 14c0 .55-.45 1-1 1s-1-.45-1-1v-2h2v2zm0-4h-2V8h2v4zm8-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm0 10c0 .55-.45 1-1 1s-1-.45-1-1v-2h2v2zm0-4h-2V8h2v4z"
    />
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
export class SiSettingsInputComponentIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
