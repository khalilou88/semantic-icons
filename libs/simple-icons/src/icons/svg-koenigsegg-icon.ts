import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-koenigsegg-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Koenigsegg</title>
      <path
        d="M16.6396 2.2779A27.1802 27.1802 0 0 0 11.997 0a27.1795 27.1795 0 0 0-4.6366 2.2779C4.8482 3.8075 3.357 5.2707 3.357 5.2707a32.0542 32.0542 0 0 0 1.0293 7.2991C5.214 15.7228 7.3082 20.6134 11.997 24c4.6887-3.3866 6.7837-8.2771 7.6105-11.4302a32.058 32.058 0 0 0 1.0354-7.2991s-1.4911-1.4632-4.0033-2.9928zm2.7246 10.2285a21.9594 21.9594 0 0 1-2.33 5.5616 19.0142 19.0142 0 0 1-5.0372 5.6214 18.9938 18.9938 0 0 1-5.0372-5.6214 21.9617 21.9617 0 0 1-2.3292-5.5616 32.5174 32.5174 0 0 1-1.0271-7.1299 24.9492 24.9492 0 0 1 3.883-2.8848A27.3813 27.3813 0 0 1 11.997.2653a27.3813 27.3813 0 0 1 4.5104 2.225 24.9477 24.9477 0 0 1 3.8823 2.8862 32.6127 32.6127 0 0 1-1.0255 7.1299zm-2.9226-6.3636c-2.1796-.8207-3.682-1.2394-4.4469-1.2394-.764 0-2.2658.424-4.4461 1.2394-1.2546.4731-3.0579 1.241-3.0579 1.241a38.8137 38.8137 0 0 0 .8934 4.9246c.7497 2.8567 2.5068 7.1873 6.6106 10.4053 4.1068-3.2173 5.8617-7.5478 6.6107-10.4053a38.822 38.822 0 0 0 .894-4.9254s-1.8032-.7655-3.0578-1.2394zm1.841 6.081c-.7602 2.8983-2.4683 6.9733-6.2864 10.0621-3.8241-3.0888-5.523-7.1646-6.2864-10.0622a37.773 37.773 0 0 1-.8495-4.6313 91.5984 91.5984 0 0 1 2.8122-1.136c2.6678-1.0058 3.8242-1.219 4.3283-1.219.504 0 1.6611.2116 4.3275 1.2183a93.1855 93.1855 0 0 1 2.8129 1.136 37.7783 37.7783 0 0 1-.86 4.6312h.0014zm-3.32 6.2425c.2192-.3136.4247-.6295.619-.9455l-1.4163.5646zm1.3256-2.1985a19.7708 19.7708 0 0 0 .6447-1.3944l-2.021.8313zm1.0157-2.3467c.1716-.4776.3175-.9363.4422-1.3724l-2.2348.7633 1.7926.6084zm.6923-2.3489c.1119-.47.2116-.9401.2978-1.3928l-2.4079.7436zM16.261 8.5318l2.2166.6205c.081-.489.1414-.9326.1913-1.2939l-2.408.6726Zm-1.2825-2.1124c-1.8706-.6476-2.6626-.758-2.9823-.758-.3204 0-1.1117.1104-2.983.758l2.983.9168zm-2.9823 12.8677-1.6158.8797a17.133 17.133 0 0 0 1.6158 1.5614 17.1347 17.1347 0 0 0 1.6158-1.5614l-1.6158-.8805zm-3.8854-8.3686 3.8824 1.1918 3.8846-1.1926-3.8846-1.1918-3.8831 1.1926zm.3711 2.392 3.5113 1.1918 3.5113-1.1918-3.5113-1.1926zm-.749-4.781 4.2603 1.1911 4.2617-1.191-4.2617-1.1919-4.261 1.1918Zm2.8085-5.1331-.2441.2418a1.0959 1.0959 0 0 0 1.5281.0197v.6318h.35v-.6379a1.0959 1.0959 0 0 0 1.528-.0196l-.253-.2358a.7527.7527 0 0 1-1.2841-.5298.7482.7482 0 0 1 .464-.6923.7543.7543 0 0 1 .82.1625l.2434-.2426a1.1011 1.1011 0 0 0-1.5282-.0196v-.631h-.3431v.631a1.1011 1.1011 0 0 0-1.5274.0196l.2434.2419a.7527.7527 0 0 1 1.2832.5305.7467.7467 0 0 1-.464.6923.7543.7543 0 0 1-.8192-.1625ZM8.4026 17.5171c.1927.3159.399.6318.619.9447l.7912-.3764zm-1.3438-2.6437c.1905.4557.4036.9228.6447 1.3944l1.3762-.5646Zm-.8177-2.3247c.1247.436.2706.8948.4421 1.3717l1.7927-.6084ZM5.6924 10.18c.0862.452.1852.922.297 1.3921l2.1162-.6492-2.4132-.7436zm-.3718-2.3255c.046.3613.1103.8042.189 1.294l2.218-.6176Zm3.7606 7.8456 2.9135 1.1903 2.9142-1.1903-2.9142-1.194Zm.7414 2.3867 2.1751 1.1926 2.1766-1.1926-2.1766-1.1926z"
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
export class SvgKoenigseggIcon {
  readonly class = input<string>('');
}
