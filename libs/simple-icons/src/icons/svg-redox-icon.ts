import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-redox-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Redox</title>
      <path
        d="M5.6935 6.0492a.2861.2861 0 0 0-.2578.242C3.5384 6.383 1.883 7.4011.912 8.9027H.9101a.2835.2835 0 0 0-.3866.2638c0 .0888.0423.1682.1073.2203A5.689 5.689 0 0 0 0 12.0001c0 .9415.2272 1.83.6312 2.6135a.2827.2827 0 0 0 .2808.4842c.9706 1.5016 2.6264 2.5198 4.5237 2.6116v.002a.2835.2835 0 0 0 .5605-.0023c1.8966-.0919 3.5509-1.1105 4.5215-2.6113h.0019a.285.285 0 0 0 .3885-.2638.2857.2857 0 0 0-.031-.1266l-.014-.0295-.029.0159a2.3482 2.3482 0 0 1-.459.1851l-.0313.0099.0098.0313a.3061.3061 0 0 0 .0216.0492 5.5177 5.5177 0 0 1-4.4202 2.5485v-.0019a.2827.2827 0 0 0-.4803.0038 5.5219 5.5219 0 0 1-4.4202-2.549l.0019-.0018a.2835.2835 0 0 0-.2419-.418A5.5003 5.5003 0 0 1 .1909 12c0-.9203.2252-1.7877.6232-2.5508a.2835.2835 0 0 0 .2404-.4195 5.5219 5.5219 0 0 1 4.4198-2.549.2827.2827 0 0 0 .4822 0 5.5219 5.5219 0 0 1 4.4183 2.5508.2816.2816 0 0 0-.0351.1346.285.285 0 0 0 .277.2835 5.4879 5.4879 0 0 1 .4649 1.232 2.369 2.369 0 0 1 .238.1894 5.6693 5.6693 0 0 0-.5192-1.4842.2827.2827 0 0 0 .1073-.2207.2854.2854 0 0 0-.3885-.2638A5.7112 5.7112 0 0 0 5.9958 6.293a.285.285 0 0 0-.2811-.2438c-.0076 0-.0144-.0007-.0216 0zm-.006 1.4177a.288.288 0 0 0-.248.2207c-2.245.1486-4.0233 2.0183-4.0233 4.3011 0 2.2802 1.7749 4.1492 4.0176 4.3004a.2835.2835 0 0 0 .2812.2441.2869.2869 0 0 0 .2812-.2418 4.3041 4.3041 0 0 0 2.945-1.4317 2.369 2.369 0 0 1-.1874-.0764 4.1083 4.1083 0 0 1-2.7969 1.3183.2854.2854 0 0 0-.2419-.1345.288.288 0 0 0-.2403.1326c-2.1582-.1304-3.8673-1.92-3.8673-4.111 0-2.1872 1.7027-3.9749 3.8552-4.1113v.0022a.283.283 0 0 0 .5064-.0022c1.5625.0907 2.8902 1.0492 3.5074 2.4026a2.369 2.369 0 0 1 .2034-.0159 4.3124 4.3124 0 0 0-3.6877-2.576v-.002a.285.285 0 0 0-.277-.2188c-.0099 0-.0182-.0008-.0277 0zM3.959 9.506v4.9849h.4958V9.9572h.703c.5099 0 .892.0605 1.1467.1815a.8504.8504 0 0 1 .389.3673c.0922.1648.1383.3614.1383.5896 0 .5496-.2415.8965-.7227 1.0394-.2282.0635-.6104.0956-1.1463.0956l1.6819 2.2602h.6187L5.8651 12.629c.4788-.0503.8455-.2056 1.096-.4649.2525-.2612.3787-.6145.3787-1.0605 0-.3031-.0623-.5685-.1851-.7967a1.3667 1.3667 0 0 0-.5318-.547c-.305-.1689-.7813-.254-1.4313-.254Zm11.6288 0v1.8811c-.3757-.4505-.8583-.6757-1.449-.6757-.3693 0-.703.0846-1.0043.2536a1.858 1.858 0 0 0-.7049.6992c-.1693.2967-.254.6259-.254.9902 0 .3606.0881.6883.2639.9827a1.8644 1.8644 0 0 0 .7207.6916c.3073.1663.6497.2495 1.0254.2495.3073 0 .5696-.059.7869-.1776.2196-.1183.424-.3118.6153-.5798v.6697h.502V9.506ZM9.697 10.7114a1.8905 1.8905 0 0 0-.9645.2536 1.8591 1.8591 0 0 0-.6916.6954 1.9106 1.9106 0 0 0-.254.9687c0 .2683.0514.5223.1523.7635a1.911 1.911 0 0 0 .4104.6236 1.9257 1.9257 0 0 0 .6229.412 1.9665 1.9665 0 0 0 .7657.1504 1.8172 1.8172 0 0 0 1.0957-.3576 1.948 1.948 0 0 0 .6992-.9471h-.5215a1.3172 1.3172 0 0 1-.5099.613 1.4003 1.4003 0 0 1-.777.2306 1.4237 1.4237 0 0 1-.9884-.3787c-.279-.2552-.4294-.5632-.4494-.928h3.338c0-.246-.0158-.4508-.049-.6133a1.8002 1.8002 0 0 0-.1716-.4804 1.7953 1.7953 0 0 0-.7012-.7363 1.9446 1.9446 0 0 0-1.006-.2694Zm9.0082 0c-.5432.0113-.9925.1954-1.3497.5506-.3693.3648-.5548.8266-.5548 1.3868 0 .3647.0846.6939.254.9883a1.833 1.833 0 0 0 .709.6916c.3008.1663.6365.2495 1.0076.2495.5427 0 .9918-.1822 1.3478-.5465.3556-.3647.5329-.8236.5329-1.3773 0-.3666-.0813-.6973-.2457-.994a1.7688 1.7688 0 0 0-.68-.6954c-.2875-.169-.6107-.2536-.9686-.2536h-.053zm2.1619.0895 1.285 1.809-1.285 1.8806h.5665l1.0016-1.4804.9902 1.4804H24l-1.291-1.8807L24 10.8008h-.5745l-.9902 1.4219-1.0016-1.4219zm-11.2343.3693c.0215-.0008.0427 0 .0642 0 .3583 0 .6652.1054.92.3182.257.2132.4263.5027.5102.8693H8.3006c.068-.3556.2313-.6417.4883-.8594a1.3444 1.3444 0 0 1 .844-.3281zm4.4005 0c.0242-.0011.0472 0 .0718 0 .4222 0 .7786.1421 1.0685.4278.2902.2835.4358.6286.4358 1.0371 0 .4082-.141.759-.4218 1.0489-.2812.2899-.6206.4335-1.016.4335-.4195 0-.7725-.1406-1.0605-.4237-.2854-.2857-.4275-.6357-.4275-1.0507 0-.4086.1372-.756.4139-1.0413.2596-.2698.5718-.4146.9358-.4316zm4.611 0c.025-.0011.0491 0 .0745 0 .4172 0 .7593.1387 1.0272.42.268.2788.4022.6371.4022 1.0722 0 .424-.1312.7725-.3923 1.0469-.2593.2721-.5919.4082-.9982.4082-.4173 0-.7627-.1372-1.0371-.4139-.2744-.277-.412-.6274-.412-1.0492 0-.426.1342-.7793.4022-1.0605.2513-.2653.5627-.407.9335-.4233z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRedoxIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
