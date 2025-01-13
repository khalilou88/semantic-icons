import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-snow-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M447.88 313.27l19.25-10.64-21.28-38.51-19.25 10.64a133.42 133.42 0 00-38.54 32.1L300 256l88.07-50.86a133.42 133.42 0 0038.54 32.1l19.25 10.64 21.28-38.51-19.25-10.64a89.27 89.27 0 01-20.93-16L480 152.05 458 114l-53 30.58a89.07 89.07 0 01-3.42-26.15l.41-22-44-.82-.41 22a133.62 133.62 0 008.49 49.39L278 217.89V116.18a133.52 133.52 0 0047.06-17.33L343.9 87.5l-22.71-37.69-18.84 11.35A89.5 89.5 0 01278 71.27V16h-44v55.27a89.5 89.5 0 01-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.52 133.52 0 00234 116.18v101.71L145.93 167a133.62 133.62 0 008.53-49.43l-.41-22-44 .82.41 22a89.07 89.07 0 01-3.42 26.15L54 114l-22 38.1 53.05 30.64a89.27 89.27 0 01-20.93 16l-19.25 10.63 21.28 38.51 19.25-10.64a133.42 133.42 0 0038.54-32.1L212 256l-88.07 50.86a133.42 133.42 0 00-38.54-32.1l-19.24-10.64-21.28 38.51 19.25 10.64a89.27 89.27 0 0120.93 16L32 360l22 38.1 53.05-30.63a89.07 89.07 0 013.42 26.15l-.41 22 44 .82.41-22a133.62 133.62 0 00-8.54-49.44L234 294.11v101.71a133.52 133.52 0 00-47.06 17.33L168.1 424.5l22.71 37.69 18.84-11.35A89.5 89.5 0 01234 440.73V496h44v-55.27a89.5 89.5 0 0124.35 10.11l18.84 11.35 22.71-37.69-18.84-11.35A133.52 133.52 0 00278 395.82V294.11L366.07 345a133.62 133.62 0 00-8.53 49.43l.41 22 44-.82-.41-22a89.07 89.07 0 013.46-26.19l53 30.63L480 360l-53-30.69a89.27 89.27 0 0120.88-16.04z"
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
export class SiSnowSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
