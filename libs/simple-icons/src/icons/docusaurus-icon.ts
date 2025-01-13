import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-docusaurus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Docusaurus</svg:title>
    <svg:path
      d="M2.462 22.201h12.321a2.466 2.466 0 0 0 2.369-1.854c.026.004.052.008.079.008a.621.621 0 0 0 .615-.615.621.621 0 0 0-.615-.615c-.027 0-.053.004-.079.007l-.014-.055a.62.62 0 0 0 .378-.568.621.621 0 0 0-.615-.615.608.608 0 0 0-.371.127l-.042-.041a.606.606 0 0 0 .125-.368c0-.67-.919-.858-1.181-.241l-.055-.014c.003-.026.008-.052.008-.079a.622.622 0 0 0-.616-.615.621.621 0 0 0-.615.615h-.096a.617.617 0 0 0-1.033 0h-.717v-2.461h2.461c.115 0 .226-.017.331-.047a.307.307 0 1 0 .529-.304l.02-.021c.052.04.116.064.186.064h.002c.337 0 .428-.463.117-.591l.007-.028c.013.001.026.004.039.004a.31.31 0 0 0 .308-.308.31.31 0 0 0-.308-.308c-.013 0-.026.003-.039.004a.28.28 0 0 1-.007-.027c.327-.13-.028-.745-.305-.528l-.02-.021a.307.307 0 0 0 .062-.184c-.011-.326-.454-.416-.591-.12a1.238 1.238 0 0 0-.32-.047h-2.143a2.465 2.465 0 0 1 2.132-1.23h7.385V9.894l-8.618-.539a1.315 1.315 0 0 1-1.229-1.308c0-.688.542-1.265 1.229-1.307l8.618-.539v-1.23a2.473 2.473 0 0 0-2.462-2.462H8.615l-.307-.533a.356.356 0 0 0-.616 0l-.307.533-.308-.533a.355.355 0 0 0-.615 0l-.308.533-.308-.533a.355.355 0 0 0-.615 0l-.308.533-.008.001-.51-.51a.354.354 0 0 0-.594.159l-.168.628-.639-.171a.357.357 0 0 0-.436.435l.172.639-.628.169a.356.356 0 0 0-.16.594l.51.51v.008l-.533.307a.356.356 0 0 0 0 .616l.533.307-.533.308a.356.356 0 0 0 0 .616l.533.307-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.307a.356.356 0 0 0 0 .616l.533.308-.533.307a.356.356 0 0 0 0 .616l.533.307-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.307a.356.356 0 0 0 0 .616l.533.307-.533.308a.355.355 0 0 0 0 .615l.533.308-.533.308a.355.355 0 0 0 0 .615l.533.308a2.463 2.463 0 0 1-2.13-1.231A2.465 2.465 0 0 0 0 19.74c0 1.35 1.112 2.46 2.462 2.461zm19.692-5.204v2.743a2.473 2.473 0 0 1-2.461 2.461h-.001 1.231a2.466 2.466 0 0 0 2.383-1.854c.026.004.052.008.079.008A.621.621 0 0 0 24 19.74a.621.621 0 0 0-.615-.615c-.027 0-.053.004-.079.007l-.014-.055a.62.62 0 0 0 .378-.568.621.621 0 0 0-.615-.615.608.608 0 0 0-.371.127l-.042-.041a.612.612 0 0 0 .125-.368.623.623 0 0 0-.613-.615zm-4.067 2.62h2.223c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-2.223a.845.845 0 0 0 0-.246zm-.33-1.231h2.553c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-2.553a.845.845 0 0 0 0-.246zm-1.026-1.231h3.579c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-3.474a.85.85 0 0 0-.105-.246zm3.579-.984h-6.159a.126.126 0 0 1-.123-.123c0-.068.056-.123.123-.123h6.159c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123zm1.844-3.816v2.462c.115 0 .225-.017.331-.047a.308.308 0 1 0 .528-.304l.021-.021c.052.04.116.064.186.064a.312.312 0 0 0 .307-.308.306.306 0 0 0-.189-.283l.007-.028c.013.001.026.004.04.004a.312.312 0 0 0 .307-.308.312.312 0 0 0-.307-.308c-.014 0-.027.003-.04.004l-.007-.027a.31.31 0 0 0-.118-.592.306.306 0 0 0-.186.064l-.021-.021a.3.3 0 0 0 .063-.184c-.011-.326-.454-.416-.591-.12a1.24 1.24 0 0 0-.321-.047zm-6.059 2.339h4.215c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-4.451a.564.564 0 0 0 .073-.19.553.553 0 0 0 .163-.056zm.454-1.208h3.761c.067 0 .123.056.123.123a.124.124 0 0 1-.123.123h-3.772a.552.552 0 0 0 .011-.246zm5.605-6.225h-.004c-.381.013-.561.393-.719.729-.166.35-.294.578-.504.572-.233-.009-.366-.271-.506-.549-.162-.32-.347-.682-.734-.668-.375.013-.556.344-.715.636-.169.311-.285.5-.507.491-.237-.008-.363-.222-.509-.469-.163-.275-.351-.585-.731-.574-.368.013-.549.294-.709.542-.169.262-.287.421-.513.412-.243-.009-.368-.186-.513-.391-.163-.231-.347-.491-.726-.479-.36.013-.541.243-.701.446-.151.192-.27.344-.52.335h-.005a.126.126 0 0 0-.123.123c0 .066.053.121.119.123.371.012.559-.222.723-.429.145-.184.27-.343.516-.352.237-.01.348.138.516.375.16.226.341.482.705.495.382.013.566-.273.729-.525.145-.226.271-.421.511-.429.22-.008.34.166.51.453.159.271.34.577.712.59.385.014.57-.322.732-.619.14-.257.273-.5.507-.508.221-.005.336.196.506.533.159.314.339.67.717.684h.021c.377 0 .556-.378.714-.713.14-.297.273-.576.501-.588zM7.385 6.509a.312.312 0 0 1-.308-.308c-.01-.532-.378-.911-.927-.922-.528-.011-.888.432-.919.922-.011.168-.139.307-.308.308a.31.31 0 0 1-.308-.308c0-.848.69-1.538 1.539-1.538.848 0 1.538.69 1.538 1.538a.312.312 0 0 1-.307.308zm9.846-2.308a.31.31 0 0 1 .308.308.31.31 0 0 1-.308.308.31.31 0 0 1-.308-.308.31.31 0 0 1 .308-.308zm2.461-.153a.31.31 0 0 1 .307.308.31.31 0 0 1-.308.308h-.001a.31.31 0 0 1-.307-.308.31.31 0 0 1 .308-.308z"
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
export class SiDocusaurusIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3ECC5F');
}
