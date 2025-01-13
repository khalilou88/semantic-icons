import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wellsfargo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wells Fargo</svg:title>
    <svg:path
      d="M12.136 13.949c0 .392-.245.616-.719.616h-.628v-1.226h.628c.48 0 .72.212.72.61zM6.922 15.06h1.044l-.523-1.443-.521 1.443zm12.46-1.82c-.72 0-1.109.562-1.109 1.526 0 .97.384 1.526 1.108 1.526.725 0 1.108-.556 1.108-1.526 0-.964-.389-1.526-1.108-1.526zM23.73 0v24H.269V0h23.462zm-5.548 10.652c.484.245.948.354 1.571.354.895 0 1.481-.458 1.481-1.171 0-.6-.357-1.014-1.028-1.172l-.677-.158c-.394-.092-.559-.25-.559-.517 0-.322.25-.523.74-.523s.778.18.89.604l.048.186h.383v-.943a2.927 2.927 0 0 0-1.352-.338c-.911 0-1.497.447-1.497 1.166 0 .556.34.965.996 1.112l.676.152c.432.099.592.273.592.562 0 .354-.261.55-.784.55-.59 0-.894-.24-1.027-.697l-.07-.235h-.383v1.068zm-3.378.245h3.02V9.595h-.383l-.043.19c-.106.486-.255.638-.607.638h-.74V7.557h.506v-.474h-1.753v.474h.453v2.866h-.453v.474zm-3.355 0h3.02V9.595h-.384l-.042.19c-.107.486-.256.638-.608.638h-.74V7.557h.506v-.474H11.45v.474h.452v2.866h-.452v.474zm-8.758-3.34.938 3.34h.74l.778-2.768.756 2.768h.74l.932-3.34h.736v2.866h-.453v.474h3.201V9.595h-.383l-.043.19c-.106.486-.26.638-.607.638h-.922V9.241h1.071a.58.58 0 0 0 .059-.273.55.55 0 0 0-.059-.26h-1.07v-1.15h.884c.357 0 .48.157.596.615l.038.147h.383V7.083H6.49v.474h.522l-.613 2.305-.762-2.779h-.766l-.746 2.774-.624-2.3h.501v-.474H2.266v.474h.426zm1.412 7.002v-1.22h.947c.358 0 .48.158.597.615l.038.147h.383v-1.236H2.857v.474h.453v2.866h-.453v.474h1.78v-.474h-.533v-1.112H5.2a.58.58 0 0 0 .058-.272.551.551 0 0 0-.058-.262H4.104zm9.114 1.913a.461.461 0 0 0-.048-.224.663.663 0 0 1-.112.011c-.245 0-.309-.142-.34-.458l-.022-.201c-.048-.43-.245-.708-.73-.746v-.017c.48-.022.975-.349.975-.964 0-.621-.496-1.008-1.257-1.008H9.542v.474h.453v2.866H9.26l-1.332-3.34H7.22l-1.305 3.34h-.373v.474h1.412v-.474h-.448l.245-.682h1.385l.245.682h-.437v.474h3.35v-.474h-.505v-1.16h.293c.586 0 .761.212.826.762l.02.19c.06.507.31.725.826.725.15 0 .299-.01.416-.027a.46.46 0 0 0 .048-.223zm3.633-1.788h-1.417a.52.52 0 0 0-.059.256c0 .11.016.18.059.268h.634v.964a1.598 1.598 0 0 1-.629.125c-.767 0-1.166-.56-1.166-1.53s.4-1.532 1.124-1.532c.485 0 .767.245.932.67l.058.153h.384v-.976a3.063 3.063 0 0 0-1.412-.337c-1.172 0-1.96.8-1.96 2.027 0 1.231.767 2.016 1.96 2.016.474 0 .964-.136 1.492-.404v-1.7zm4.512.082c0-1.182-.831-2.021-1.982-2.021-1.145 0-1.981.839-1.981 2.021 0 1.188.83 2.022 1.981 2.022 1.156 0 1.982-.834 1.982-2.022z"
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
export class SiWellsfargoIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#D71E28');
}
