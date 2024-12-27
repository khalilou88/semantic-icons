import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-amazonroute53-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Amazon Route 53</title>
      <path
        d="M24 15.7664c0 2.8715-2.3571 5.0143-6.3 5.7-2.9571.5572-5.4 2.4-5.4429 2.4429q-.1285.0857-.2571.0857t-.2571-.0857C11.7 23.8664 9.257 22.0236 6.3 21.4664c-3.9429-.6857-6.3-2.8285-6.3-5.7 0-1.7571.6857-2.9143 1.2857-3.9428.5143-.9.9857-1.6715.9857-2.7429 0-2.2714-1.7571-3.7714-1.8-3.7714Q.343 5.1807.3 5.0093q0-.1714.1286-.3C.4286 4.6664 3.257 1.2807 3.9.3807c.0857-.0857.1714-.1714.3-.1714s.2571.0428.3429.1286c1.1142 1.1571 2.3571 1.8 3.6 1.8 1.3714 0 2.4857-.6 3.5142-1.9715.1715-.2143.5143-.2143.6858 0C13.3714 1.538 14.4857 2.138 15.857 2.138c1.2429 0 2.4858-.6429 3.6-1.8.0858-.0858.2143-.1286.3429-.1286s.2143.0857.3.1714c.6429.9 3.4714 4.2857 3.4714 4.3286q.1286.1286.1286.3-.0429.1714-.1714.3c-.0429 0-1.8 1.5-1.8 3.7714 0 1.0714.4714 1.8429.9857 2.7429.6 1.0285 1.2857 2.1857 1.2857 3.9428Zm-.8571 0c0-1.5-.6-2.5285-1.1572-3.5143-.5571-.9-1.1143-1.8857-1.1143-3.1714 0-2.1 1.2-3.5571 1.8-4.1571-.6428-.7286-2.1857-2.6572-2.9571-3.6429C18.557 2.395 17.1857 2.995 15.857 2.995c-1.5 0-2.7428-.6-3.8571-1.8857C10.8857 2.395 9.6429 2.995 8.1429 2.995c-1.3286 0-2.7-.6-3.8572-1.7143-.7714.9857-2.3143 2.9143-2.9571 3.6429.6.6 1.8 2.0571 1.8 4.1571 0 1.2857-.5572 2.2714-1.1143 3.1714C1.457 13.238.857 14.2664.857 15.7664c0 .9.3858 3.9429 5.5715 4.8857 2.6143.4715 4.8428 1.8858 5.5714 2.4.7286-.5142 2.9571-1.9285 5.5714-2.4 5.1857-.9428 5.5715-3.9857 5.5715-4.8857zm-2.5715-2.6571c.5572.9857.9 1.6286.9 2.6571 0 2.3143-3.2143 3.0429-4.2 3.2143-2.0571.3857-3.9 1.2857-5.0571 1.9714q-.0857.0429-.2143.0429t-.2143-.0429c-1.1571-.6857-3-1.5857-5.0571-1.9714-.9857-.1714-4.2-.9-4.2-3.2143 0-1.0285.3428-1.6714.9-2.6571.6-1.0286 1.3285-2.3143 1.3285-4.0286 0-1.3714-.3857-2.6571-1.1142-3.8571-.0858-.1715-.0858-.3857.0428-.5143q.3-.3857.6429-.8143c.1285-.1714.3857-.2143.5571-.1286 1.0714.6 2.1429.9 3.2572.9 1.3714 0 2.5285-.3857 3.6-1.1143.1714-.0857.3428-.0857.5142 0 1.0715.7286 2.2286 1.1143 3.6 1.1143 1.1143 0 2.1858-.3 3.2572-.9.1714-.0857.4286-.0428.5571.1286q.3429.4286.6429.8143c.1286.1286.1286.3428.0428.5143-.7285 1.2-1.1142 2.4857-1.1142 3.8571 0 1.7143.7285 3 1.3285 4.0286zm.0429 2.6571c0-.7714-.2572-1.3285-.8143-2.2285-.6429-1.1143-1.4143-2.4858-1.4143-4.4572 0-1.4571.3429-2.7857 1.0714-4.0714q-.1285-.1714-.2571-.3c-1.0714.5143-2.1857.8143-3.3429.8143-1.4142 0-2.7-.3857-3.8571-1.1143-1.1571.7286-2.4429 1.1143-3.8571 1.1143q-1.7143 0-3.3429-.8143-.1286.1286-.2571.3c.7285 1.2857 1.0714 2.6143 1.0714 4.0714 0 1.9714-.7714 3.3429-1.4143 4.4572-.5571.9-.8143 1.4571-.8143 2.2285 0 1.6715 2.9143 2.2715 3.4714 2.4 2.1.3857 3.9 1.2 5.1429 1.8857 1.2429-.6857 3.0429-1.5 5.1429-1.8857.5571-.1285 3.4714-.7285 3.4714-2.4zm-4.8857-3.4714q.4714.4286.4714 1.1571 0 .8143-.5571 1.2858-.6.4714-1.5858.4714-.7714 0-1.5-.3v-.6857q.9.3 1.5.3.6429 0 .9858-.2572.3-.3.3-.8143 0-.9857-1.2429-.9857-.3857 0-.7714.0429v-.5572l1.7143-1.8428h-2.4v-.6857h3.3v.6428l-1.6715 1.8h.1714q.8143 0 1.2858.4286zm-4.7572-.1714q.4715.4714.4715 1.2857t-.5572 1.3286q-.6.4714-1.5428.4714-.8143 0-1.5858-.3v-.6857q.9429.3 1.5858.3.6 0 .9428-.2572.3429-.3.3429-.8143 0-.6-.3-.8571-.3429-.2571-1.0286-.2571-.5143 0-1.2857.0857v-.5572l.1714-2.4428h3v.6857H8.8714l-.1285 1.6286q.4714-.043.8142-.043.9 0 1.4143.4287z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAmazonroute53Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
