import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-reduxsaga-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Redux-Saga</title>
      <path
        d="M7.871 4.678a3.315 3.315 0 0 0-1.953.631C4.455 6.35 3.724 8.235 3.534 10.007c-.204 1.938.23 4.166 1.398 5.638-.194.57.193 1.202.793 1.268a.975.975 0 0 0 1.06-.713c.197-.66-.425-1.342-1.13-1.189-.982-1.321-1.29-3.038-1.186-4.653.125-1.576.683-3.255 1.985-4.245.81-.602 1.828-.622 2.65-.075 1.107.742 1.763 2.132 1.97 3.43l.51.199.551.288c-.198-1.888-1.097-3.866-2.576-4.774a3.149 3.149 0 0 0-1.688-.503zm9.515 3.946a8.752 8.752 0 0 0-3.056.526.968.968 0 0 0-1.246.27c-.394.505-.162 1.297.475 1.495.615.211 1.29-.284 1.265-.918a7.778 7.778 0 0 1 2.839-.403c1.575.07 3.665.654 4.626 2.148.076.119.165.404.521.4a.484.484 0 0 0 .422-.7c-.526-.99-1.522-1.725-2.636-2.194-.984-.412-2.095-.62-3.21-.624zm-11.06.717c-.455-.003-.93.296-.979.933.012 1.233 1.657 1.33 1.912.24 1.887-.271 3.894.584 5.3 1.717.973.77 1.852 1.993 2.072 3.083.162.071.61.265 1.002.306-.146-1.638-1.215-3.101-2.452-4.127-1.568-1.33-4.123-2.328-6.218-1.903a.912.912 0 0 0-.636-.249zm-3.418 1.86c-.866.609-1.65 1.36-2.185 2.282C.008 14.668-.312 16.24.4 17.499c.66 1.218 2.082 1.78 3.41 1.812a7.263 7.263 0 0 0 2.265-.297c2.104-.59 4.373-2.222 5.274-4.362a.964.964 0 0 0 .79-.705c.2-.72-.463-1.372-1.169-1.191-.686.175-.966 1.012-.522 1.54-.607 1.389-1.8 2.449-3.112 3.161-1.493.804-3.306 1.188-4.758.659-.93-.304-1.642-1.13-1.618-2.215 0-1.297.924-2.677 2.062-3.573-.118-.538-.107-.74-.114-1.128zm20.103 1.53a.938.938 0 0 0-.672.292c-.344.327-.364.902-.092 1.248-.546.823-1.508 1.384-2.455 1.706-1.855.613-4.111.503-5.798-.38a4.48 4.48 0 0 1-.99-.674c-.141-.128-.183-.157-.296-.188-.5-.105-.783.486-.457.808 1.269 1.189 3.037 1.706 4.744 1.777.664.024 1.33-.02 1.983-.14 1.622-.302 3.318-1.107 4.168-2.521.639-.072 1.038-.775.769-1.344a.958.958 0 0 0-.904-.584zm-8.746 4.514c-.83 1.12-2.646 1.45-4.75.723-.19.13-.302.214-.433.3-.13.087-.29.17-.607.366 2.558 1.032 5.444 1.076 6.739-1.082a3.39 3.39 0 0 1-.949-.307z"
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
export class SvgReduxsagaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
