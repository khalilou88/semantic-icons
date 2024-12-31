import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vegas-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>VEGAS</title>
      <path
        d="M12.2305 9.1035c-.6088 0-1.0881.0929-1.457.2774-.369.166-.627.4602-.793.8476-.166.4243-.2403.9974-.2403 1.7168 0 1.0168.1088 2.0758.7754 2.5996.2583.203.5894.2969 1.0137.2969.2952 0 .5903-.0004.83-.0742.2214-.0738.4248-.1845.5723-.332.0554-.037.13-.1292.1485-.166v.4784h.959v-3.1914h-1.0899v1.9922c-.1555.1037-.3215.1622-.5332.2227-.1291.0369-.2773.0547-.4433.0547-.2214 0-.4072-.0554-.5547-.166-.1292-.1107-.2396-.2945-.295-.5528-.1274-.595-.1062-1.58-.037-2.0293.0553-.2398.1108-.4255.203-.5547.2066-.3305.6712-.3496.9415-.3496h.5527c.1845 0 .3507.0176.5352.0176.1844 0 .3702.0011.5546.0195l.0723-.8867c-.37-.111-.5068-.1517-1.0508-.2012-.2206-.0242-.4428-.013-.664-.0195Zm9.7402 0c-.5842 0-1.1955.0965-1.5488.332-.2734.1823-.4805.4674-.4805 1.2364 0 .6867.1957 1.2693 1.1621 1.6054l1.125.3868c.1291.0369.2407.092.3145.1289.0738.0369.129.1117.166.1855.0759.1518.0788.533-.0195.664-.0554.0923-.1287.1476-.2579.166-.3046.0529-.6144.0322-.9218.0372-.166 0-.35-.0195-.5899-.0195-.2398 0-.5165-.0176-.83-.0176l-.0196.9023c.2398.0554.7754.13 1.1074.1485.332.0184.6094.037.7754.037.2767 0 .7008-.0188.959-.0741.2583-.0554.461-.1472.627-.2578.166-.1292.2758-.2952.3496-.4981.0738-.2214.1113-.4794.1113-.793 0-.4243-.0918-.7573-.2578-1.0156-.166-.2583-.4792-.4598-.9219-.6074l-1.0703-.3516c-.2214-.0738-.3687-.148-.461-.2402-.1538-.123-.1543-.4588-.0937-.7012.0185-.0553.0736-.1096.129-.1465.0737-.0184.149-.0566.2597-.0566.1107-.0185.2391-.0176.3867-.0176h.9219c.3136 0 .5902.0176.83.0176l.0196-.8477c-.5672-.1215-1.1484-.203-1.7715-.203Zm-15.293.0742c-.642 0-1.1797.4099-1.1797 1.125v3.3399c0 .332.1107.6076.332.8105.203.203.4972.3145.8477.3145h.9043c.2767 0 .7567-.0196.9043-.0196.1292-.0184.5152-.0362.7735-.0546v-.8848H7.121c-.1291 0-.2211-.0375-.295-.1113-.0553-.0738-.0937-.1854-.0937-.3145V12.295h2.2324v-.8672H6.7324v-.8672c0-.1475.02-.2387.0938-.3125.0553-.0737.1658-.1113.2949-.1113h2.1387V9.252c-.2583-.0185-.5706-.0382-.7735-.0567-.6023-.0273-1.2058-.0176-1.8086-.0176ZM0 9.2148l1.5313 5.2012c.0394.197.2115.332.4238.332H3.08c.2216 0 .3886-.146.4258-.332l1.5117-5.2012h-1.254l-1.1445 4.5196s-.0186.0176-.037.0176h-.1466c-.0184 0-.037.0008-.037-.0176l-1.125-4.5196zm16.4922 0c-.1191 0-.3802.0704-.4238.332l-1.6055 5.2208h1.2539l.4062-1.457h1.9004l.4063 1.457h1.2539L18.078 9.5469c-.0184-.0923-.0727-.1665-.1465-.2403a.4548.4548 0 0 0-.2773-.0918zm.6445.9766c.0185 0 .0371.0187.0371.0371l.5918 2.1406h-1.4023l.5898-2.1406c.0185-.0184.0187-.037.028-.037z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgVegasIcon {
  readonly class = input<string>('');
}
