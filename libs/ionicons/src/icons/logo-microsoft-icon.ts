import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-microsoft-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M31.87 30.58H244.7v212.81H31.87ZM266.89 30.58H479.7v212.81H266.89ZM31.87 265.61H244.7v212.8H31.87ZM266.89 265.61H479.7v212.8H266.89Z"
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
export class SiLogoMicrosoftIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
