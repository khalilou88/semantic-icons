import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-thunderstorm-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M405.84 136.9a151.25 151.25 0 00-47.6-81.9 153 153 0 00-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 001.51-183.1z"
    />
    <svg:path
      d="M74.53 407.177l38.32-76.622 28.62 14.313-38.32 76.623zM98.52 471.189l30.318-60.622 28.62 14.313-30.317 60.622zM354.541 407.189l38.32-76.623 28.62 14.314-38.32 76.622zM378.542 471.2l30.317-60.622 28.62 14.314-30.317 60.621z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiThunderstormSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
