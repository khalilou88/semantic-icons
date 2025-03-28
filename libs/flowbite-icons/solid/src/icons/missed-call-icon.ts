import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-missed-call-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M14.1673 10.687c-.3905-.3905-.3905-1.02367 0-1.41419l1.3869-1.38683-1.346-1.20257c-.4119-.36796-.4474-1.00013-.0795-1.41198.368-.41184 1.0002-.44742 1.412-.07945l1.4724 1.31553 1.4939-1.31935c.414-.36559 1.0459-.32639 1.4115.08757.3656.41395.3264 1.0459-.0876 1.4115l-1.3605 1.2016 1.4042 1.39843c.3913.38971.3927 1.02284.0029 1.41424-.3897.3913-1.0228.3926-1.4142.0029l-1.4525-1.44658-1.4293 1.42918c-.3905.3905-1.0236.3905-1.4142 0Z"
      clip-rule="evenodd"
    />
    <svg:path
      d="M7.97825 5.00001c-.3729 0-.74128.08169-1.07926.23933-.32394.1511-.61243.36846-.84696.63787-1.81892 1.82188-2.35302 3.87423-1.89899 5.93669.43916 1.9949 1.77747 3.8929 3.45642 5.572 1.67897 1.6791 3.57614 3.0177 5.57034 3.4591 2.0612.4563 4.1141-.0726 5.9396-1.8853.2705-.2348.4888-.524.6405-.8489.1581-.3387.2401-.708.2401-1.0819 0-.3739-.082-.7432-.2401-1.0819-.1516-.3247-.3696-.6136-.6398-.8483l-1.2098-1.2106c-.5043-.504-1.1879-.7872-1.9007-.7872-.7128 0-1.3968.2835-1.9011.7876l-.6178.6182c-.1512.1512-.3563.2362-.5701.2362-.2138 0-.4189-.085-.5701-.2363l-1.8534-1.8545c-.1511-.1513-.2361-.3565-.2361-.5704 0-.214.085-.4192.2362-.5705l.6181-.6185c.5037-.5046.7867-1.18867.7867-1.9019 0-.71324-.2833-1.39767-.7871-1.90229L9.90499 5.87782c-.23462-.2697-.5233-.48727-.84749-.63848-.33798-.15764-.70636-.23933-1.07925-.23933Z"
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
export class SiMissedCallIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
