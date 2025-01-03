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
  selector: 'svg[si-asterisk-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Asterisk</title>
    <svg:path
      d="M14.92474 1.7776c-1.5868-.006-2.72634.1583-4.0059.57625-.4307.1407-1.11947.41114-1.53049.60105s-1.17324.62818-1.69469.97591-1.31453.95274-1.76285 1.3415c-.4483.38876-1.13243 1.07288-1.52119 1.5212-.38875.44831-.93594 1.1598-1.21447 1.58005s-.52234.7479-.54218.72806c-.0821-.0821.68021-1.55226 1.21138-2.336l.57006-.8427-.61344.59485c-.33697.32716-.9366 1.0258-1.3353 1.55217s-.92949 1.32942-1.17729 1.78453c-.2478.45513-.59826 1.25105-.77764 1.76906l-.3253.94182v.18686c-.14567.47425-.20618.82312-.20545 1.37674.003.60684.0609 1.08074.20544 1.61182v.19538l.26954.79313c.14744.4362.43545 1.08232.64132 1.43444.20587.35211.6835.96441 1.05957 1.36318.37607.39876.97836.9227 1.3384 1.1618 1.07417.71335 2.16188 1.14074 3.5288 1.38487.43621.0779 1.3454.14382 2.01998.14871.6746.005 1.6949-.0605 2.26785-.1456s1.5643-.30574 2.20278-.48952c.6385-.18377 1.62088-.5359 2.1842-.78383l1.02548-.44923.65062.19518c.73972.2239 4.10778.98772 4.15461.94184.0169-.0165-.36632-.8263-.85199-1.80002l-.88297-1.77214.78383-.94184c.43255-.518 1.03592-1.3173 1.3384-1.77524.3025-.45795.76326-1.2833 1.0255-1.8341.26222-.5508.56867-1.3353.68158-1.74426.11292-.40896.25185-1.1359.30672-1.61724.0689-.60404.0673-1.14149-.006-1.73496-.0586-.4729-.21192-1.16555-.34079-1.53668s-.42997-1.01806-.6661-1.43754c-.54074-.96059-1.69132-2.13154-2.525-2.57147-.33479-.17667-.63723-.3222-.67539-.3222-.0382 0 .15568.17987.43374.39966.55794.44102 1.24622 1.27072 1.58625 1.91155l.22307.41516-.22307-.29743c-.12202-.16358-.55922-.63692-.97282-1.05027-.57349-.57315-.95288-.85022-1.59555-1.168-.548-.27098-1.18938-.48753-1.8341-.62273-.73249-.1536-1.36683-.20995-2.42895-.21377zm-.0496 1.09674c1.0863.002 1.5545.0494 2.15941.21068.4251.11334 1.07198.3469 1.43754.5205.47067.22351.88578.5356 1.41895 1.06885.57816.57824.84717.94844 1.16491 1.59555.22757.46348.4809 1.155.56076 1.53668.0799.3817.14467 1.03524.14562 1.45303.003 1.31394-.3635 2.79464-1.04098 4.198-.18427.38169-.52577.98397-.75905 1.3384s-.77228 1.0048-1.19588 1.44684c-.4236.44202-.76835.83226-.76835.86438 0 .0321.35691.60325.79313 1.27024s.79313 1.2502.79313 1.29503c0 .0448-.0232.0805-.0527.0805s-.69262-.24538-1.47162-.54527-1.53096-.54528-1.6699-.54528c-.13895 0-.49078.10608-.78384.23546-.96736.42709-2.77125.95962-3.74256 1.10604-.52582.0793-1.31114.13955-1.74736.13322-1.57475-.0228-2.75872-.2955-4.11434-.94803-.79414-.38227-1.07524-.58708-1.79383-1.30742-.64984-.65144-.93938-1.03166-1.21447-1.59865-.19842-.40895-.42859-1.01031-.5112-1.3353-.21292-.83764-.19273-2.23255.0465-3.1849.10833-.4313.4223-1.23948.69708-1.79693.2748-.55745.76385-1.36438 1.08745-1.79383s.9908-1.16322 1.48092-1.62963c.95198-.90593 2.10627-1.72182 3.23136-2.28333.97376-.48599 2.268-.92608 3.45134-1.1742.75897-.15914 1.35506-.21232 2.39797-.21068zM10.7033 5.2787l.0409 1.89897c.0351 1.63358.0207 1.89128-.1036 1.8436-.0794-.0305-.80422-.48575-1.61046-1.01155s-1.47836-.94257-1.49369-.92635c-.0823.0871-1.33617 2.22031-1.33627 2.27346-.00008.0346.73564.48078 1.63505.99141s1.63543.95078 1.63543.97805c0 .0273-.73602.46741-1.63543.97805s-1.63513.95676-1.63505.9914c.0001.0536 1.25446 2.18701 1.33724 2.27443.0159.0168.75297-.4196 1.63795-.9699l1.6091-1.0007-.0407 1.88715-.0405 1.88716h2.76277l-.0711-1.89394c-.0585-1.55786-.048-1.8797.0598-1.81397.0721.0439.73181.4535 1.46601.91028s1.41202.87183 1.50628.92228c.14504.0776.27851-.087.86864-1.07099.49096-.81865.66132-1.18318.57568-1.2321-.0669-.0382-.82975-.46984-1.69527-.95907l-1.57367-.88956.23527-.14813c.1294-.0815.88216-.51577 1.67281-.96526s1.44714-.82465 1.45884-.8336c.0117-.009-.2923-.53914-.67559-1.17826-.45485-.75844-.73775-1.13783-.81443-1.0923-.0646.0384-.49675.31373-.96023.6119-.46348.29815-1.1465.73747-1.5179.9763l-.6754.43412.0705-1.93634.0703-1.93654H12.085zM2.5788 9.24433c.00078-.00004.002 0 .003 0 .0273 0 .0496.0223.0496.0496s-.0223.0496-.0496.0496a.0497.0497 0 0 1-.0496-.0496c0-.0264.021-.0482.047-.0496z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAsteriskIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
