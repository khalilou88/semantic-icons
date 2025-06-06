import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bowl-food-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M21 11.0001c0-.8815-.3799-1.6731-.984-2.22145.5031-1.33846.2177-2.97144-.9813-3.94213-1.059-.8574-2.4761-.97568-3.6271-.42051-.2908-.39083-.6632-.70423-1.0895-.93179-.8229-.43923-1.8026-.53949-2.7413-.35637-1.2172.23745-2.18257 1.03558-2.68037 2.07405-.08983-.05265-.18224-.10165-.27714-.14661-.86027-.40752-1.89128-.46242-2.91449.05292-1.40603.70815-2.13029 2.35257-1.84394 3.8504-.16121.14468-.30525.31046-.42787.49818C3.13246 9.91685 3 10.4482 3 11.0001c0 .5506.445.9972.99497.9999H20.005c.55-.0027.995-.4493.995-.9999Zm-6.8905-.7654c-.2294-.50238-.8227-.72362-1.325-.49417-.5024.22945-1.0956.00821-1.3251-.49415-.2294-.50237-.0082-1.09562.4942-1.32507 1.5071-.68836 3.2868-.02463 3.9752 1.48247.2294.50236.0082 1.09562-.4942 1.32502-.5024.2295-1.0956.0083-1.3251-.4941Z"
      clip-rule="evenodd"
    />
    <svg:path
      fill="currentColor"
      d="M20.3593 15.2241c.2828-.5949-.195-1.2241-.8537-1.2241H4.49439c-.6587 0-1.1365.6292-.85371 1.2241.85327 1.7951 2.4178 3.2323 4.33593 4.0722V20c0 .5523.44772 1 1 1h6.04679c.5523 0 1-.4477 1-1v-.7037c1.9181-.8399 3.4827-2.2771 4.3359-4.0722Z"
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
export class SiBowlFoodIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
