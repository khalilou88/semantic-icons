import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hill-avalanche-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M439.7 401.9c34.2 23.1 81.1 19.5 111.4-10.8c34.4-34.4 34.4-90.1 0-124.4c-27.8-27.8-69.5-33.1-102.6-16c-11.8 6.1-16.4 20.6-10.3 32.3s20.6 16.4 32.3 10.3c15.1-7.8 34-5.3 46.6 7.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-81.7-81.7C401.2 261.3 416 236.4 416 208c0-33.9-21.1-62.9-50.9-74.5c1.9-6.8 2.9-14 2.9-21.5c0-44.2-35.8-80-80-80c-27.3 0-51.5 13.7-65.9 34.6C216.3 46.6 197.9 32 176 32c-26.5 0-48 21.5-48 48c0 4 .5 7.9 1.4 11.6L439.7 401.9zM480 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM68.3 87C43.1 61.8 0 79.7 0 115.3L0 432c0 44.2 35.8 80 80 80l316.7 0c35.6 0 53.5-43.1 28.3-68.3L68.3 87z"
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
export class SiHillAvalancheIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 576 512');
}
