import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-scylladb-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ScyllaDB</title>
      <path
        d="M18.992 2.435C17.229.868 14.75 0 12.004 0 9.259 0 6.779.868 5.017 2.435 3.246 4.012 2.272 6.244 2.272 8.706c0 2.373 2.382 13.567 2.479 14.045.169.735.815 1.24 1.541 1.24.089 0 .168-.009.257-.018.151-.026.292-.07.434-.141.301.133.638.186.965.124.248-.045.479-.151.673-.31a1.579 1.579 0 0 0 1.63.203c.23-.106.425-.265.576-.451a1.596 1.596 0 0 0 1.231.602 1.596 1.596 0 0 0 .823-.239 1.695 1.695 0 0 0 .408-.354c.248.301.611.513 1 .566.39.062.797-.035 1.116-.256.036-.018.062-.045.089-.071.186.15.407.257.637.301.169.035.337.044.505.026.151-.017.292-.053.434-.115.124.053.248.089.381.115a1.58 1.58 0 0 0 1.798-1.222c.097-.478 2.479-11.663 2.479-14.045.009-2.462-.965-4.685-2.736-6.271Zm-.186 20.219c-.124.558-.655.93-1.222.868a1.59 1.59 0 0 0 .443-.833l.07-.425.275-1.691c.088-.567.177-1.134.248-1.701a.156.156 0 0 0-.115-.168.16.16 0 0 0-.186.115c-.124.558-.239 1.125-.354 1.683l-.328 1.683-.08.416c-.026.115-.071.23-.124.327a.947.947 0 0 1-.221.275 1.05 1.05 0 0 1-.292.195 1.512 1.512 0 0 1-.337.097 1.142 1.142 0 0 1-.77-.195c.106-.159.194-.336.239-.531.017-.044.017-.097.026-.142 0-.026.009-.053.009-.071l.009-.062.08-.743.097-.992c.062-.665.124-1.329.168-1.993a.147.147 0 0 0-.133-.159.164.164 0 0 0-.177.132c-.097.656-.186 1.32-.274 1.975l-.186 1.488c-.018.16-.036.346-.071.461a1.101 1.101 0 0 1-.469.655 1.104 1.104 0 0 1-.78.168 1.107 1.107 0 0 1-.814-.566c.026-.071.044-.142.061-.204.036-.142.036-.292.036-.408l.009-.735c.009-.487.017-.983.017-1.47a40.02 40.02 0 0 0 0-1.47c0-.079-.062-.15-.141-.15a.145.145 0 0 0-.16.141c-.026.487-.062.983-.079 1.47-.027.488-.045.983-.071 1.471l-.036.735c0 .062 0 .124-.008.177 0 .053-.009.097-.018.15-.027.098-.053.195-.106.284a1.11 1.11 0 0 1-.992.593.893.893 0 0 1-.301-.044c-.098-.027-.186-.071-.275-.115a1.154 1.154 0 0 1-.416-.434 1.082 1.082 0 0 1-.106-.284c-.027-.097-.027-.195-.036-.327l-.035-.735c-.018-.488-.045-.983-.071-1.471l-.08-1.47a.154.154 0 0 0-.15-.141.15.15 0 0 0-.151.15v1.47c0 .487.009.983.018 1.47l.009.735c0 .116.008.266.035.408.018.071.035.142.062.212a1.169 1.169 0 0 1-.523.47 1.109 1.109 0 0 1-1.337-.346 1.002 1.002 0 0 1-.177-.327 1.392 1.392 0 0 1-.044-.186c-.009-.027-.009-.071-.018-.107l-.018-.115-.23-1.797c-.08-.603-.159-1.205-.257-1.798-.009-.08-.079-.133-.159-.133-.089.009-.151.08-.142.168.044.602.098 1.205.151 1.807l.177 1.806.009.116c0 .035.009.07.017.124.009.088.036.177.062.256.045.151.124.293.213.426a1.129 1.129 0 0 1-1.125.097 1.154 1.154 0 0 1-.629-.806l-.079-.416-.328-1.674c-.115-.558-.23-1.116-.354-1.674-.018-.08-.089-.133-.168-.115-.08.009-.142.089-.133.177.079.567.159 1.125.248 1.692l.274 1.682.071.425c.027.169.089.328.16.47.07.133.159.257.274.363-.018 0-.027.009-.044.009a1.126 1.126 0 0 1-1.276-.859c-.026-.115-2.47-11.619-2.47-13.949 0-2.338.921-4.437 2.586-5.933C6.956 1.284 9.33.461 11.96.461s5.004.823 6.678 2.32c1.673 1.488 2.586 3.595 2.586 5.933.053 2.33-2.392 13.834-2.418 13.94Zm-4.517-11.451a1.322 1.322 0 0 0-.726-.407h-.035a.235.235 0 0 0-.248.212.235.235 0 0 0 .212.248.824.824 0 0 1 .354.106 11.147 11.147 0 0 1-3.701 1.621 11.15 11.15 0 0 1-4.198.186.193.193 0 1 0-.062.381c.212.035.434.062.646.08 0 .008 0 .017.009.026.186.558.664 1.302 1.284 1.302a.78.78 0 0 0 .195-.027c.23-.053.611-.292.611-1.248 0-.018-.009-.027-.009-.045a12.213 12.213 0 0 0 1.612-.248c.053-.008.106-.026.151-.035.124.496.31 1.116.93 1.116.256 0 .531-.142.744-.381.177-.204.46-.664.371-1.435a11.47 11.47 0 0 0 1.745-.974.834.834 0 0 1 .115.292c.018.08.089.133.169.124a.15.15 0 0 0 .141-.168 1.184 1.184 0 0 0-.31-.726Zm-6.11 2.489c0 .442-.107.761-.266.797-.346.088-.7-.426-.868-.815.381.018.753.018 1.134 0 .008.009 0 .018 0 .018Zm3.551.106c-.115.133-.266.221-.39.221-.212 0-.336-.186-.487-.77.39-.115.779-.248 1.151-.399.018.381-.079.718-.274.948Zm-2.878-1.515a4.471 4.471 0 1 1 4.472-4.472 4.476 4.476 0 0 1-4.472 4.472Zm0-8.475A4.014 4.014 0 0 0 4.84 7.82a4.014 4.014 0 0 0 4.012 4.012 4.013 4.013 0 0 0 4.011-4.012 4.02 4.02 0 0 0-4.011-4.012Zm.876 1.231c-.735.151-.876 1.754-.442 2.196.292.293.876.381.876.585 0 .204-.584.292-.876.584-.443.443-.293 2.046.442 2.197.868.177 2.197-.877 2.197-2.781 0-1.904-1.329-2.958-2.197-2.781Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgScylladbIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
