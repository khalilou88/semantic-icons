import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-avajs-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>avajs</title>
      <path
        d="M5.4554,5.7277a1.5818,1.5818,0,0,1,.619.6637q.2724.6249.6042,1.36c.22.4911.4434.9881.6637,1.4911s.4345.994.6369,1.47.3869.9137.5476,1.31.2887.7322.3839,1.009a2.2443,2.2443,0,0,1,.1429.5476,1.6453,1.6453,0,0,1-.06.4345.9512.9512,0,0,1-.2142.39,1.0777,1.0777,0,0,1-.4346.28,2.1368,2.1368,0,0,1-.7232.1042,1.9678,1.9678,0,0,1-.7619-.125,1.51,1.51,0,0,1-.4881-.3184,2.1617,2.1617,0,0,1-.3244-.4108q-.1295-.2142-.2678-.4107a1.3284,1.3284,0,0,0-.3125-.3184.8065.8065,0,0,0-.4762-.125H4.1577a1.1574,1.1574,0,0,0-.58.125,1.0946,1.0946,0,0,0-.3512.3184,4.1127,4.1127,0,0,0-.253.4107,2.0146,2.0146,0,0,1-.3006.4108,1.3631,1.3631,0,0,1-.4762.3184,2.0527,2.0527,0,0,1-.7887.125,1.5,1.5,0,0,1-1.0684-.3244A1.0307,1.0307,0,0,1,0,13.6949a2.266,2.266,0,0,1,.1369-.5922c.0923-.2828.2143-.6191.372-1.009.1637-.3928.3423-.8244.5417-1.3035.1994-.4762.4107-.97.6369-1.4762.2262-.5089.4524-1.0149.6756-1.5238q.3393-.7633.6518-1.4643A1.3715,1.3715,0,0,1,3.619,5.689a1.9287,1.9287,0,0,1,.9435-.2351,1.673,1.673,0,0,1,.8929.2738Zm10.5267.0446a1.0162,1.0162,0,0,1,.3393.7887,2.5458,2.5458,0,0,1-.1369.7173c-.0922.2946-.2083.628-.3512,1.003-.1428.372-.3095.7767-.494,1.2113-.1875.4345-.375.875-.5655,1.3273-.2589.6161-.4851,1.17-.67,1.6608a9.3222,9.3222,0,0,1-.5715,1.25,2.8332,2.8332,0,0,1-.6369.7946,1.3026,1.3026,0,0,1-.8512.28,1.5132,1.5132,0,0,1-.866-.2292,2.13,2.13,0,0,1-.625-.6905,7.1624,7.1624,0,0,1-.5476-1.1637c-.1786-.4672-.387-1.0238-.631-1.6666q-.2722-.7278-.5595-1.4256c-.1905-.4643-.3631-.8929-.5209-1.2828-.1547-.39-.2827-.741-.3839-1.0476a2.5581,2.5581,0,0,1-.1488-.7232.9457.9457,0,0,1,.4048-.86A1.82,1.82,0,0,1,9.17,5.4569a2.1129,2.1129,0,0,1,.8512.1369,1.7871,1.7871,0,0,1,.5268.3571,1.8718,1.8718,0,0,1,.3125.4554,5.887,5.887,0,0,1,.2917.6577c.0922.2381.1815.4792.2738.7232s.1756.4673.253.67a3.1521,3.1521,0,0,0,.2291.4941c.0744.125.14.1875.2024.1875q.1028,0,.2143-.1875a3.6705,3.6705,0,0,0,.2292-.4881c.0774-.1994.1577-.42.241-.6577s.17-.4762.259-.7084a6.912,6.912,0,0,1,.2857-.6428,1.7257,1.7257,0,0,1,.3065-.4494,2.2052,2.2052,0,0,1,.28-.2411A1.4583,1.4583,0,0,1,14.2262,5.6a1.7331,1.7331,0,0,1,.372-.0982,3.4777,3.4777,0,0,1,.5089-.0327,1.2675,1.2675,0,0,1,.875.3035Zm4.42-.0446a1.5811,1.5811,0,0,1,.619.6637q.2724.6249.6042,1.36c.22.4911.4435.9881.6637,1.4911s.4345.994.6369,1.47.3869.9137.5476,1.31.2887.7322.3839,1.009A2.2443,2.2443,0,0,1,24,13.5789a1.6452,1.6452,0,0,1-.0595.4345.9515.9515,0,0,1-.2143.39,1.078,1.078,0,0,1-.4345.28,2.1372,2.1372,0,0,1-.7232.1042,1.9687,1.9687,0,0,1-.762-.125,1.5081,1.5081,0,0,1-.488-.3184,2.1623,2.1623,0,0,1-.3245-.4108q-.1295-.2142-.2678-.4107a1.3266,1.3266,0,0,0-.3125-.3184.8065.8065,0,0,0-.4762-.125h-.8333a1.1576,1.1576,0,0,0-.58.125,1.0956,1.0956,0,0,0-.3512.3184,4.1313,4.1313,0,0,0-.253.4107,2.0071,2.0071,0,0,1-.3006.4108,1.3636,1.3636,0,0,1-.4761.3184,2.0534,2.0534,0,0,1-.7887.125,1.5,1.5,0,0,1-1.0685-.3244,1.0307,1.0307,0,0,1-.3393-.7679,2.27,2.27,0,0,1,.1369-.5922c.0923-.2828.2143-.6191.3721-1.009.1547-.39.3333-.8244.5327-1.3s.4107-.97.6369-1.4762c.2262-.509.4524-1.0149.6756-1.5238q.3393-.7635.6518-1.4643a1.371,1.371,0,0,1,.6041-.6369A1.9288,1.9288,0,0,1,19.5,5.4568a1.651,1.651,0,0,1,.9018.2709ZM4.5327,18.5461a.1926.1926,0,0,0,.1727-.1041c0-.003.2827-.5238.5625-1.14.14-.3095.2827-.64.39-.9464.0536-.1548.0983-.3006.131-.4346a1.65,1.65,0,0,0,.0536-.375,1.5623,1.5623,0,0,0-.4375-1.1131,1.2219,1.2219,0,0,0-1.75,0,1.5644,1.5644,0,0,0-.4375,1.1131,1.6044,1.6044,0,0,0,.0535.375,6.149,6.149,0,0,0,.2649.7887c.3363.8363.8185,1.7292.8185,1.7351A.2151.2151,0,0,0,4.5327,18.5461Zm14.9465,0a.1926.1926,0,0,0,.1726-.1041c0-.003.2827-.5238.5625-1.14.14-.3095.2827-.64.39-.9464.0535-.1548.0982-.3006.1309-.4346a1.644,1.644,0,0,0,.0536-.375,1.5623,1.5623,0,0,0-.4375-1.1131,1.2219,1.2219,0,0,0-1.75,0,1.5648,1.5648,0,0,0-.4375,1.1131,1.6,1.6,0,0,0,.0536.375,6.1319,6.1319,0,0,0,.2648.7887c.3363.8363.8185,1.7292.8185,1.7351a.2153.2153,0,0,0,.1786.1012Z"
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
export class SvgAvajsIcon {
  readonly class = input<string>('');
}
