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
  selector: 'svg[si-jitsi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Jitsi</svg:title>
    <svg:path
      d="M19.6711 8.6222a2.31 2.31 0 0 0-.8952-.9978c-.4642-.2943-1.044-.3567-1.4482-.3567q-.2042 0-.4075.0211h-.01a3 3 0 0 1 .0335-.1862c.0202-.1028.0432-.2194.0562-.3408.0538-.5208-.1315-1.2216-.4728-1.7847-.0542-.0897-.0523-.1205-.0523-.1205a.4.4 0 0 1 .0595-.0696l.0312-.0326c.8069-.864 1.0507-1.814.7238-2.8291C16.6697 0 16.5036 0 16.3821 0a.192.192 0 0 0-.144.0629.224.224 0 0 0-.0484.1771c.0628.6384-.0812 1.5523-.1772 1.9003-.1176.4378-.528 1.0906-1.824 1.7112a3 3 0 0 1-.2784.1023c-.4228.1416-1.1294.3782-1.522.9187-.2962.347-.3678.6945-.496 1.322-.1141.5577-.2063 1.2369-.0258 2.0475a6 6 0 0 0 .0514.2074c.011.0428.0206.0797.0278.1118l.0154-.0033-.016.0043c.012.048.0045.0596-.0128.0716a1.3 1.3 0 0 1-.192.059c-.192.0307-.384.0648-.5674.1008-.5837.1003-2.3482.4046-3.1608 1.6982-.5016.7978-.5726 1.8398-.2122 3.1008.374 1.248 1.116 2.1058 1.6239 2.2805l.0081.0028q.0547.0246.1056.0418c0 .035-.0033.0778-.0076.1258a2 2 0 0 0-.0101.069c-.0557.4071-.2477.8459-.4435.8574-.1032-.0202-.5122-.252-.8016-.4421a31 31 0 0 1-.264-.1738c-.8079-.5347-1.2533-.8289-1.934-.9048a.7.7 0 0 0-.07-.0038c-.72 0-2.016 1.2125-2.0434 3.6288-.014 1.2106.1128 2.317.3778 3.289.189.697.3907 1.094.4492 1.2L5.0234 24l.1066-.48c.5616-2.544 1.2547-3.157 2.4081-3.8904.8453.792 1.9556 1.2096 3.2199 1.2096 1.0656 0 2.1806-.3096 3.1387-.8722.9413-.552 1.668-1.296 2.112-2.1556.0739.048.1632.1104.2222.1516.2112.1478.2559.179.3312.179h.0068c.0825-.0033.8611-.2644 1.6584-1.2384.4632-.5658.8453-1.2657 1.1352-2.0812.359-1.008.576-2.1984.65-3.5372.0815-1.124-.0327-2.0193-.3395-2.6606zm-2.9866-6.4708c.067.27.0756.551.0255.8246-.0749.5318-.3005 1.008-.6855 1.4424a8.21 8.21 0 0 0 .66-2.267m-.5568 3.301c.1173.1773.2068.3715.2655.576.065.268.0534.549-.0336.8106-.1378.3279-.3226.4935-.5496.4935h-.0303a.6.6 0 0 1-.2256-.0826c-.2918-.1709-.4497-.624-.336-.9561a.5.5 0 0 0 .0135-.0303c.0187-.048.072-.1401.2198-.2827.2112-.1867.5199-.4224.6754-.528zm-3.3792-.0903.003-.0053V5.352c.0623-.1536.492-.4022.777-.5669a6 6 0 0 1 .1067-.0619 4.1 4.1 0 0 1 .384-.1771c.469-.1997 1.2-.5107 1.8018-1.09-.1746.6124-.5952 1.644-1.2864 2.2684-.1536.1387-.4636.2616-.8232.4037-.3873.1526-.8529.336-1.3046.613.035-.3534.144-.9697.3394-1.3791zm-.3 1.9958c.2324-.192.6576-.4521 2.051-.912a6 6 0 0 1 .0313.1541c.0086.0418.0177.0893.0283.1411.0912.4503.192.9561 1.1294 1.237-.0873.192-.2668.5165-.3292.5783l-.0207.0178-.0144.0236c-.1824.2928-1.1683.9316-1.6099.9316a.33.33 0 0 1-.0566-.0042c-.266-.0514-.8765-.5938-1.056-.9946-.3471-.7868-.276-1.0704-.1556-1.1707zM8.9767 14.579c-.5107-.7598-.8976-2.0875-.6442-3.155v-.0048c.1224-.5808.528-.9226.6956-1.0426l.024-.0178c.2486-.2169.7574-.4458 1.4332-.646.096-.025.1488-.036.1512-.036.1243-.026.2602-.0572.3922-.0874a6.8 6.8 0 0 1 .7584-.1482 2.2 2.2 0 0 0 .189-.0308 1.45 1.45 0 0 1 .2526-.0326.324.324 0 0 1 .192.0508c.2506.2976.864.8852 1.2662.9198h.0255c.4579-.0246 1.1755-.4714 2.1336-1.3292.1627-.144.3139-.2698.4622-.3796l.0183-.014a3.52 3.52 0 0 1 .8553-.4776c-.1003.3284-.18.8894.144 1.68.1685.409.492 1.3306.7603 2.233.4618 1.5542.3975 1.8278.3884 1.8532a.53.53 0 0 1-.062.1498.37.37 0 0 1-.1032-.0364c-.2328-.1076-.494-.2996-.7992-.5252-.5664-.4152-1.2705-.9316-2.3011-1.3344-.757-.2952-1.5096-.4454-2.2358-.4454a4.67 4.67 0 0 0-.8967.0854c-1.6233.3202-2.4792 1.0358-2.9385 1.4208l-.0034.0029a.188.188 0 0 0-.059.2088.185.185 0 0 0 .1766.1215c.0418 0 .0826-.0116.2174-.0504a9.04 9.04 0 0 1 1.488-.3101q.271-.0316.5439-.0322c.7858 0 1.5086.24 2.2738.7599.1752.1464.2822.2433.347.3072l-.0662.0172-.4642.131c-1.1491.325-2.8863.816-3.7085.816a1.4 1.4 0 0 1-.1886-.011c-.2132-.0312-.4733-.254-.7148-.61zm-3.3893 5.8296a4.09 4.09 0 0 0-.7013 1.415c-.1545-.7406-.336-1.9588-.2328-2.9072.215-1.9652 1.1885-2.6232 1.333-2.6578h.0091c.0082 0 .0178 0 .037.0206.0777.0844.2457.4411.1233 1.9162-.0288.3038.0442.561.218.7646.1177.1346.2658.2392.432.3052a4.96 4.96 0 0 0-1.2202 1.144zM7.242 18.48a.43.43 0 0 1-.1608.0374.129.129 0 0 1-.1056-.0403c-.0312-.0327-.1018-.144-.0792-.4728.0158-.1618.0384-.3231.0595-.48a7 7 0 0 0 .0845-.8933c.5673.3715 1.1961.7651 1.6032.9466-.266.2356-.8194.6595-1.4016.9033zm7.404-.0528a5.35 5.35 0 0 1-3.47 1.632 6.3 6.3 0 0 1-.4627.0173c-1.7361 0-2.6184-.7368-3.024-1.1472 1.9618-.8463 2.3597-2.0563 2.5335-2.5849a2 2 0 0 1 .048-.1344c.0749-.0374.313-.144 1.0473-.419.576-.2074 1.2668-.4396 1.8759-.645.5073-.171.9456-.3193 1.1851-.4072l.0197-.0062a1 1 0 0 1 .096-.023l.0134.0173c.2232.2909.5914.468.5947.4704.2768.1236.5728.1983.875.2208-.0071 1.0488-.4862 2.1365-1.329 3.0087zm1.5216-3.5908c-.7263 0-.9811-.2338-1.2187-.5166-1.1794-1.4059-2.4831-1.6363-2.9895-1.6704a7.3 7.3 0 0 0-.4733-.0158c-.1277 0-.2525.0034-.3744.011a5.7 5.7 0 0 1 1.824-.3034c1.3008 0 2.5532.4608 3.721 1.369.4762.3701.8266.6326 1.1294.8434a28 28 0 0 1-.5976.168l-.096.0264a5.76 5.76 0 0 1-.9235.0883zm.4526 2.6586c-.0763-.0672-.192-.1742-.3115-.2832a4.7 4.7 0 0 0 .2477-.864c.0566-.3115.0921-.72.1085-.9364a8.6 8.6 0 0 0 1.0224-.2175c.4046-.1161.717-.2481.9398-.3984-.6946 1.7343-1.7006 2.496-2.007 2.6985zm2.4034-3.9662c-.1032-.8548-.4493-1.9118-.5847-2.3227-.0144-.048-.0264-.0825-.0345-.108-.0101-.0327-.0413-.1195-.1056-.2971-.1666-.4652-.5141-1.4318-.576-1.718-.0888-.4204.1118-.9988.24-1.0492a.35.35 0 0 1 .1238-.0226c.2362 0 .528.2232.7589.5832.2794.432.445 1.0046.4666 1.6076.048 1.3156-.074 2.4148-.288 3.3268"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJitsiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
