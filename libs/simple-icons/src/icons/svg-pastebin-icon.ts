import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pastebin-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Pastebin</title>
      <path
        d="M17.02 0a2.096 2.096 0 00-.722.123L2.624 5.003A2.1 2.1 0 001.35 7.69l5.324 14.915a2.101 2.101 0 002.685 1.272l7.746-2.765c.792-.307 1.345-.534 1.464-.608.543-.314.962-.817 1.964-2.334.904-1.362 1.859-3.323 2.097-4.28.24-.97.239-1.48-.502-3.674l-3.146-8.82A2.102 2.102 0 0017.02 0zm-.083.414c.72-.031 1.4.403 1.657 1.12l3.68 10.357c.103.433-.281 1.147-.736 1.35-.2.1-.71.293-1.142.429-1.397.463-2.05.878-2.458 1.547-.363.591-.315 1.18.16 2.377.462 1.142.533 1.864.225 2.4-.113.188-.301.322-1.354.733l-.002-.005-7.746 2.765a1.68 1.68 0 01-2.157-1.022L1.74 7.55a1.68 1.68 0 011.022-2.157L16.437.513c.165-.06.334-.092.5-.099zM15.9 2.25l-1.203.885.187.519.523-.316.803 2.235-.696.249c.045.145.216.642.238.664l2.166-.78-.238-.662-.687.248zm-3.29 1.182l-1.203.885.186.519.524-.316.803 2.235-.697.25c.046.144.216.64.238.663l2.167-.778-.238-.663-.687.247zM9.085 4.786c-.283 0-.56.076-.8.223-.732.448-.85 1.383-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.4 1.085-2.95-.307-.66-.837-1.036-1.415-1.046zm-.191.672c.168-.01.357.085.539.279.145.155.347.51.437.787.35.998.164 1.688-.414 1.546C8.855 7.93 8.21 6 8.62 5.585a.407.407 0 01.273-.127zm-3.765.75c-.283 0-.56.076-.8.223-.732.448-.85 1.382-.332 2.557.337.777.873 1.218 1.462 1.215 1.344-.007 1.86-1.398 1.085-2.95-.307-.66-.838-1.036-1.415-1.045zm-.192.672c.168-.01.358.085.54.278.145.155.347.51.437.787.35.999.164 1.689-.415 1.547-.6-.141-1.243-2.072-.834-2.485a.407.407 0 01.272-.127zm13.362.655c-.283 0-.56.076-.8.223-.732.448-.85 1.382-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.4 1.085-2.95-.307-.66-.837-1.036-1.415-1.046zm-.191.672c.168-.01.357.085.539.278.145.155.347.51.437.787.35.999.164 1.689-.414 1.547-.601-.141-1.244-2.072-.835-2.485a.407.407 0 01.273-.127zm-3.766.75a1.532 1.532 0 00-.8.222c-.73.448-.848 1.383-.331 2.558.337.776.873 1.218 1.462 1.215 1.344-.007 1.86-1.398 1.085-2.95-.307-.66-.838-1.036-1.416-1.045zm-.19.67c.167-.008.357.086.539.28.145.155.347.51.437.787.35.998.164 1.688-.415 1.547-.6-.142-1.244-2.072-.835-2.485a.408.408 0 01.273-.128zm-3.746.744c-.283-.001-.56.076-.8.223-.732.448-.85 1.382-.332 2.557.337.777.873 1.218 1.462 1.215 1.345-.007 1.86-1.398 1.085-2.95-.307-.66-.838-1.036-1.415-1.045zm-.192.672c.169-.01.358.085.54.278.145.155.347.51.437.787.35.999.164 1.689-.414 1.547-.601-.141-1.244-2.072-.835-2.485a.407.407 0 01.272-.127zm-3.515.616l-1.203.884.187.52.524-.316.802 2.233-.696.25c.045.145.216.641.238.663l2.166-.778-.238-.663-.687.247zm15.664 1.33c.034 0 .049.047.064.135.023.11-.064.545-.195.957-.47 1.435-2.052 4.223-3.08 5.396l-.407.47.05-.667c.03-.567-.015-.812-.376-1.71-.496-1.263-.533-1.73-.158-2.31.34-.514 1.028-.907 2.448-1.37.72-.238 1.175-.463 1.385-.664.132-.145.207-.22.253-.235a.048.048 0 01.015-.003zm-6.43 1.476l-1.202.885.187.52.523-.317.803 2.235-.696.25c.045.144.216.641.238.663l2.166-.779-.238-.662-.687.247-1.093-3.042zm-3.578 1.33c-.283 0-.56.077-.8.223-.731.448-.85 1.382-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.399 1.086-2.95-.307-.66-.838-1.036-1.416-1.046zm-.191.672c.168-.009.358.085.54.28.144.153.346.51.437.786.35.998.164 1.688-.415 1.546-.6-.14-1.244-2.072-.835-2.485a.407.407 0 01.273-.127zm-3.515.616l-1.204.885.187.52.524-.317.803 2.234-.697.25c.045.145.216.642.238.664l2.166-.779-.238-.663-.687.248-1.092-3.042z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPastebinIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
