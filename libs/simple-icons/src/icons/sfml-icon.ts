import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sfml-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>SFML</svg:title>
    <svg:path
      d="M12.187.3336C11.1144.312 9.8776.863 7.9587 2.241L3.162 5.7258C.252 7.8401-.839 8.5272.6917 13.3288l1.8322 5.639c1.1115 3.4208 1.4278 4.6711 6.4675 4.6991H14.92c3.5969 0 4.884.085 6.4678-4.6991l1.8319-5.639c1.1115-3.421 1.5903-4.618-2.4703-7.603L15.953 2.241h-.0004C14.4069 1.1178 13.4026.358 12.187.3336zm-.1624 1.8837c.0652.0015.1303.0048.1953.01 1.0784.0831 1.6791.6384 2.3401 1.1186l.0193.0193-2.128 8.1684h-.9257L9.404 3.3652c.0067-.006.0118-.0137.0192-.0193.7741-.5944 1.5245-1.0708 2.4109-1.125l.1905-.0036zM16.128 4.489h.0008l.0896.0643 3.8771 2.8158c.9207.632 1.6776 1.2778 1.9282 2.3144.2542 1.0514-.0947 1.7946-.3472 2.5716l-2.1082 6.506c-.3166 1.0708-.699 1.9873-1.6073 2.5459-.9213.5666-1.7352.4693-2.5523.4693H8.568c-1.117.03-2.1064-.0413-2.9187-.7329-.8236-.7012-.982-1.5052-1.2344-2.2823l-2.1151-6.506c-.3745-1.0545-.6065-2.021-.1993-3.0087.4123-1 1.1262-1.397 1.7872-1.8773l3.8767-2.8158.0835-.0579.8358 3.208-.2121.1543-2.771 2.0058c-.5628.409-.667.5092-.7135.5465.012.0598.0363.2851.2379.8486l2.1279 6.5446c.1988.6723.2754.8034.2958.855.0652.0084.2856.0495.8743.0322h6.8853c.6295 0 .8264-.0174.8997-.0193.0264-.0569.1413-.252.3086-.8229l2.1281-6.551c.194-.5974.2404-.804.2571-.8615-.048-.0451-.2023-.2149-.6879-.5464l-2.803-2.0316-.2186-.1607.8358-3.208h-.0001z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSfmlIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#8CC445');
}
