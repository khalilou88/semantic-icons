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
  selector: 'svg[si-yunohost-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>YunoHost</title>
    <svg:path
      d="M2.5117 22.0865c-.2242-.1506-.5262-.4987-.6711-.7734-.2797-.5304-.826-1.1104-1.382-1.4674-.3836-.2463-.5943-.985-.361-1.266.0777-.0938.4072-.242.7322-.3293.325-.0874.6448-.2073.7106-.2665.0659-.0591.1257-.4864.133-.9495.0446-2.8328.067-2.9027.9338-2.9027 1.0283 0 1.724 1.2286 1.3857 2.4472-.24.8642-.1922 1.0501.2691 1.048.7042-.0034.7425-.0844.7742-1.6375.048-2.3435.561-3.0887 1.7394-2.5268.7473.3564.8574 1.3232.3463 3.0421-.1672.5622.1641 2.8917.5112 3.594.1959.3965-.0137.9526-.3787 1.0048-.1656.0237-.4377-.0916-.6627-.281-.21-.1767-.426-.3212-.4801-.3212s-.2541-.2248-.4446-.4996c-.3314-.4783-.71-.6405-.8742-.3746-.0425.0687-.332.1891-.6435.2675-.5448.1372-.5634.1572-.4943.5308.205 1.1082.2073 1.5506.0088 1.749-.2708.2709-.6624.241-1.152-.088m12.6533-1.7342c-.2704-.1568-.7981-.7447-1.032-1.1496-.0835-.1444-.1537-.5332-.1561-.864-.0065-.884.365-1.4412.5573-.8356.1826.5753.8588.833 1.1777.4488.257-.3098-.1734-1.0344-1.2391-2.086-.9585-.9456-1-1.01-1-1.5539 0-.844.2417-1.1948 1.1089-1.6093.7205-.3444.783-.3536 1.2917-.1904.6921.2221 1.5047 1.0045 1.4493 1.3956-.0346.244-.1144.2863-.5402.2863-.2748 0-.5698.0455-.6557.101-.2554.1653-.178.5428.1561.7618.3078.2016.3123.1995.3123-.1499 0-.3438.0325-.3615 1.0928-.596l1.0928-.2418.089-.9828c.15-1.6536.6282-1.9801 1.5719-1.0733.2886.2773.5333.5724.5437.6557a7 7 0 0 1 .0316.3388c.0104.1547.2004.1798 1.0896.1441 1.037-.0416 1.0916-.03 1.4663.3122.2674.2442.3993.4895.4214.7834.027.3618-.0323.4718-.3841.7126-.2289.1565-.9735.4625-1.6548.6798-.978.312-1.2387.4437-1.2387.6256 0 .1267.0639.7923.142 1.479.1607 1.4136.0583 1.8762-.4686 2.1162-.4644.2116-.5869.179-1.0248-.2729-.5125-.5287-.6706-1.0862-.5684-2.0032.0948-.8494.0392-.9135-.7377-.8518l-.5529.044.1812.5197c.1168.335.1572.7637.1136 1.2066-.0572.5805-.1317.742-.4807 1.0421-1.035.8902-1.629 1.1126-2.1554.8072m-5.0871-.1042c-.5996-.1036-1.4703-.7774-1.9948-1.5438-.3743-.5469-.4167-.6964-.408-1.4362.0115-.9621.3114-2.081.6852-2.5562.2967-.3772 1.1997-.83 1.6553-.83.277 0 .9169.2352 1.896.6967.8448.3981.9919.6457 1.1778 1.9826l.1372.9864-.4558.9714c-.2508.5343-.5818 1.0897-.7357 1.2343-.3627.3408-1.3719.5959-1.9572.4948m.3147-2.3618c.449-.1708.6744-.9103.4034-1.3239-.1108-.1691-.2739-.3075-.3624-.3075-.4979 0-1.0237 1.1802-.6997 1.5707.174.2095.249.2164.6587.0607m-7.0488-6.2838c-.2383-.1579-.5613-.555-.7366-.9055-.2843-.5685-.3092-.7458-.2785-1.9842l.0337-1.3598-.7518-.7222c-.4136-.3972-.752-.7446-.752-.772 0-.0276-.1123-.576-.2497-1.219-.1375-.6427-.25-1.4663-.25-1.8302 0-.57.0437-.6903.3162-.8688.494-.3236 1.0344-.1065 1.5151.6086.3193.475.4119.7671.4827 1.5232.0924.986.2566 1.265.6677 1.1345.246-.078.9582-.817 1.2117-1.2572.1284-.223.1595-.2186.7082.103.4144.2429.6143.4587.7192.7764.1297.3931.1114.4978-.1727.9825-.1749.2984-.5308.7294-.791.9579s-.4797.5312-.4877.6728c-.0597 1.0595-.323 4.1595-.364 4.2853-.0753.2315-.3445.1905-.8207-.1251m4.5654-.8935c-.5802-.2527-1.3777-1.2354-1.5563-1.9175-.189-.7223-.1775-3.703.0174-4.4771.076-.3018.2028-.5488.2817-.5488.2389 0 1.0594.6106 1.2202.9079.0887.1642.1607.8888.175 1.7638.0211 1.2798.0553 1.5023.2473 1.6098.1695.0949.263.07.39-.104.092-.1257.168-.3162.1689-.4233.001-.1071.1414-.6324.3122-1.1674.1709-.535.3163-1.2375.3231-1.5612.0263-1.2432.3001-1.5217.9548-.9708.7652.6439.8054 2.0963.1369 4.941-.2668 1.1353-.5334 1.5242-1.3165 1.9207-.4785.2424-.8434.2496-1.3547.0268zm4.2926-.2652c-.6665-.347-.7896-.599-.621-1.2704.3738-1.4873.4467-3.2548.1966-4.7687-.0803-.4865-.057-.573.2093-.7778.1648-.1267.419-.2316.5648-.2332.3539-.0037 1.171.898 1.5254 1.6833.5183 1.1484.7065 1.4764.8176 1.425.0607-.0282.1249-.8949.1426-1.926.0286-1.6533.065-1.9375.3083-2.4042.1517-.2911.3537-.5293.4488-.5293s.3278.2388.517.5308c.1893.2919.3956.5676.4585.6127.063.045.0931.6913.067 1.4362-.026.745-.0392 1.8321-.0293 2.416.0595 3.5063.0399 3.7062-.38 3.8658-.398.1513-1.0262-.1558-1.7828-.8713-.3615-.3419-.7065-.6216-.7668-.6216-.0602 0-.2104.3232-.3337.7182-.3601 1.1536-.4288 1.1902-1.3423.7145m6.7039-1.0775c-1.1639-.6307-1.5592-1.2076-1.653-2.4122-.0745-.9562.3326-2.655.7755-3.2355.1735-.2275.3155-.476.3155-.552s.249-.3096.5533-.519c.71-.4886 1.3684-.5098 2.0234-.0654.9194.624 1.0533 1.1061 1.0915 3.931.0148 1.092-.012 1.2344-.3365 1.7864-.1939.3298-.4772.6472-.6295.705-.1524.058-.3458.1882-.4298.2894-.184.2218-1.344.2709-1.7104.0723m1.2382-3.0193c.4147-.8299.3596-1.362-.1486-1.4349-.2257-.0323-.3239.0643-.5126.5046-.3523.822-.4361 1.3272-.256 1.5442.2678.3227.5403.1403.9172-.614"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiYunohostIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
