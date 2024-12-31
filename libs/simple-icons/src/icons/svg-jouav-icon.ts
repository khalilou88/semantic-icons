import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jouav-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>JOUAV</title>
      <path
        d="m4.8218 13.1065.112-.069a1.35694 1.357 0 0 1-.48099-1.037 1.36994 1.37 0 0 1 1.37395-1.365c.40998 0 .77596.18 1.02995.462l.016-.027c.115-.203.226-.402.30999-.6.038-.078.066-.157.097-.233a2.2839 2.284 0 0 0-1.45194-.517 2.2869 2.287 0 0 0-2.2949 2.28c0 .562.20498 1.076.54397 1.473a2.4939 2.494 0 0 0 .141-.058c.19999-.086.39998-.195.60397-.309zm2.70189-2.642a4.8278 4.828 0 0 1-.312.787 6.70872 6.709 0 0 1-.11799.216 1.35994 1.36 0 0 1 .108.532 1.36994 1.37 0 0 1-1.87992 1.269 5.83176 5.832 0 0 1-.31599.175 4.8598 4.86 0 0 1-.67297.272l-.012.004a2.2929 2.293 0 0 0 1.50594.56 2.2869 2.287 0 0 0 2.2949-2.28 2.2569 2.257 0 0 0-.59797-1.535zm-6.20175-.673H2.7209v2.754c0 .592-.146 1.028-.43699 1.31-.29198.28-.74496.42-1.35994.42A3.70985 3.71 0 0 1 0 14.1605v-.959a1.41794 1.418 0 0 0 .44598.075c.31599 0 .53998-.077.67397-.23.135-.153.202-.418.202-.794v-2.46zm7.55469 0h1.39994v2.55c0 .374.065.644.199.812.13299.166.34598.25.63797.25.29998 0 .52698-.09.67997-.27.153-.178.22899-.443.22899-.792v-2.55h1.33194v2.55c0 .646-.18699 1.13-.55997 1.451-.37299.322-.93296.483-1.67993.483-.73997 0-1.29895-.162-1.67393-.486-.37599-.325-.56298-.807-.56298-1.448v-2.55zm6.91471 0h1.68693l1.98492 4.383h-1.49494l-.37198-.928h-2.01992l-.38998.928h-1.38495zm.81497.978-.67997 1.644h1.33694zm2.1739-.978h1.46195l1.16995 3.411 1.15595-3.41H24l-1.77793 4.382h-1.75392z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgJouavIcon {
  readonly class = input<string>('');
}
