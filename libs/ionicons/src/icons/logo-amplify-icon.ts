import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-amplify-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m112.31 268 40.36-68.69 34.65 59-67.54 115h135L289.31 432H16Zm58.57-99.76 33.27-56.67L392.44 432h-66.68ZM222.67 80h66.59L496 432h-66.68Z"
      fill-rule="evenodd"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoAmplifyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
