import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-podman-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Podman</title>
      <path
        d="M17.2.275L6.75.308a.259.259 0 0 0-.203.098L.056 8.602a.259.259 0 0 0-.05.219l2.356 10.194a.26.26 0 0 0 .14.174l9.43 4.511a.258.258 0 0 0 .224-.002l9.401-4.566a.259.259 0 0 0 .141-.175L23.993 8.75a.258.258 0 0 0-.051-.22L17.403.374A.259.259 0 0 0 17.2.275zm-.123.517l6.385 7.966-2.242 9.964-9.177 4.457-9.205-4.402L.54 8.827 6.875.824zM11.46 2.857c-.933 0-1.84.1-2.426.332h-.002c-1.554.569-2.725 2.105-3.074 3.952v.004c-.309 1.463-.392 2.703-.556 3.824-.07.481-.159.94-.283 1.387-.628.497-1.079 1.263-1.244 2.138v.004c-.116.547-.181 1.04-.237 1.5h-.644v.518h8.891c-.061.464-.122.996-.181 1.42H7.596v.517h7.939c-.242-.078-.486-.218-.756-.502h-.697l-.85.488-.232-.396.162-.092h-1.069c.113-.776.17-1.601.373-2.564v-.004c.22-1.164.96-2.112 1.895-2.453l.004-.002h.002c.318-.127.928-.205 1.543-.205.613 0 1.244.075 1.622.207.935.341 1.676 1.29 1.895 2.453v.004c.204.963.26 1.788.373 2.564h-.742l.162.092-.233.396-.85-.488h-.75c-.219.25-.474.412-.747.502h4.392v-.518h-.842c-.103-.743-.181-1.67-.382-2.623v-.002a4.14 4.14 0 0 0-.264-.863h1.863v-.517h-2.13a3.488 3.488 0 0 0-.8-.906h1.8v-.518H17.95a8.862 8.862 0 0 1-.193-.775h1.484v-.518h-1.576c-.013-.081-.027-.161-.039-.244-.164-1.12-.246-2.36-.555-3.824v-.004c-.348-1.848-1.52-3.383-3.075-3.952l-.002-.002h-.002c-.65-.227-1.596-.33-2.531-.33zm0 .386c.904 0 1.833.11 2.404.309h.002c1.4.514 2.5 1.934 2.826 3.666v.003c.303 1.436.385 2.66.552 3.805.076.515.173 1.013.315 1.505-.449-.135-1.05-.197-1.648-.197-.12 0-.236.003-.352.008l-1.863-1.865a2.17 2.17 0 0 0 .11-.246l2.13 1.23.13-.224-2.185-1.262c.016-.069.027-.14.036-.21l2.302.616.068-.248-2.354-.63c-.02-1.153-1.008-2.078-2.208-2.078-1.205 0-2.196.931-2.206 2.091l-2.303.617.066.25 2.252-.605c.01.076.024.151.041.224L7.436 11.24l.129.222 2.087-1.207c.034.089.074.176.12.258l-1.266 1.266a6.959 6.959 0 0 0-1.045-.075c-.603 0-1.186.064-1.578.22a2.668 2.668 0 0 0-.285.124c.076-.335.137-.675.187-1.021.168-1.144.248-2.37.551-3.805l.002-.001v-.002c.326-1.733 1.426-3.153 2.828-3.666h.002l.004-.002c.488-.194 1.381-.307 2.287-.307zM8.473 5.194a1.295 1.295 0 0 0-.965.502l-.117.153.306.236.12-.152a.923.923 0 0 1 .673-.352.92.92 0 0 1 .67.262l.139.134.271-.275-.136-.137a1.293 1.293 0 0 0-.961-.37zm6.39 0a1.289 1.289 0 0 0-.96.371l-.138.137.274.275.136-.134a.923.923 0 0 1 .672-.262.923.923 0 0 1 .674.352l.119.152.307-.236-.12-.153c-.23-.3-.587-.486-.964-.502zM8.53 6.708c-.642 0-1.164.538-1.164 1.19 0 .65.522 1.187 1.164 1.187.643 0 1.164-.536 1.164-1.188 0-.651-.521-1.19-1.164-1.19zm6.273 0c-.643 0-1.162.538-1.162 1.19 0 .65.52 1.187 1.162 1.187.643 0 1.164-.536 1.164-1.188 0-.651-.521-1.19-1.164-1.19zm-6.273.387c.428 0 .776.355.776.802 0 .447-.348.8-.776.8a.785.785 0 0 1-.775-.8c0-.035.002-.07.006-.103.07.191.248.318.445.318a.487.487 0 0 0 .477-.496.49.49 0 0 0-.383-.486.759.759 0 0 1 .23-.035zm6.273 0c.428 0 .777.355.777.802 0 .447-.349.8-.777.8a.785.785 0 0 1-.77-.9c.072.19.248.315.444.315a.486.486 0 0 0 .479-.496.491.491 0 0 0-.383-.484.755.755 0 0 1 .23-.037zm-3.08.716c1.012 0 1.819.775 1.819 1.723 0 .947-.807 1.722-1.819 1.722s-1.82-.775-1.82-1.722c0-.948.808-1.723 1.82-1.723zm-.002.528c-.142 0-.258.043-.355.076a.804.804 0 0 1-.232.054c-.107 0-.2.047-.268.127a.568.568 0 0 0-.104.207c-.04.134-.062.268-.08.315a.276.276 0 0 0 .032.25c.033.056.071.1.117.146.09.092.206.183.322.268.12.088.237.166.326.224l-.008.09c-.043.036-.14.102-.324.178a.533.533 0 0 1-.299.025.43.43 0 0 1-.236-.172c.015-.138.044-.293.068-.449l-.376-.095c-.05.238-.067.43-.094.64l.037.059c.143.224.318.344.506.392a.908.908 0 0 0 .52-.033 1.57 1.57 0 0 0 .444-.242c.088.067.244.174.446.242a.908.908 0 0 0 .52.033.868.868 0 0 0 .507-.392l.037-.059a6.292 6.292 0 0 0-.096-.637l-.377.092c.032.148.051.32.07.451a.434.434 0 0 1-.237.17.533.533 0 0 1-.3-.025c-.178-.068-.272-.14-.325-.178l-.006-.084c.09-.058.209-.137.336-.23.115-.085.231-.176.322-.268a.72.72 0 0 0 .117-.146.273.273 0 0 0 .031-.25c-.018-.047-.039-.181-.08-.315a.564.564 0 0 0-.103-.207.343.343 0 0 0-.268-.127.815.815 0 0 1-.234-.054c-.097-.033-.212-.076-.354-.076zm.002.386c.057 0 .134.024.23.057.09.03.208.07.337.076.04.102.06.237.09.338a.361.361 0 0 1-.041.045 2.66 2.66 0 0 1-.276.228c-.165.122-.271.188-.342.233a5.287 5.287 0 0 1-.34-.233 2.557 2.557 0 0 1-.275-.228.34.34 0 0 1-.04-.047c.035-.119.046-.234.089-.34.08.012.246-.042.336-.072a.837.837 0 0 1 .232-.057zm-3.234.61a.635.635 0 0 0-.611.517l1.084-.289a.614.614 0 0 0-.473-.228zm6.336 0a.61.61 0 0 0-.436.187c.352.096.69.184 1.033.275a.632.632 0 0 0-.597-.462zm-.623.607c-.007.035-.002.07-.002.103l.921.532a.648.648 0 0 0 .276-.313l-1.195-.322zm-5.086.05l-1.18.315c.078.15.207.264.362.316l.797-.46c.018-.059.015-.12.021-.17zm4.441.714l1.656 1.658a4.19 4.19 0 0 0-.826.146l-.95-1.647a2.51 2.51 0 0 0 .12-.157zm-3.646.03c.04.055.083.118.129.169l-.658 1.134a2.656 2.656 0 0 0-.276-.119l-.002-.002a3.3 3.3 0 0 0-.292-.082zm3.338.317l.892 1.547c-.623.251-1.149.725-1.523 1.33h-1.652c-.262-.75-.741-1.38-1.358-1.764l.623-1.082c.394.347.919.559 1.492.559a2.25 2.25 0 0 0 1.526-.59zM7.46 12.09c.574 0 1.167.073 1.518.195.867.319 1.555 1.203 1.76 2.285l.001.002v.002c.109.513.173.98.227 1.424H9.86a.386.386 0 0 0-.494 0H9.11a1.351 1.351 0 0 0-.078-.418.799.799 0 0 0 .569.238c.45 0 .814-.375.814-.828a.824.824 0 0 0-.814-.828.822.822 0 0 0-.791 1.016 1.495 1.495 0 0 0-1.18-.559c-.798 0-1.46.611-1.48 1.38h-.342a.386.386 0 0 0-.494 0H4.028c.054-.445.116-.912.224-1.425l.002-.002v-.002c.205-1.084.894-1.97 1.764-2.287h.002l.004-.002c.295-.117.863-.191 1.437-.19zm-1.91 1.105a.898.898 0 0 0-.67.348l-.119.154.307.237.119-.155a.525.525 0 0 1 .379-.197.52.52 0 0 1 .377.147l.138.136.272-.275-.137-.137a.895.895 0 0 0-.666-.258zm4.094 0a.9.9 0 0 0-.668.258l-.137.137.273.275.137-.136a.522.522 0 0 1 .377-.147.525.525 0 0 1 .379.197l.119.155.307-.237-.12-.154a.894.894 0 0 0-.667-.348zm4.222.735a.947.947 0 0 0-.707.365l-.117.154.306.237.12-.155a.568.568 0 0 1 .413-.213.571.571 0 0 1 .414.159l.14.136.27-.275-.138-.137a.942.942 0 0 0-.701-.271zm4.374 0a.942.942 0 0 0-.7.271l-.14.137.272.275.139-.136a.571.571 0 0 1 .414-.159.568.568 0 0 1 .414.213l.119.155.306-.237-.117-.154a.947.947 0 0 0-.707-.365zm-12.65.232a.824.824 0 0 0-.815.828c0 .453.365.828.814.828.45 0 .815-.375.815-.828a.824.824 0 0 0-.815-.828zm5.518.285h1.242a4.137 4.137 0 0 0-.263.864v.002c-.05.237-.092.464-.127.685h-.602a16.77 16.77 0 0 0-.236-1.5l-.002-.002c-.003-.016-.009-.032-.012-.049zm-5.519.102a.43.43 0 0 1 .426.441.43.43 0 0 1-.426.442c-.22 0-.4-.171-.422-.397a.298.298 0 0 0 .215.092.31.31 0 0 0 .305-.316.317.317 0 0 0-.129-.258c.01-.001.02-.004.031-.004zm4.014 0c.235 0 .427.193.427.441a.433.433 0 0 1-.427.442.427.427 0 0 1-.422-.405.3.3 0 0 0 .256.145.31.31 0 0 0 .304-.317.314.314 0 0 0-.207-.298c.023-.004.045-.008.069-.008zm4.304.414a.865.865 0 0 0-.856.87c0 .478.382.874.856.874a.868.868 0 0 0 .857-.873.867.867 0 0 0-.857-.871zm4.292 0a.867.867 0 0 0-.814 1.14 1.597 1.597 0 0 0-1.295-.652c-.846 0-1.546.65-1.568 1.463l-1.525.408.066.248 1.477-.394c.004.028.009.06.015.087l-1.418.817.131.222 1.367-.789c.235.552.801.94 1.455.94.66 0 1.233-.397 1.463-.957l1.398.806.13-.222-1.45-.836c.005-.025.008-.053.012-.078l1.511.404.067-.248-1.563-.418a1.438 1.438 0 0 0-.107-.5c.157.186.39.303.648.303a.867.867 0 0 0 .856-.873.865.865 0 0 0-.856-.871zm-10.567.043c.598 0 1.071.444 1.092.992h-.41c.007-.01.016-.02.023-.033a.24.24 0 0 0 .025-.22c-.005-.016-.021-.102-.05-.196a.416.416 0 0 0-.078-.156.282.282 0 0 0-.225-.108.499.499 0 0 1-.129-.031c-.062-.021-.142-.05-.248-.05-.106 0-.188.029-.25.05a.49.49 0 0 1-.127.031.29.29 0 0 0-.225.108.424.424 0 0 0-.08.156c-.029.094-.043.18-.048.195a.242.242 0 0 0 .023.22c.008.014.017.023.025.034h-.41c.02-.548.494-.992 1.092-.992zm6.275.344c.259 0 .47.211.47.484a.477.477 0 0 1-.47.486.472.472 0 0 1-.467-.453.322.322 0 0 0 .246.115c.18 0 .326-.15.326-.338a.34.34 0 0 0-.156-.289c.017-.002.033-.005.05-.005zm4.292 0c.26 0 .469.211.469.484 0 .272-.21.486-.469.486a.477.477 0 0 1-.47-.486c0-.016.002-.031.004-.047a.33.33 0 0 0 .312.24c.18 0 .326-.15.326-.338a.338.338 0 0 0-.256-.332.475.475 0 0 1 .084-.007zm-10.567.24c.021 0 .063.01.125.031.086.03.117.039.186.049.012.041.022.088.033.129a1.475 1.475 0 0 1-.168.138c-.038.028-.064.045-.088.061h-.176c-.024-.016-.052-.033-.09-.06a1.602 1.602 0 0 1-.168-.14l.034-.128c.107-.014.146-.04.185-.049a.504.504 0 0 1 .127-.031zm8.458.25c.661 0 1.184.502 1.184 1.113 0 .156-.035.304-.096.44l-.002-.024-.022-.156a2.443 2.443 0 0 0-.04-.24l-.377.093.044.274a.24.24 0 0 1-.115.074.299.299 0 0 1-.168-.014c-.087-.03-.132-.063-.18-.094.057-.037.13-.084.198-.134.08-.06.16-.123.226-.19a.542.542 0 0 0 .092-.111.245.245 0 0 0 .026-.225c-.008-.019-.022-.112-.053-.21a.444.444 0 0 0-.084-.163.286.286 0 0 0-.23-.107.566.566 0 0 1-.14-.037c-.065-.022-.152-.055-.263-.055-.11 0-.195.032-.262.055a.575.575 0 0 1-.14.037.294.294 0 0 0-.23.107.436.436 0 0 0-.083.162c-.03.1-.045.192-.052.211a.246.246 0 0 0 .025.225.534.534 0 0 0 .09.111c.066.067.146.13.226.19.068.05.138.095.194.132a.57.57 0 0 1-.18.096.305.305 0 0 1-.17.014.237.237 0 0 1-.111-.076c.008-.09.026-.177.04-.272l-.376-.094c-.032.146-.045.286-.063.409a1.052 1.052 0 0 1-.09-.428c0-.611.521-1.113 1.182-1.113zm0 .623c.026 0 .074.01.14.033.066.025.169.052.206.055l.035.156c-.04.04-.112.1-.184.152-.095.07-.14.095-.197.131-.056-.036-.1-.061-.195-.13a1.236 1.236 0 0 1-.184-.157l.035-.152a1.04 1.04 0 0 0 .206-.055.523.523 0 0 1 .138-.033zm-2.22.353a.43.43 0 0 0-.385.272l.656-.176a.416.416 0 0 0-.271-.096zm4.333 0a.414.414 0 0 0-.22.07l.603.16a.426.426 0 0 0-.383-.23zm-4.054.567l-.607.162a.436.436 0 0 0 .125.113zm3.925.002l.407.234a.443.443 0 0 0 .087-.102zm-1.986.234c.067.047.165.108.285.148a.68.68 0 0 0 .389.024.57.57 0 0 0 .232-.121 1.201 1.201 0 0 1-.904.394c-.356 0-.67-.145-.885-.375a.58.58 0 0 0 .207.102c.144.036.28.014.391-.024.12-.04.218-.1.285-.148zm-9.524 1.61v.517h6.214v-.518zm3.619 1.292v.517H15.3v-.517z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPodmanIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
