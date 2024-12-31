import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mg-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MG</title>
      <path
        d="M23.835 8.428c-.015-.184-.034-.368-.053-.552-.016-.138-.034-.274-.052-.411a.592.592 0 0 0-.104-.243c-.087-.11-.175-.217-.266-.323l-.365-.429a42.198 42.198 0 0 0-2.509-2.638A42.774 42.774 0 0 0 17.3 1.064c-.11-.088-.222-.174-.336-.257a.664.664 0 0 0-.252-.1 21.852 21.852 0 0 0-1-.102 45.346 45.346 0 0 0-3.71-.158 45.291 45.291 0 0 0-4.286.211c-.142.015-.284.03-.426.048a.664.664 0 0 0-.253.1c-.113.085-.225.17-.337.258a42.775 42.775 0 0 0-3.185 2.768A42.467 42.467 0 0 0 .641 6.898c-.09.107-.18.215-.267.324a.609.609 0 0 0-.105.243c-.019.137-.035.273-.05.41-.02.185-.038.37-.056.553A41.387 41.387 0 0 0 0 12.001a41.35 41.35 0 0 0 .163 3.574l.057.552c.014.138.03.274.05.41.015.087.052.17.104.244a24.04 24.04 0 0 0 .633.753 42.577 42.577 0 0 0 2.507 2.636A42.394 42.394 0 0 0 6.7 22.938c.112.087.224.172.337.255a.663.663 0 0 0 .253.102l.426.048c.19.018.383.037.574.053 1.234.103 2.473.157 3.712.157 1.237 0 2.476-.054 3.71-.157.193-.016.384-.035.573-.053.144-.015.287-.031.427-.048a.66.66 0 0 0 .252-.102c.115-.083.227-.168.336-.255a42.392 42.392 0 0 0 3.187-2.767 42.424 42.424 0 0 0 2.509-2.637l.365-.43c.09-.106.18-.215.266-.323a.596.596 0 0 0 .104-.243c.018-.137.036-.273.052-.411A39.963 39.963 0 0 0 24 12c0-1.191-.058-2.384-.165-3.573m-1.805 6.601c-.013.156-.029.313-.044.469l-.044.348a.499.499 0 0 1-.089.205c-.073.092-.148.185-.225.276l-.31.363a35.829 35.829 0 0 1-2.126 2.234c-.86.827-1.762 1.61-2.7 2.346a7.787 7.787 0 0 1-.285.216.551.551 0 0 1-.214.087l-.362.04a38.171 38.171 0 0 1-3.63.178c-1.05 0-2.1-.045-3.146-.132l-.486-.045-.362-.041a.547.547 0 0 1-.214-.087 9.555 9.555 0 0 1-.285-.216c-.127-.099-.251-.2-.376-.3a35.855 35.855 0 0 1-2.324-2.046 36.03 36.03 0 0 1-2.125-2.234c-.182-.21-.361-.423-.536-.639a.515.515 0 0 1-.089-.205 33.972 33.972 0 0 1-.09-.817 34.723 34.723 0 0 1-.138-3.028c.003-1.01.047-2.02.138-3.029.015-.155.03-.311.048-.467.012-.118.026-.232.042-.348a.506.506 0 0 1 .089-.206 21.379 21.379 0 0 1 .536-.638 36.255 36.255 0 0 1 2.125-2.236 36.3 36.3 0 0 1 2.7-2.346c.094-.073.189-.146.285-.218a.553.553 0 0 1 .214-.084c.282-.035.565-.063.848-.086a38.642 38.642 0 0 1 3.146-.135 38.792 38.792 0 0 1 3.63.18c.122.012.243.026.362.04a.56.56 0 0 1 .214.085 26.752 26.752 0 0 1 .662.517 36.24 36.24 0 0 1 2.323 2.047c.74.715 1.45 1.46 2.126 2.236l.31.364c.077.09.152.181.225.274a.5.5 0 0 1 .089.205l.044.349c.015.155.031.312.044.467.091 1.009.14 2.019.14 3.029 0 1.01-.048 2.021-.14 3.028m-1.225-3c-.098-.01-.981-.012-1.456-.017-.622-.005-1.042 0-1.246-.001-.06 0-.068-.003-.135 0-.003.047-.003.071-.005.13-.002.043-.01.19-.018.384-.012.326-.026.787-.018 1.116l.001.114c.036.002.616.002 1.007.005.053 0 .057.001.11.003-.001.027 0 .052.001.097 0 .048-.055.74-.088.94-.1.149-.163.23-.367.456-.217.24-.256.3-.934.984-.704.712-2.035 1.867-2.513 2.263a9.84 9.84 0 0 0-.303.257s.007-.243-.002-.361c.018-4.565.013-7.807-.004-12.84.008-.114-.005-.209 0-.347.15.117.156.123.259.208.7.594 1.438 1.203 2.024 1.79.81.815 1.156 1.174 1.74 1.863.058.073.069.088.108.15.01.064.01.076.021.157.023.193.062.588.068.696.002.062.009.091.007.151.06.006.1 0 .16.004.352.006.77.008 1.167.006.133-.001.265-.003.39-.006.068 0 .072.002.128 0a1.427 1.427 0 0 0 0-.17 12.32 12.32 0 0 0-.097-1.292 2.536 2.536 0 0 0-.032-.267c-.05-.068-.081-.1-.128-.155A28.182 28.182 0 0 0 18.5 6.02c-1.795-1.721-2.75-2.375-2.75-2.375s-.077-.057-.134-.095c-.075-.014-.058-.01-.13-.02a31.483 31.483 0 0 0-2.608-.168c-.124-.004-.16-.007-.293-.001.006.15.002.153-.002.267.014 6.216-.02 10.641-.009 16.813v.188s.088.008.203.004c.734 0 2.167-.08 2.534-.14.142-.022.219-.027.319-.056.075-.043.115-.074.176-.126a36.5 36.5 0 0 0 2.616-2.267c.983-.941 1.876-1.96 2.09-2.2.09-.099.15-.176.256-.315.045-.166.034-.215.054-.347.093-1.076.167-1.752.167-2.977-.004-.064-.002-.095-.007-.169-.089-.005-.128-.004-.177-.008m-9.539-8.672c-.152.006-.43-.003-.942.026-.537.031-.85.064-.977.075-.073.007-.117.007-.17.013-.022.048-.019.042-.042.103-.779 1.95-1.788 4.655-2.627 6.666-.042.085-.128.3-.128.3s-.039-.064-.139-.267A85.298 85.298 0 0 0 4.67 7.276c-.046-.077-.128-.246-.128-.246s-.123.132-.204.204c-.173.155-.805.878-.93 1.046-.064.083-.085.107-.157.21-.03.117-.036.187-.058.316-.045.257-.153 1.364-.18 2.852.004 1.21.076 2.292.186 3.498l.031.322s.137.186.166.219c.605.71 1.046 1.217 1.463 1.643l.358.365s-.018-.257-.025-.39l-.024-.413c-.082-1.297-.244-3.484-.29-4.621-.008-.144.018-.824.018-.824l1.742 3.508s.13-.315.188-.447c.7-1.754 1.366-3.327 2.05-5.081.047-.11.294-.77.294-.77s.007.712 0 .866c-.034 4.924-.019 7.741-.012 10.444l.001.249c0 .138-.003.156-.003.247.181.03.163.03.261.042.317.04.313.051.686.075.385.024.806.035 1.142.043.086-.004.133-.004.175-.006.003-.08.003-.118.003-.193-.029-6.302.044-16.917.044-16.917s.003-.057 0-.162a2.544 2.544 0 0 0-.2.001"
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
export class SvgMgIcon {
  readonly class = input<string>('');
}
