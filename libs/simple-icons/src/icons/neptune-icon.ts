import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-neptune-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Neptune</title>
    <svg:path
      d="M24 12c0 6.6196-5.3725 11.9857-12 11.9857-6.6274 0-12-5.3661-12-11.9857C0 5.3805 5.3726.0143 12 .0143 18.6275.0143 24 5.3805 24 12Zm-9.67-5.291c-.7538 0-1.1437.476-1.4374 1.0547-.3967.7807-.6057 1.656-.8184 2.6367-.27 1.2441-.4959 2.4964-.748 3.7441-.0597.2938-.0935.6393-.209.916-.0618.1491-.2103.3668-.3809.1973-.191-.1898-.257-.5676-.3125-.8281-.2944-1.4535-.5724-2.9115-.9023-4.3574-.1813-.779-.4272-1.5663-.7305-2.3399-.1225-.313-.297-.5328-.4922-.6816-.2388-.182-.51-.2596-.7675-.2695-.0608-.0003-.4824.0081-.8887.2753-.217.1427-.431.3582-.582.6875-.3584.7439-.6352 1.5872-.8711 2.6563-.1459.6557-.2279 1.1556-.2657 1.6191-.014.1694.0333.3434.125.4883.0922.1455.2293.2608.3867.3164.2413.0867.4809.0644.6778-.0566.1799-.111.3097-.301.3613-.541.107-.4968.202-1.0088.293-1.502.0456-.2486.313-1.5385.375-1.7012.028-.0905.0739-.2491.162-.3574.0838-.1028.1917-.1022.2696.0059.0877.1216.1256.2749.1621.418.0765.304.3007 1.5146.5703 2.7324.256 1.1827.4994 2.3682.8067 3.539.1411.5323.393 1.0008.58 1.3008.2437.3907.6322.6187 1.0626.627.3432.0105.6669-.1055.9433-.3243.269-.213.4945-.5249.6485-.918.3926-1.0015.6125-2.0977.8261-3.16.3598-1.8212.5395-2.7281.6211-3.125.0262-.1251.1762-.7535.2168-.8634.0334-.1236.0762-.2058.125-.2558.0638-.0653.1686-.0797.2363-.0137.1777.1728.3258.8109.4454 1.4102.112.5842.2403 1.1651.3593 1.748.199.9668.3964 1.9341.6075 2.8984.1847.8522.4237 1.4485.7675 1.9356.258.3644.5641.5767.8965.6445.3325.068.6962-.0074 1.0742-.2422.3192-.1983.6053-.5466.7793-.9629.2732-.6526.4326-1.4227.5782-2.1816.0583-.3051.1145-.6094.1738-.9004.0816-.394.116-.6466.0957-.9336-.0244-.3313-.3144-.6959-.6992-.7031-.4993-.0129-.7589.2422-.8457.705-.149.802-.2976 1.6034-.4512 2.4044-.0512.2594-.0205.5776-.211.787-.0292.0284-.1184.1086-.2363.088-.0745-.0131-.1732-.0775-.252-.248-.154-.4303-.5241-2.6424-1.0527-4.9552-.1812-.7787-.4274-1.5764-.7324-2.371-.2674-.6904-.6852-1.043-1.3398-1.043Zm-9.5488 8.4277c-.6472 0-1.1718.534-1.1718 1.1934 0 .6555.548 1.1956 1.1719 1.1953.5964-.0003 1.1718-.5359 1.1718-1.1953s-.5246-1.1934-1.1719-1.1934z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNeptuneIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
