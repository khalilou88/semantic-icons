import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-incoming-call-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.97825 3.99999c-.3729 0-.74128.08169-1.07926.23934-.32394.15109-.61243.36845-.84696.63786-1.81892 1.82189-2.35302 3.87423-1.89899 5.93671.43916 1.9949 1.77747 3.8929 3.45642 5.572 1.67897 1.6791 3.57614 3.0176 5.57034 3.4591 2.0612.4563 4.1141-.0726 5.9396-1.8853.2705-.2348.4888-.524.6405-.8489.1581-.3387.2401-.7081.2401-1.0819 0-.3739-.082-.7432-.2401-1.0819-.1516-.3247-.3696-.6137-.6398-.8483l-1.2098-1.2106c-.5043-.5041-1.1879-.7872-1.9007-.7872-.7128 0-1.3968.2835-1.9011.7876l-.6178.6181c-.1512.1513-.3563.2363-.5701.2363-.2138 0-.4189-.085-.5701-.2363l-1.85336-1.8545c-.15117-.1513-.23609-.3565-.23609-.5704 0-.214.08493-.4192.23613-.5705l.61812-.61851c.5037-.50461.7867-1.18868.7867-1.90191s-.2833-1.39767-.7871-1.90228L8.90499 4.8778c-.23462-.26969-.5233-.48727-.84749-.63847-.33798-.15765-.70636-.23934-1.07925-.23934Z"
    />
    <svg:path
      fill-rule="evenodd"
      d="M18.0299 8.98132c0 .55229-.4477 1-1 .99999l-3.03-.00002c-.5522 0-1-.44772-1-1V5.99995c0-.55229.4478-1 1-1 .5523 0 1 .44771 1 1v.58112l3.3184-3.29111c.3921-.38892 1.0253-.38631 1.4142.00582.3889.39213.3863 1.02529-.0058 1.4142l-3.2984 3.27133h.6016c.5523.00001 1 .44773 1 1.00001Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIncomingCallIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
