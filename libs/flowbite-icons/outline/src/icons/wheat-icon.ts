import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wheat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8.54025 15.4598c-.15524.0503-.82936-1.9171-.89837-2.3619-.08825-.5688.03111-1.7696.15081-1.7963.1197-.0267.68672 1.2412.75573 1.686.06901.4447.14706 2.4219-.00817 2.4722Zm0 0c-.00841-.163 2.06645-.3049 2.51395-.2565.5722.062 1.7012.4881 1.696.6106-.0052.1225-1.3766.3421-1.8241.2936-.4475-.0484-2.37745-.4848-2.38585-.6477Zm3.71475-3.7147L4 20m8.255-8.2549 6.6038-6.6039m-6.6038 6.6039c-.1553.0503-.8294-1.91714-.8984-2.36191-.0883-.56876.0311-1.76956.1508-1.79626.1197-.0267.6867 1.24116.7557 1.68593.069.44477.1471 2.42194-.0081 2.47224Zm0 0c-.0084-.163 2.0664-.3049 2.5139-.2565.5722.062 1.7012.4881 1.696.6106-.0052.1225-1.3766.3421-1.8241.2936-.4475-.0484-2.3774-.4848-2.3858-.6477ZM20 8.95298l-1.2713 1.27132m-3.6816-6.22427-1.2713 1.27129M5.26953 18.7305c-.15523.0503-.82935-1.9171-.89836-2.3619-.08825-.5687.0311-1.7696.1508-1.7963.1197-.0267.68673 1.2412.75574 1.686.06901.4447.14705 2.4219-.00818 2.4722Zm0 0c-.0084-.163 2.06645-.3049 2.51393-.2565.57221.062 1.70121.4881 1.69602.6106-.00519.1226-1.37661.3421-1.82408.2937-.44748-.0485-2.37746-.4848-2.38587-.6478Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWheatIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
