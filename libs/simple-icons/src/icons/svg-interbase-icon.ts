import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-interbase-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Interbase</title>
      <path
        d="M9.6895 8.8296c-.0001.1303-.1149.2461-.2463.2487-.1312.0025-.2461-.11-.2486-.243-.0025-.1384.1004-.2475.2369-.2513.1402-.0039.258.1083.258.2456zm14.294 3.6783c-.0252.409-.0595.8184-.1126 1.2246-.0742.5675-.2022 1.1249-.3642 1.6746a11.8456 11.8456 0 0 1-.892 2.1936 11.9768 11.9768 0 0 1-2.4107 3.1587c-.9165.8593-1.9422 1.5593-3.0778 2.0967-.9867.467-2.0181.7934-3.095.9755-.511.0864-1.025.1418-1.5428.1622-.0501.002-.8557.0047-.8686.0043a12.0444 12.0444 0 0 1-1.4517-.1334 11.7612 11.7612 0 0 1-1.7943-.4175 11.9283 11.9283 0 0 1-2.2824-.9961 11.9821 11.9821 0 0 1-2.9132-2.3115c-.891-.9661-1.6055-2.0493-2.1417-3.2497-.5047-1.13-.824-2.3107-.9616-3.54a11.9165 11.9165 0 0 1-.0733-1.5264c.0072-.4321.0355-.8625.0876-1.2911.0655-.5373.1675-1.068.3055-1.5918.2367-.899.574-1.7584 1.011-2.5784.5443-1.0208 1.2235-1.943 2.0329-2.7688a11.8993 11.8993 0 0 1 1.1528-1.0307C5.633 1.745 6.7778 1.116 8.027.6766 8.5082.5073 8.9971.3635 9.4976.266c.381-.0742.7651-.1357 1.1504-.1821.3426-.0413.6883-.0613 1.0333-.0771.2358-.0108.4727-.001.709.004.4673.0101.9318.0555 1.3937.1244.5023.075.9982.1817 1.4873.32.8146.2305 1.596.5437 2.343.9409a11.9932 11.9932 0 0 1 3.016 2.2728 11.997 11.997 0 0 1 1.362 1.6917A11.9248 11.9248 0 0 1 23.4617 8.45c.2238.722.3769 1.4587.4604 2.2096.0684.6143.0996 1.231.0614 1.8483zM13.2143 8.6622c.0514.0869.1287.1346.2656.136.0284-.0127.089-.0306.1397-.0635.819-.5306 1.653-1.0357 2.5141-1.495.0686-.0366.1184-.0878.1499-.1589.1917-.4333.3843-.8663.5762-1.2996.0503-.1135.0477-.223-.041-.3166-.0885-.0933-.1993-.1082-.3132-.058-.1574.0692-.3165.1374-.4652.223-.3685.2121-.6932.484-1.0055.7705-.6483.595-1.225 1.2557-1.7792 1.9372a.4396.4396 0 0 0-.0413.057c-.0512.089-.0522.1799-.0001.2679zm8.1922-2.6436c-.0455-.01-.0931-.0125-.14-.015-.358-.0193-.7122.0157-1.064.0803-.6816.125-1.3331.3475-1.972.61-1.0279.4224-2.006.943-2.962 1.5069-1.0809.6376-2.1288 1.326-3.1393 2.0699-.2069.1522-.4372.082-.4876-.157-.0201-.0954-.0579-.187-.089-.28-.3483-1.0427-1.3356-1.6851-2.3812-1.6402-.3511.015-.6895.0997-1.0177.2225-.0924.0346-.1807.0392-.2755.0176-.1641-.0375-.3294-.0697-.4942-.1044l-4.449-.9366c-.2683-.0565-.5365-.1135-.8052-.1676-.0362-.0072-.0825-.0407-.116.0207.0332.053.0934.0526.1426.0672 1.8547.5505 3.7099 1.0995 5.5647 1.6495.0749.0222.1512.045.2203.0803.5374.2748.8673.7084.978 1.3029.0213.1147.0259.2336.0273.3507.0061.4937-.0127.9887.016 1.481.0558.9608.45 1.775 1.1374 2.4462.572.5585 1.1566 1.1044 1.7196 1.6717.7684.774 1.1923 1.7165 1.3017 2.8.0114.1128.0516.198.1314.2772.6285.6242 1.2543 1.2512 1.881 1.8773.0222.0222.0437.0453.0681.0648.0845.0671.1786.0796.2758.0347.101-.0467.1555-.1285.1584-.2413.0007-.0234-.0034-.0469-.006-.0702-.0738-.6595-.2042-1.3076-.3858-1.946-.2617-.92-.7002-1.744-1.3473-2.4494-.3018-.329-.628-.6354-.9433-.952-.0415-.0416-.0853-.081-.125-.1243-.1147-.1244-.1133-.265.0022-.3871.0269-.0285.0553-.0556.083-.0833l8.551-8.5444c.0304-.0304.0624-.0598.0899-.0928.1363-.164.0592-.3938-.1483-.4398z"
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
export class SvgInterbaseIcon {
  readonly class = input<string>('');
}
