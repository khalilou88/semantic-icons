import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-plant-wilt-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M288 120c0-30.9 25.1-56 56-56s56 25.1 56 56l0 13c-29.3 10-48 34.5-48 70.1c0 27.9 25.3 74.8 66 111.6c3.8 3.5 8.9 5.3 14 5.3s10.2-1.8 14-5.3c40.7-36.8 66-83.7 66-111.6c0-35.6-18.7-60.2-48-70.1l0-13C464 53.7 410.3 0 344 0S224 53.7 224 120l0 21.8C207.3 133 188.2 128 168 128c-66.3 0-120 53.7-120 120l0 13c-29.3 10-48 34.5-48 70.1C0 359 25.3 405.9 66 442.7c3.8 3.5 8.9 5.3 14 5.3s10.2-1.8 14-5.3c40.7-36.8 66-83.7 66-111.6c0-35.6-18.7-60.2-48-70.1l0-13c0-30.9 25.1-56 56-56s56 25.1 56 56l0 32 0 200c0 17.7 14.3 32 32 32s32-14.3 32-32l0-200 0-32 0-128z"
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
export class SiPlantWiltIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
