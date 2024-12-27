import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-scania-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Scania</title>
      <path
        d="M12 .6c-2.167 0-4.264.667-6.019 1.888a32.768 32.768 0 0 1-2.167-.48A12.262 12.262 0 0 0 0 8.615a32.75 32.75 0 0 1 1.5 1.636c-.3705 4.3908 2.0301 8.5486 6.018 10.423.247.699.47 1.404.668 2.117a12.266 12.266 0 0 0 7.629 0c.197-.713.42-1.419.667-2.118 3.9876-1.8737 6.3882-6.0307 6.018-10.421.482-.563.982-1.11 1.5-1.636a12.261 12.261 0 0 0-3.814-6.609c-.716.185-1.439.345-2.167.481A10.535 10.535 0 0 0 12 .6zm0 .642c1.806 0 3.562.494 5.086 1.407a32.724 32.724 0 0 1-10.172 0A9.896 9.896 0 0 1 12 1.242zM3.994 2.715c.431.107.865.204 1.301.293a10.537 10.537 0 0 0-3.687 6.387c-.295-.332-.597-.659-.904-.98a11.619 11.619 0 0 1 3.29-5.7zm16.012 0a11.62 11.62 0 0 1 3.29 5.7c-.307.321-.609.648-.904.98a10.537 10.537 0 0 0-3.687-6.387c.436-.089.87-.186 1.301-.293zm-13.873.454a33.353 33.353 0 0 0 11.734 0 9.885 9.885 0 0 1 3.966 6.873 33.352 33.352 0 0 0-5.866 10.16 9.89 9.89 0 0 1-7.935 0 33.367 33.367 0 0 0-5.866-10.16 9.895 9.895 0 0 1 3.967-6.873zm6.018.867a.662.662 0 0 0-.448 1.132.652.652 0 0 0-.971.573.652.652 0 0 0 1.03.535c-.241.404-.606.944-1.13.944-.547 0-.811-.228-1.052-.633a.548.548 0 0 0 .318-.021c.316-.105.493-.423.404-.823-.079-.354-.456-.55-.799-.45a.637.637 0 0 0-.291.18.698.698 0 0 0 .064-.519c-.098-.349-.512-.628-.873-.574l1.415 3.475c-.073.078-.18.196-.256.329-.302-.153-.909-.379-1.514-.135a1.553 1.553 0 0 0-.522.349c-.45.45-.676 1.2-.793 1.731a8.3307 8.3307 0 0 0-.08.415c.188-.141.31-.23.424-.306.102-.068.2-.124.336-.194.247-.127.583-.264.886-.264.163 0 .347.043.472.148.045.037.405.543 1.114.729.666.175.68.287.69.377 0 0-.116.19-.367.365a2.685 2.685 0 0 0-.346-.445c-.331-.346-.862-.532-1.296-.529-.413.004-.718.192-1.526.192-.82 0-1.39-.207-1.81-.454-.302-.164-.52-.37-.723-.535.108.263.213.472.307.684.07.151.327.667.648.947.413.35.822.465 1.224.465.408 0 .81-.119 1.206-.236.39-.116.766-.228 1.142-.228.487 0 .752.163.964.294a6.196 6.196 0 0 1-.225.15c-.3.191-.539.262-.771.262-.286 0-.801-.15-1.25-.33a1.2368 1.2368 0 0 0-.006.102v.116c0 .253.041.557.326.85.123.125.275.222.454.29.187.07.407.105.646.117-.109.1-.211.194-.31.316-.24.296-.435.692-.435 1.202 0 .262.046.481.111.691.047.149.093.284.157.445l.212-.255c.004-.004.236-.278.555-.51a2.98 2.98 0 0 0-.326 1.325c0 1.012.563 1.834 1.332 2.48 0 0 .183.163.312.263-.003-.162 0-.267 0-.408 0-.493.08-1.448.405-2.025.035.135.075.334.11.558.045.298.081.641.081.94 0 .496-.072.863-.156 1.127-.098.304-.18.42-.255.547a3.34 3.34 0 0 0 .882-.09 2.3 2.3 0 0 0 1.72-1.555c.09-.283.136-.596.136-.94 0-.198-.018-.403-.046-.603l-.024-.16c.055.044.093.085.14.138.18.207.343.524.343 1.036 0 .175-.01.445-.084.749.174-.058.351-.163.52-.27.204-.13.397-.284.572-.46.48-.48.811-1.117.818-1.845.005-.475-.096-.855-.32-1.299-.024-.048-.052-.097-.077-.146.052.022.101.05.147.08.255.164.42.424.53.718.066.177.114.35.147.554.074-.09.162-.212.262-.385.201-.348.414-.883.414-1.647 0-.375-.049-.806-.22-1.255a2.883 2.883 0 0 0-.85-1.202c.2643.0287.511.146.7.333.125.126.223.28.313.452l.095.19c.009-.093.008-.123.01-.204-.02-1.351-.397-2.34-1.626-2.978l-.007-.004c.43-.488.638-1.038.783-1.63-.296-.075-.843-.138-1.673.25l1.32-3.254c-.362-.054-.775.225-.873.574a.695.695 0 0 0 .065.519.642.642 0 0 0-.292-.181c-.343-.1-.72.097-.8.451-.088.4.089.718.405.822.134.04.177.045.318.021-.241.405-.494.629-1.041.629-.524 0-.892-.535-1.133-.94 0 0 .246.122.385.122a.651.651 0 0 0 .645-.657.652.652 0 0 0-.645-.658.634.634 0 0 0-.33.093.694.694 0 0 0 .202-.481.651.651 0 0 0-.645-.658zm3.608 3.585h.147l-.047.14c-.151.447-.629 1.516-1.802 1.779l.005.022.05.247c.497-.092.817-.303 1.107-.555.742.361 1.242.961 1.42 1.76l.034.157a.668.668 0 0 0-.114-.1 1.345 1.345 0 0 0-.719-.194c-.262 0-.489.063-.602.102.186.159.337.297.471.431.41.411.677.803.837 1.235.12.326.18.67.18 1.048 0 .403-.072.772-.213 1.098-.011.026-.04.092-.052.127a.706.706 0 0 0-.044-.126c-.341-.72-.91-.872-1.328-.872-.07 0-.13.004-.184.008l.006.01c.278.428.698 1.075.698 1.87 0 .26-.048.516-.142.759a2.4 2.4 0 0 1-.55.83c-.118.117-.222.214-.397.333l-.1.071a.465.465 0 0 0 .02-.12c.024-.897-.475-1.61-1.272-1.827l.018.076c.087.353.186.752.186 1.292 0 .583-.145 1.066-.43 1.436a1.954 1.954 0 0 1-.688.556 2.23 2.23 0 0 1-.652.219l-.109.018c.011-.014.034-.063.045-.087a1.0898 1.0898 0 0 0 .054-.161c.124-.455.127-1.001.127-1.069 0-.845-.21-1.618-.336-2.08l-.026-.098c-.1.074-.166.14-.211.186l-.02.021c-.263.263-.455.723-.57 1.367-.035.197-.052.362-.07.537l-.013.195-.003.121s-.072-.08-.09-.098a4.643 4.643 0 0 1-.188-.204 3.207 3.207 0 0 1-.483-.71 2.495 2.495 0 0 1-.177-.482 2.302 2.302 0 0 1-.07-.561c0-1.062.641-1.774.918-2.058l-.09.016a3.31 3.31 0 0 0-.326.08 2.172 2.172 0 0 0-.546.252 3.171 3.171 0 0 0-.603.513s-.018-.083-.021-.107a2.518 2.518 0 0 1-.04-.391c0-.441.168-.833.5-1.163.312-.313.551-.413 1.265-.712l.218-.091-.314.043c-.438.062-.638.09-1.009.09-.525 0-.887-.107-1.106-.327a.75.75 0 0 1-.123-.158 1.549 1.549 0 0 1-.117-.243l.272.099c.054.017.117.036.17.05a1.9 1.9 0 0 0 .49.07c.444 0 .804-.194 1.24-.508.182-.13.336-.258.456-.378.182-.182.221-.28.222-.297-.008-.269-.016-.523-.951-.768a1.782 1.782 0 0 1-.913-.59.8119.8119 0 0 0-.063-.068 1.046 1.046 0 0 0-.682-.229c-.196 0-.409.043-.651.132a4.7942 4.7942 0 0 0-.395.166l-.108.05.036-.113c.04-.132.085-.252.144-.391.05-.118.1-.22.156-.314.184-.31.412-.522.676-.629.138-.056.288-.084.447-.084.385 0 .732.167.875.247.01.71.438 1.12.93 1.12a.856.856 0 0 0 .643-.275c.121-.122.196-.258.244-.366.039-.087.067-.15.07-.2l.005.001a.496.496 0 0 1 .211.132l.236-.21a1.118 1.118 0 0 0-.401-.264 1.424 1.424 0 0 0-.464-.098 1.68 1.68 0 0 0-.36.026c-.123.02-.222.048-.396.048a.693.693 0 0 1-.358-.09 1.73 1.73 0 0 1 .525-.535l.006-.004h3.817l.074.003a3.287 3.287 0 0 0-.747.655l.215.17c.498-.622 1.272-1.01 2.02-1.01v.001zm-.457.494c-.621.08-1.182.635-1.182.635l.127.27c.293-.062.521-.22.69-.389.248-.248.347-.437.365-.516zm-5.542.543l.138.038c.055.016.132.032.207.042l.036.006.007.035a.27.27 0 0 0 .072.144.302.302 0 0 0 .43 0 .297.297 0 0 0 .088-.196l.002-.048.047-.002a2.6025 2.6025 0 0 1 .22 0l.117.008-.018.07a.852.852 0 0 1-.228.425.609.609 0 0 1-.469.192.578.578 0 0 1-.41-.175.81.81 0 0 1-.219-.43l-.02-.109zm4.513 1.49l-.133.416c.085.098.148.19.2.267.146.214.238.41.29.614.05.2.056.392.056.57 0 .142-.015.285-.046.425-.022.101-.053.21-.079.293-.024.08-.079.226-.079.226s-.008-.165-.023-.255-.029-.186-.053-.264a1.437 1.437 0 0 0-.353-.604 1.41 1.41 0 0 0-.35-.253 1.821 1.821 0 0 0-.284-.118c.022.083.045.173.07.28.064.276.093.504.093.716 0 .337-.075.622-.232.871a1.323 1.323 0 0 1-.187.234 2.039 2.039 0 0 1-.386.316c.036-.06.065-.122.1-.193.042-.087.068-.18.087-.248.186-.657-.121-1.063-.37-1.312a2.3783 2.3783 0 0 0-.103-.098c-.004.092-.008.184-.014.277-.022.318-.08.68-.35.948a1.942 1.942 0 0 1-.139.13c-.052.042-.111.092-.19.14.033-.064.06-.096.11-.218a.97.97 0 0 0-.029-.78l-.34.183c.01.025.017.052.024.076a.71.71 0 0 1-.086.577c-.05.08-.115.16-.204.25-.079.077-.162.152-.235.218l-.156.141.139-.001c.15-.002.35-.01.563-.047.34-.062.605-.192.813-.4a1.34 1.34 0 0 0 .218-.287c-.01.11-.037.222-.084.34a2.265 2.265 0 0 1-.239.436c-.065.095-.138.2-.232.315l-.086.105.134-.02c.162-.023.323-.056.48-.098a1.742 1.742 0 0 0 1.078-.777c.1-.158.172-.323.218-.504a2.35 2.35 0 0 0 .066-.696c.03.052.057.109.083.172.054.136.09.29.11.47.01.112.016.235.016.385v.03c0 .144 0 .281-.011.436l-.011.152.103-.112c.134-.147.279-.315.427-.55a2.543 2.543 0 0 0 .332-1.978 2.31 2.31 0 0 0-.359-.76 3.15 3.15 0 0 0-.349-.417l-.018-.019zm-3.275.165a.5.5 0 0 0-.215.049c.273.029.341.113.467.238.066.067.129.138.194.204.12.12.231.219.436.219a.613.613 0 0 0 .157-.022.981.981 0 0 0 .305-.141.528.528 0 0 1-.203.041c-.511 0-.663-.588-1.14-.588h-.001zm-5.83.1c.06.038.186.127.365.2.167.07.343.135.55.184.278.065.586.097.94.097.326 0 .717-.052 1.162-.153.143-.032.292-.062.413-.062.215 0 .424.035.578.116.153.082.261.17.395.279a2.71 2.71 0 0 0-.48-.071c-.143-.01-.34.003-.465.022-.28.041-.525.114-.783.19l-.03.01c-.39.115-.759.224-1.123.224-.422 0-.803-.157-1.101-.455-.065-.065-.171-.17-.242-.27a1.994 1.994 0 0 1-.179-.31v-.001zm-3.061.567a32.694 32.694 0 0 1 5.084 8.805 9.895 9.895 0 0 1-5.086-8.647c0-.054 0-.106.002-.158zm19.786 0l.002.157a9.895 9.895 0 0 1-5.086 8.648 32.665 32.665 0 0 1 5.085-8.805h-.001zM8.313 21.007a10.535 10.535 0 0 0 7.375 0c-.14.423-.273.847-.396 1.274a11.616 11.616 0 0 1-6.583 0 33.2233 33.2233 0 0 0-.397-1.273l.001-.001z"
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
export class SvgScaniaIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
