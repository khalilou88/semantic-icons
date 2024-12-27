import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-qatarairways-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Qatar Airways</title>
      <path
        d="M18.633 13.143c.011.283.008.564-.006.84-2.752.11-5.362.274-5.362.462 0 .183 2.552.347 5.27.454a7.221 7.221 0 0 1-.186.924c-2.68.11-5.17.273-5.17.456 0 .174 2.326.33 4.897.44-.116.33-.25.647-.396.954-2.21.105-4.04.247-4.04.402 0 .145 1.595.279 3.609.38a9.968 9.968 0 0 1-.354.536c-.134.184-.274.369-.422.55-1.26.094-2.123.203-2.123.32 0 .1.616.193 1.568.276a9.055 9.055 0 0 1-1.856 1.414s-.854-.733-1.557-1.592c-.63-.764-1.96-2.78-2.271-3.229-.314-.451-.52-.585-.887-.453-.491.173-1.063.26-1.238.26-.176 0-.271-.067.025-.184.291-.118 1.45-.665 2.023-1.799.64-1.274.077-3.033.077-3.033-.216.94-.705 1.29-.705 1.29.159-.872-.014-1.664-.446-2.22l-.24 1.107s-.15-.01-.525.304c-.37.314-.474.77-.474.77.296.12.644-.176.644-.176-.446 1.685-1.093 3.054-1.562 3.78-.472.724-.856.998-1.33 1.19-.396.159-.529-.028-.529-.028a7.17 7.17 0 0 1-.878-.902s-.021-.04.05-.036c.196.003.54-.327.616-.467.084-.158.078-.277.033-.286-.04-.007-.115.119-.492.353-.37.236-.537.074-.665-.06-.093-.1 0-.232.057-.312.06-.074 2.025-3.736 7.222-7.588 6.822-5.045 11.171-6.405 11.42-6.505.166-.065.434-.15.496-.088.065.071.1.128.088.211-.008.082-.05.123-.363.262-2.62 1.154-5.674 3.073-7.408 4.191-2.136 1.04-4.172 2.525-4.245 2.561-.164.101-.046.25.058.188 3.6-2.397 7.826-4.03 12.498-5.368.22-.062.342-.062.382-.014a.377.377 0 0 1 .064.187c.006.084-.064.13-.258.206-5.011 1.864-8.71 3.592-11.091 5.194 0 0-.245.146-.248.318 0 .065.132.073.132.073 1.19.021 2.784.092 3.538.136 0 0-.104.384-.83.692-.56.24-1.077.202-1.592.204-.117 0-.21.112-.122.238.047.06 1.14 1.816 5.104 2.217m-9.09 3.693c-.539.193-1.177.296-1.437.296-.451 0-1.189.25-1.45.476a337.1 337.1 0 0 0 3.413-.069 58.21 58.21 0 0 1-.322-.472 1.552 1.552 0 0 0-.187-.236c-.01.003-.008 0-.016.005M2.92 8.682c1.43 0 4.068-.035 6.675-.095.297-.239.606-.477.928-.718-2.89-.073-6.003-.119-7.603-.119-.676 0-1.226.21-1.226.466 0 .257.55.465 1.226.465m.407-2.247c0 .202.433.366.965.366 1.631 0 5.267-.059 7.918-.15.198-.138.395-.279.591-.411a283.4 283.4 0 0 0-8.509-.171c-.532 0-.965.164-.965.366m11.784 5.069c.29.173.647.348 1.085.508 1.387-.07 2.28-.147 2.28-.23 0-.1-1.374-.195-3.365-.278m-13.018-.982c1.214 0 3.196-.023 5.36-.064.309-.298.642-.6.991-.906a352.416 352.416 0 0 0-6.351-.082c-.762 0-1.378.236-1.378.526 0 .29.616.526 1.378.526m13.8-2.448a30.5 30.5 0 0 0-.606.322c1.023-.055 1.67-.115 1.67-.179 0-.05-.402-.097-1.063-.143m-9.433-2.8c1.556 0 6.286-.116 6.286-.258 0-.145-4.732-.261-6.286-.261-.301 0-.547.116-.547.26 0 .143.246.26.547.26M16.645 9.95a.89.89 0 0 1-.095.218c.862-.054 1.391-.113 1.391-.173 0-.058-.479-.113-1.264-.165zm-5.878 8.619c-2.952-.077-6.2-.124-7.846-.124-.676 0-1.226.209-1.226.466 0 .256.55.465 1.226.465 1.735 0 5.237-.053 8.314-.137-.156-.22-.313-.445-.468-.67m1.402 1.905c-2.654-.09-6.254-.148-7.876-.148-.532 0-.965.164-.965.367 0 .2.433.364.965.364 1.702 0 5.575-.062 8.245-.161a13.13 13.13 0 0 1-.37-.422m-6.253 1.638c0 .142.246.262.547.262 1.554 0 6.286-.12 6.286-.262 0-.143-4.73-.258-6.286-.258-.301 0-.547.115-.547.258m-2.798-6.218c.028-.13.087-.274.205-.43-.017.02-.024.039-.006.007.106-.183.244-.41.419-.671-.814-.009-1.53-.014-2.093-.014-.808 0-1.465.25-1.465.558 0 .309.657.558 1.465.558.415 0 .915-.003 1.475-.008m1.2 1.748c-.198-.193-.862-.957-.943-1.03-.483-.003-.918-.006-1.28-.006-.762 0-1.378.234-1.378.527 0 .288.616.525 1.378.525.587 0 1.348-.007 2.223-.016m-.105-3.532c.243-.327.517-.692.839-1.084-1.427-.019-2.678-.03-3.556-.03-.827 0-1.495.254-1.495.567 0 .313.668.568 1.495.568.698 0 1.644-.007 2.717-.02m-2.57-1.771c.97 0 2.404-.015 4.025-.039.298-.327.607-.67.949-1.023a298.993 298.993 0 0 0-4.974-.052c-.808 0-1.465.246-1.465.556 0 .31.657.558 1.465.558Z"
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
export class SvgQatarairwaysIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
