import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-openscad-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>OpenSCAD</title>
      <path
        d="M12.065 2.418c-1.287.016-2.478.283-3.346.701-.895.432-1.426 1.014-1.426 1.627 0 .494.375.98.975 1.397.242-.178.493-.307.729-.422.235-.116.556-.147.976-.15.42-.004.856.09.856.09.008.001 1.498.644 1.498.644l.894-.418h.002s.592-.266 1.268-.258c.045 0 .09.003.136.006.187.013.355.038.655.107.3.07.591.239.777.39.562-.405.897-.879.897-1.364 0-.617-.501-1.203-1.364-1.639-.862-.436-2.068-.71-3.402-.71h-.125zm7.3.143c-.325-.02-.443.02-.695.13-.506.275-1.024.55-1.545.825a9.872 9.872 0 0 1 4.725 8.06c.418-.213.832-.427 1.229-.636 1.157-.844 1.234-3.073.177-5.194-.94-1.885-2.53-3.188-3.89-3.185ZM8.55 2.928a9.648 9.648 0 0 0-6.177 8.16c.425-.214.857-.424 1.294-.617l.002-.002h.002c.204-.086.418-.128.637-.133.22-.005.445.029.672.094.454.13.916.386 1.355.726.88.68 1.693 1.714 2.213 2.883.576 1.293.84 2.532.795 3.56-.045 1.029-.412 1.875-1.138 2.268l-.977.467a9.594 9.594 0 0 0 4.744 1.248 9.594 9.594 0 0 0 5.334-1.611c-.745.289-1.48.318-2.086-.006-.54-.29-.915-.833-1.082-1.541-.121-.413-.09-.715-.103-1.147.015-.475.141-.929.207-1.248.104-.434.377-1.154.775-1.865.398-.71.977-1.41 1.611-2.008.635-.598 1.253-.966 1.704-1.082.45-.116.742-.17 1.043-.174.3-.003.608.046.921.21.772.41 1.163 1.295 1.188 2.357.074-.226.108-1.16.129-1.525a9.636 9.636 0 0 0-5.123-8.516c.447.385.717.84.717 1.342 0 .618-.409 1.185-.92 1.523a6.2 6.2 0 0 1-1.498.744 7.273 7.273 0 0 1-2.211.377c-.738.002-1.25.012-1.664-.06a12.338 12.338 0 0 1-.844-.166c-.35-.067-.334-.053-.608-.15-.59-.21-.775-.29-1.377-.686-.601-.396-1.04-.972-1.04-1.604 0-.736.602-1.367 1.505-1.818zm1.498 2.9c.054.332.147.729.162 1.131.175.04.354.077.538.107.46-.227.863-.423 1.27-.62l-1.247-.538c-.003 0-.09-.015-.215-.033a9.161 9.161 0 0 0-.508-.047zm3.291.291-.869.405.022.638c.844-.032 1.631-.174 2.299-.406.02-.298.108-.59.152-.824-.145-.037-.305-.033-.693-.036-.388-.003-.91.223-.91.223zm1.85-.115c-.04.123-.082.25-.107.39-.014.074-.02.168-.028.256.267-.107.507-.227.725-.359a1.745 1.745 0 0 0-.59-.287zm-2.967.625c-.291.14-.64.306-.984.477.338.03.675.058 1.002.066l-.018-.543zm-7.904 3.959a1.459 1.459 0 0 0-.549.111c-.755.333-1.507.71-2.213 1.088.106.01.208.025.3.037.388.052.811.218 1.509.762.28.219.592.543.898.92.327.388.61.844.865 1.238.173.288.326.575.45.848.151.316.26.641.377.945.112.306.18.617.261.91.078.285.104.573.15.844.032.268.045.52.04.754-.011.449-.044.854-.168 1.215-.04.115-.092.224-.154.328a76.45 76.45 0 0 0 2.001-.941c1.25-.676 1.36-2.978.235-5.506-.88-1.978-2.652-3.574-4.002-3.553Zm14.44.666c.185.347.338.904.13 1.633-.066.172-.12.377-.215.556-.528 1.1-1.506 1.61-1.789 1.739 0 .047-.002.112-.039.463-.037.35-.063.497-.174.86-.11.365-.227.628-.384.88-.077.1-.15.257-.506.65-.436.271-1.008.453-1.313.453.17.567.445 1.027.871 1.256.671.358 1.554.239 2.452-.277.507-.292 1.013-.711 1.48-1.23.35-.405.666-.836 1.172-1.72.505-.882.814-2.064.79-3.044-.022-1.004-.384-1.783-1.054-2.14a1.478 1.478 0 0 0-.721-.163c-.248 0-.493.06-.7.084zm-.284.047c-.5.165-1.01.47-1.498.875.172.192.37.356.611.537a3.73 3.73 0 0 0 .909.502l.048-.113a3.14 3.14 0 0 0 .096-.284c.137-.48.102-.865.012-1.154a1.64 1.64 0 0 0-.178-.363zm-17.178.732a.8.8 0 0 0-.468.155c-.473.369-.779.918-.823 1.894-.043.977.211 2.185.774 3.45.503 1.13 1.298 2.135 2.138 2.784.841.65 1.727.944 2.481.6.62-.343.737-.999.758-1.877.021-.878-.241-2.098-.807-3.344-.474-1.044-1.459-2.381-2.139-2.912-.68-.53-1.04-.664-1.386-.71a2.995 2.995 0 0 0-.528-.04Zm15.475.323c-.582.582-1.084 1.197-1.45 1.796l1.444.793a3.24 3.24 0 0 0 .531-.312 3.503 3.503 0 0 0 1.065-1.192 4.335 4.335 0 0 1-.944-.539c-.356-.266-.509-.39-.646-.546zm-1.574 2.033a7.495 7.495 0 0 0-.658 1.715l1.955-1.004c-.41-.22-.87-.468-1.297-.711Zm1.42.935-2.225 1.159-.03.146c.226.053.475.128.782.291.427.227.627.39.781.53.052-.068.103-.139.153-.217.342-.548.472-1.156.523-1.586.012-.108.01-.218.016-.323z"
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
export class SvgOpenscadIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
