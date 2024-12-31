import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cplusplusbuilder-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>C++ Builder</title>
      <path
        d="M23.9221 10.6596a11.8831 11.8831 0 0 0-.4604-2.2096 11.9248 11.9248 0 0 0-1.4694-3.0894 12.0016 12.0016 0 0 0-1.362-1.6917 11.9932 11.9932 0 0 0-3.016-2.2728 11.8487 11.8487 0 0 0-2.343-.9408A11.9156 11.9156 0 0 0 13.784.1352c-.462-.069-.9264-.1143-1.3937-.1243-.2363-.0051-.4732-.015-.709-.0041-.345.0158-.6907.0358-1.0333.077-.3853.0465-.7695.108-1.1504.1822-.5005.0975-.9894.2413-1.4707.4106C6.7778 1.116 5.633 1.745 4.5914 2.5627c-.4064.319-.7914.6619-1.1528 1.0307-.8094.8259-1.4886 1.748-2.0328 2.7688A11.9101 11.9101 0 0 0 .3947 8.9406c-.138.5238-.24 1.0545-.3055 1.5918-.0521.4286-.0804.859-.0876 1.2911a11.9165 11.9165 0 0 0 .0733 1.5263c.1376 1.2294.457 2.4101.9616 3.5401.5362 1.2003 1.2507 2.2836 2.1417 3.2497a11.9821 11.9821 0 0 0 2.9132 2.3115c.7261.4119 1.487.7436 2.2824.996.587.1865 1.1853.325 1.7943.4176.4813.0731.965.1188 1.4517.1334.0129.0004.8185-.0023.8686-.0043a12.0986 12.0986 0 0 0 1.5428-.1622c1.0769-.1821 2.1083-.5084 3.095-.9755 1.1356-.5374 2.1613-1.2374 3.0778-2.0967.9794-.9184 1.783-1.972 2.4107-3.1587.3707-.701.6675-1.4324.892-2.1936.162-.5497.29-1.107.3642-1.6746.0531-.4062.0874-.8155.1126-1.2246.0382-.6173.007-1.234-.0614-1.8483zm-5.83 7.5555c-.0433.2755-.1638.4786-.3244.7057-.1733.2452-.418.4183-.6565.5938-1.0293.758-2.411 1.342-3.6686 1.562-.4691.0821-2.9556.5044-5.3987-.692-1.1166-.5467-2.1688-1.337-2.987-2.2752-1.7593-2.0173-2.5604-4.628-2.2169-7.2537.3343-2.5551 1.7631-4.899 3.8588-6.3864 1.043-.7402 2.1724-1.2259 3.425-1.4724.6468-.1273 1.2975-.1739 1.9552-.1628.6693.0113 1.3357.1154 1.9852.2748.6248.1533 1.2305.3938 1.8061.6802.565.281 1.1685.6343 1.642 1.0556.449.3995.6651.9725.5918 1.5718-.0875.7152-.4475 1.1208-.9671 1.3602-.5055.233-1.1306.1911-1.5974-.1154-.2586-.1698-.4842-.3852-.7469-.5515-.2645-.1674-.5457-.2916-.834-.412-.607-.2537-1.2132-.359-1.8649-.3988-.6248-.0383-1.3603.0714-1.9586.258-1.207.3763-2.2592 1.0995-2.9727 2.1539-.7201 1.064-1.1075 2.3223-1.0308 3.6091.0745 1.2505.5554 2.4937 1.3412 3.4437.789.954 1.9214 1.5926 3.108 1.853 1.2702.279 2.6128.1413 3.7748-.4577.2829-.1458.5538-.2983.807-.492.2379-.182.4583-.363.7502-.4498.5772-.1716 1.2242-.0326 1.6698.3675.4274.3838.5974 1.07.5094 1.6304zm-7.3213-5.0234h-1.797c-.26 0-.4154-.1547-.4157-.4152a457.1574 457.1574 0 0 1 0-1.0488c.0002-.2555.1558-.4112.4135-.4118.3824-.0008.7649-.0002 1.1473-.0002h.7211V9.4452c0-.2565.155-.413.4116-.4136a331.056 331.056 0 0 1 1.0536 0c.2515.0002.4082.1563.4087.4106.001.541.0003 1.082.0003 1.623v.2505h1.8595c.2674 0 .4218.1533.4223.421.0008.3497.0007.6993 0 1.0489-.0004.2483-.1575.4055-.4075.4059-.599.0008-1.198.0002-1.797.0002h-.0773v1.8648c0 .2634-.154.4186-.4182.4193-.3492.0009-.6985.0006-1.0477 0-.2516-.0003-.4079-.1575-.4081-.4113-.0006-.5996-.0002-1.1992-.0002-1.7988v-.074h-.0692zm12.1067-.4061c-.0004.2483-.1576.4055-.4076.4059-.599.0008-1.198.0002-1.797.0002h-.0773v1.8648c0 .2634-.154.4186-.4182.4193-.3492.0009-.6985.0006-1.0477 0-.2515-.0003-.4078-.1575-.408-.4113-.0006-.5996-.0002-1.1992-.0002-1.7988v-.074h-1.8663c-.26 0-.4153-.1547-.4157-.4152a456.645 456.645 0 0 1 0-1.0488c.0002-.2555.1559-.4112.4136-.4118.3824-.0008.7648-.0002 1.1472-.0002h.7212V9.4452c0-.2565.155-.413.4115-.4136.3512-.0008.7024-.0004 1.0536 0 .2516.0002.4082.1563.4087.4106.001.541.0003 1.082.0003 1.623v.2505h1.8596c.2673 0 .4217.1533.4223.421.0007.3497.0007.6993 0 1.0489z"
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
export class SvgCplusplusbuilderIcon {
  readonly class = input<string>('');
}
