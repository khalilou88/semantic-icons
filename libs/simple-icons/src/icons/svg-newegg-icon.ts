import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-newegg-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Newegg</title>
      <path
        d="M16.082 5.873c-.091 0-.183.004-.276.01-.73.05-1.504.281-2.256.64a9.635 9.635 0 0 0-3.024 2.3 7.076 7.076 0 0 0-.944 1.343c.393-.019.9-.043 1.023-.043.318-.003.547.097.71.246 0 0 .3-.033.416-.087l.002-.002a1.96 1.96 0 0 1 .799-.175c.354-.004.632.071.838.197a.515.515 0 0 1 .361-.15l.783-.01a.53.53 0 0 1 .209.042.508.508 0 0 1 .205-.046l.748-.005c.069 0 .135.013.197.039a.495.495 0 0 1 .199-.043l.783-.006a.52.52 0 0 1 .371.15l.102-.05c.246-.11.51-.17.793-.175h.008c.381 0 .673.09.887.233l.17.142.057-.058a1.17 1.17 0 0 1 .278-.197c-.044-1.63-.56-3.1-1.686-3.82-.514-.334-1.114-.48-1.753-.475Zm-4.481.039a4.28 4.28 0 0 0-.276.008c-.703.048-1.447.263-2.173.598-1.394.646-2.722 1.736-3.588 2.946a7.104 7.104 0 0 0-.238.357C3.661 12.5 4.193 15.878 6.52 17.37a4.482 4.482 0 0 0 2.222.695 10.312 10.312 0 0 1-.187.007 5.146 5.146 0 0 0 2.457-.435 4.318 4.318 0 0 1-.522-.284 4.515 4.515 0 0 1-1.466-1.541 5.106 5.106 0 0 1-.579-1.524h-.12a.518.518 0 0 1-.506-.647l.779-3.061a.52.52 0 0 1 .476-.39c.07-.13.142-.256.221-.383a8.027 8.027 0 0 1 1.118-1.396c.84-.848 1.88-1.572 2.946-2.024l-.002-.003c-.517-.331-1.117-.474-1.755-.472Zm-4.384.036C4.976 5.977 2.259 7.807.969 9.88c-1.666 2.675-1.13 6.055 1.197 7.546 1.34.86 2.988.903 4.459.27a4.4 4.4 0 0 1-.603-.324c-2.324-1.489-2.86-4.866-1.193-7.545.896-1.442 2.482-2.762 4.116-3.445-.51-.308-1.1-.442-1.728-.434Zm15.314 4.579a.744.744 0 0 0-.521.197c-.134.128-.24.34-.315.629l-.282 1.11a1.47 1.47 0 0 0-.06.468.374.374 0 0 0 .152.264c.09.068.217.1.383.097a.81.81 0 0 0 .288-.057 1.126 1.126 0 0 0 .29-.168l-.06.237a.849.849 0 0 1-.102.264c-.034.041-.088.062-.156.063-.098.002-.127-.068-.093-.207l-.889.01c-.07.297-.031.495.122.594.148.101.371.15.663.146a1.988 1.988 0 0 0 .61-.087 1.132 1.132 0 0 0 .429-.241.893.893 0 0 0 .227-.294 6.298 6.298 0 0 0 .18-.619l.603-2.36-.852.005-.124.233a.513.513 0 0 0-.493-.284zm-2.414.02a.74.74 0 0 0-.517.195c-.136.13-.239.34-.315.629l-.284 1.11a1.396 1.396 0 0 0-.06.468.364.364 0 0 0 .152.266c.089.068.215.1.381.1a.798.798 0 0 0 .286-.06 1.135 1.135 0 0 0 .294-.166l-.063.235a.804.804 0 0 1-.101.266c-.033.04-.084.062-.152.063-.098.002-.13-.067-.096-.205l-.904.004v.317c.007.141.039.216.138.282.151.1.373.145.665.142a1.9 1.9 0 0 0 .609-.083 1.166 1.166 0 0 0 .426-.242.888.888 0 0 0 .229-.298 5.244 5.244 0 0 0 .182-.617l.6-2.359-.847.004-.126.233a.52.52 0 0 0-.2-.213.592.592 0 0 0-.297-.07zm-1.988.02c-.21.004-.406.046-.588.128a1.08 1.08 0 0 0-.438.361c-.11.154-.202.365-.268.631l-.23.893c-.055.23-.085.4-.085.52a.665.665 0 0 0 .09.324.545.545 0 0 0 .284.235 1.243 1.243 0 0 0 .49.08 1.396 1.396 0 0 0 .52-.09 1.143 1.143 0 0 0 .393-.264 1.267 1.267 0 0 0 .248-.326 2.499 2.499 0 0 0 .146-.436l.059-.224-.87.009-.104.403a.995.995 0 0 1-.113.307.171.171 0 0 1-.159.08c-.054 0-.085-.018-.095-.058-.008-.04.005-.13.04-.268l.169-.661 1.18-.01.102-.408c.075-.297.1-.526.075-.69a.565.565 0 0 0-.25-.391c-.143-.096-.34-.144-.596-.144zm-5.59.057c-.21.002-.406.044-.59.128-.182.084-.33.203-.441.36-.11.155-.2.366-.266.632l-.23.895c-.058.225-.085.4-.085.517a.681.681 0 0 0 .09.327.556.556 0 0 0 .284.233c.135.056.298.081.49.081a1.446 1.446 0 0 0 .52-.091c.147-.06.277-.146.391-.264.114-.114.2-.223.248-.326a2.454 2.454 0 0 0 .146-.437l.057-.225-.87.006-.104.406a1.032 1.032 0 0 1-.114.308.177.177 0 0 1-.156.08c-.054.002-.088-.017-.097-.057-.008-.04.005-.13.04-.268l.169-.663 1.183-.01.105-.406c.075-.297.102-.528.075-.692a.56.56 0 0 0-.25-.388c-.142-.101-.34-.149-.596-.146zm-1.93.019a.752.752 0 0 0-.351.085c-.11.058-.215.141-.31.253l.089-.282-.935.01-.781 3.06.919-.008.527-2.07a2.446 2.446 0 0 1 .132-.424.155.155 0 0 1 .142-.08c.061-.003.091.023.093.066.002.047-.025.176-.079.386l-.54 2.12.917-.004.548-2.147c.067-.269.104-.46.104-.572a.374.374 0 0 0-.12-.284c-.08-.074-.197-.111-.355-.11zm6.252 0-.785.006a20.25 20.25 0 0 0-.655 1.763l.26-1.76-.749.005c-.394 1.058-.616 1.645-.66 1.763a558.387 558.387 0 0 1 .248-1.76l-.783.011-.391 3.057.983-.01.587-1.485c-.08.593-.144 1.073-.185 1.44 0 .016.011.022.01.035h.97zm5.968.428c.054 0 .084.016.092.054a.955.955 0 0 1-.045.27l-.241.948a1.373 1.373 0 0 1-.116.334c-.03.051-.077.073-.136.077-.054 0-.082-.019-.09-.06a.909.909 0 0 1 .044-.268l.263-1.029a.88.88 0 0 1 .098-.26.156.156 0 0 1 .131-.066zm-2.41.018c.054 0 .085.02.09.059a.89.89 0 0 1-.043.268l-.243.949a1.405 1.405 0 0 1-.112.337.162.162 0 0 1-.138.075c-.052 0-.084-.022-.09-.061a.966.966 0 0 1 .043-.268l.264-1.03a.725.725 0 0 1 .1-.26.156.156 0 0 1 .13-.07zm-2.393.02h.012c.05 0 .079.023.083.071a1.18 1.18 0 0 1-.055.307l-.055.227h-.267l.059-.225a1.511 1.511 0 0 1 .1-.319c.024-.038.066-.058.123-.06zm-5.583.057c.049 0 .074.023.079.069.005.047-.011.15-.05.308l-.06.226-.263.004.056-.226a1.458 1.458 0 0 1 .104-.32c.022-.039.068-.059.134-.06zm.442 2.806a1.674 1.674 0 0 1-.38.215l-.005.002c-.2.079-.433.124-.704.127h-.004c-.272 0-.501-.042-.69-.121a1.233 1.233 0 0 1-.25-.136.522.522 0 0 1-.418.215l-.917.004a.509.509 0 0 1-.137-.016.54.54 0 0 1-.136.018l-.305.004c.082.392.206.769.372 1.124a4.566 4.566 0 0 0 1.675 1.943 4.427 4.427 0 0 0 2.22.694c1.87.082 3.828-.952 5.008-2.846.138-.222.27-.46.388-.708l-.014-.008c-.175-.115-.28-.237-.331-.426l-.16.075a1.944 1.944 0 0 1-.706.126 1.738 1.738 0 0 1-.698-.122c-.204-.085-.765.091-.982.091h-.97a.534.534 0 0 1-.194-.038.52.52 0 0 1-.211.048l-.986.01a.521.521 0 0 1-.465-.275z"
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
export class SvgNeweggIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
