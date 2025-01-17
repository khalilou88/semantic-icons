import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-johndeere-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>John Deere</svg:title>
    <svg:path
      d="M11.9985 1.1609c-3.457.0002-6.9828.7454-10.2957 2.3475C.5331 6.3093 0 9.1929 0 12.0069c0 2.806.5258 5.6572 1.6956 8.4841 3.3292 1.61 6.8415 2.3481 10.3041 2.3481 3.4644 0 6.9774-.738 10.3029-2.348C23.4723 17.6637 24 14.8127 24 12.0068c0-2.814-.5345-5.6976-1.7034-8.4985-3.3123-1.602-6.8372-2.3473-10.2969-2.3475h-.0006zm0 .916c3.4185 0 6.6966.7568 9.5728 2.1054.9712 2.4297 1.5026 5.0671 1.5026 7.8246 0 2.7508-.5279 5.3856-1.496 7.8096-2.8779 1.3506-6.1578 2.1073-9.5794 2.1073-3.4197 0-6.6996-.7567-9.5775-2.1073-.967-2.424-1.4967-5.0586-1.4967-7.8096 0-2.7574.5304-5.3947 1.502-7.8246 2.8783-1.3487 6.155-2.1055 9.5722-2.1055zm-.0006.687c-3.1279 0-6.2393.6677-9.0219 1.9239-.8997 2.3398-1.3586 4.7996-1.3586 7.319 0 2.5135.4581 4.968 1.3532 7.3066 2.783 1.258 5.8979 1.9227 9.0273 1.9227 3.131 0 6.2453-.6647 9.0279-1.9227l.0041-.003-.0006-.0006c-.6049-.9957-1.4173-1.7997-1.4261-1.8073-.01-.005-.1691-.0544-.1691-.0544-1.7246-.53-2.8551-.9283-3.3548-1.1872-.6876-.3571-1.41-1.2241-1.4895-1.3216-.8061-.0608-1.4729-.0478-2.1145.0299l-.4087.0531c-.7793.1006-1.584.2073-2.3726.0807-.525-.086-1.0346-.2537-1.5749-.4296-.8324-.2726-1.685-.5524-2.6594-.5509H5.421l.0167.0347c.2214.4306 1.0958 1.7369 2.191 2.096.2416.058.4165.1223.4923.1816 0 .0026.4192.8556.5335 1.0862-.6814-.3094-2.789-1.3813-4.4894-3.4504v-.003c0-.0276-.044-.43-.0532-.518 1.0126-.3778 3.2927-.597 3.5496-.6214l.0186-.0018.0083-.0203c.1361-1.1996.4201-2.1597.9524-3.2109.0153-.0317.0245-.0608.0245-.086a.1175.1175 0 0 0-.0132-.052c-.0298-.0566-.1026-.0675-.1057-.0675L6.9946 9.219a222.297 222.297 0 0 0-.1678-.5126c1.1184-.416 2.4974-.8055 3.2867-.9769.1334-.213.1708-.3286.1708-.4678 0-.1181-.0569-.219-.1708-.2963-.5595-.3794-2.3215-.1508-4.104.533-.004-.0073-.0037-.0092-.009-.0168.3701-.2769 1.0317-.688 1.5223-.916l.0191-.0107-.006-.0185c-.133-.4509-1.0038-.796-1.1017-.8311.002-.0153.0039-.0252.0054-.037.8852-.0605 1.4727.3536 1.652.6488l.009.0143.0173-.0053c.1136-.0367.5135-.1639.9464-.2151l.0257-.0012-.0072-.0263c-.1422-.7583-.8658-1.2647-1.1125-1.4172.007-.0123.0093-.017.0162-.0257.8546.0661 1.6439.8023 1.8217 1.4244l.0047.0167.018.0018c.2294.008.5074.0332.6936.0645l.0192.0036.0071-.0161a1.3133 1.3133 0 0 0 .1034-.5174c0-.5602-.3164-1.1606-.7056-1.5403.0076-.0107.011-.0207.0209-.0299 1.1227.426 1.4082 1.2351 1.4082 1.9884 0 .5273-.1398 1.0297-.23 1.3497l-.0376.1326 1.7649-.2133c-.1682.213-.5309.5922-1.2547.9918 0-.0038-.7462-.095-.7462-.095l-.0192-.003-.0065.0192c-.0501.154-.487 1.5335-.4894 2.5476 0 .376.1068.6676.3167.8687.374.3599.9933.3801 1.4262.3633 1.8404-.0673 3.2765.0457 4.2731.3406l.0592.0161.009-.0137c.0619-.0953.1105-.272.1105-.5061 0-.4443-.1781-1.1067-.7762-1.8558.0065-.0053.0067-.0092.0144-.0149.099.0547 1.7136.9716 1.9292 2.3558-.0378.0146-.7737.315-.7737.315l.0239.0238c.6822.7143.9176 1.5776 1.1065 2.2686.1503.5476.3298.897.5676 1.1024.2757.2378 1.32.7366 1.6335.883.2607.3705.7092 1.0643 1.0343 1.6019a20.315 20.315 0 0 0 1.067-6.5077c0-2.5195-.46-4.9795-1.3586-7.3191-2.7818-1.2561-5.896-1.9239-9.0237-1.9239Z"
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
export class SiJohndeereIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#367C2B');
}
