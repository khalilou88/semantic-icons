import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hyprland-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Hyprland</title>
      <path
        d="M13.0998.001c.071.0753.1162.1116.1476.1576.5693.8424 1.13 1.691 1.7078 2.5277.3326.4816.6866.9486 1.0416 1.4141.3433.451.7058.8869 1.0494 1.3378.3975.5215.8003 1.0402 1.1696 1.5813.473.6933.9496 1.388 1.3588 2.1188.348.6213.626 1.285.8919 1.9477.1882.4691.3144.9646.4491 1.4537.0624.2267.0799.4659.1163.6994.0449.2858.1211.5717.1258.8583.0125.7465.0773 1.4954-.0528 2.2386-.1433.8195-.3832 1.6041-.74 2.3609-.3607.7646-.7978 1.4708-1.3328 2.1241-.4848.5921-1.054 1.0812-1.6697 1.5296-.452.329-.93.6085-1.4387.8306-.4577.1996-.9293.3597-1.4148.4951-1.0961.3052-2.2076.3722-3.3269.2934-.6747-.0474-1.3574-.1301-2-.3729-.5284-.1996-1.0606-.3967-1.5657-.6462-.3988-.1968-.781-.4435-1.131-.7183-.4591-.3604-.9097-.7418-1.3072-1.167-.356-.3808-.6644-.8153-.941-1.2587-.2916-.468-.5486-.9629-.7693-1.4687-.2385-.546-.3925-1.121-.518-1.71-.1953-.9164-.1322-1.8336-.0923-2.748.0229-.525.1615-1.0504.2945-1.5634.14-.541.3094-1.0786.5147-1.5983.2057-.5205.4445-1.0324.718-1.5204.3432-.6124.7218-1.2066 1.1121-1.7905.3543-.5304.7372-1.0423 1.1218-1.5513.3098-.41.6477-.7988.9614-1.206.3172-.4116.6224-.8326.9293-1.2522.3247-.4441.652-.8865.9656-1.3385.3979-.5728.781-1.156 1.1753-1.7314.0563-.0823.1383-.1475.2082-.2206.0139.0078.0278.0157.042.0235.003.0631.0082.1262.0082.1893.0004.9386.0053 1.8771-.006 2.8157-.0019.1376-.0578.2905-.1327.4085-.303.4795-.6127.9553-.9403 1.4184-.3105.4388-.6459.8601-.9703 1.289-.2673.3532-.5336.7068-.8027 1.0587-.1868.2441-.3829.4812-.5654.7286-.2552.3465-.5115.6933-.7496 1.0515-.2873.432-.57.8684-.828 1.3179-.1847.3215-.3302.6662-.4845 1.0041-.0856.1875-.1644.3793-.2267.5754-.1105.3479-.199.7026-.3094 1.0505-.3109.9774-.245 1.983-.1754 2.9764.0353.5044.2178 1.0035.3707 1.4933.2142.6858.5817 1.294.9963 1.88.283.4003.6042.762.9675 1.0822.299.263.6238.5051.9649.71.3882.2332.7924.4553 1.2163.6085.4523.1637.9303.2849 1.4073.3451.5678.0717 1.1464.0563 1.72.0834.5325.025 1.049-.0816 1.5659-.1832.6562-.129 1.2558-.412 1.8386-.7222.6969-.3707 1.2826-.8958 1.7955-1.4875.5244-.605.9646-1.285 1.2448-2.0319.2955-.7878.5418-1.603.5044-2.4688-.0203-.468.0053-.939-.0378-1.4041-.0317-.3426-.129-.6813-.2196-1.016-.1062-.3932-.215-.7878-.3622-1.1667-.1465-.3775-.3336-.7396-.5175-1.1014-.163-.3205-.3323-.6388-.5226-.9432a16.5743 16.5743 0 0 0-.7372-1.0848c-.3939-.5311-.8106-1.0451-1.2088-1.5727-.4662-.6177-.9314-1.2362-1.382-1.8654-.3889-.5425-.7596-1.0982-1.1303-1.6536-.0595-.0891-.107-.2064-.108-.3108-.0082-1.0156-.0053-2.0312-.0046-3.0467 0-.0339.0086-.0681.0206-.1583z"
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
export class SvgHyprlandIcon {
  readonly class = input<string>('');
}
