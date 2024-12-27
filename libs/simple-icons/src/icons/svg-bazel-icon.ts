import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bazel-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bazel</title>
      <path
        d="m11.7473 23.8198-5.4987-5.4987v-5.5349l5.4987 5.4986v5.535zm-.1036-17.6412-.0001-.0001.1768-.1768L5.9986.1799.1768 6.0018l.0001.0001 5.8217 5.8271 5.6451-5.6504zM0 6.5323v5.5347l5.7486 5.7539v-5.5347l-.1035-.1035.0001-.0001L0 6.5323zm17.6478 5.6504-5.6505-5.6505-5.6452 5.6504 5.6452 5.6453 5.6505-5.6452zm.1036 5.8885v-5.2853l-5.5042 5.4991v5.5351l5.5042-5.4991v-.2498zM24 6.5323l-5.6451 5.6503.0001.0001-.1036.1035v5.5346L24 12.067V6.5323zm-.1769-.5304.0001-.0001L18.0014.18l-5.8273 5.822 5.8273 5.8272 5.8217-5.8273z"
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
export class SvgBazelIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
