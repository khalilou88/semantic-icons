import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-road-spikes-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M64 116.8c0-15.8 20.5-22 29.3-8.9L192 256l0-139.2c0-15.8 20.5-22 29.3-8.9L320 256l0-139.2c0-15.8 20.5-22 29.3-8.9L448 256l0-139.2c0-15.8 20.5-22 29.3-8.9L606.8 302.2c14.2 21.3-1.1 49.7-26.6 49.7L512 352l-64 0-64 0-64 0-64 0-64 0L64 352l0-235.2zM32 384l576 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
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
export class SiRoadSpikesIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
