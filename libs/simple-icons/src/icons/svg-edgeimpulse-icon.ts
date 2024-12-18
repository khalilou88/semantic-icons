import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-edgeimpulse-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Edge Impulse</title>
      <path
        d="M16.008 10.287h4.51l1.348 3.53h-5.858c-.979 0-1.772-.79-1.772-1.766s.793-1.766 1.772-1.766v.002ZM.677 12.049a1.77 1.77 0 0 1 1.773-1.766h8.597a1.77 1.77 0 0 1 1.772 1.766c0 .976-.793 1.766-1.772 1.766H2.45c-.98 0-1.773-.79-1.773-1.766ZM24 19.613H4.448a2.515 2.515 0 0 1-1.93.899A2.514 2.514 0 0 1 0 18.002a2.514 2.514 0 0 1 2.518-2.509c.775 0 1.467.351 1.93.899h18.321L24 19.613ZM19.594 7.655H4.404a2.51 2.51 0 0 1-1.886.852A2.514 2.514 0 0 1 0 5.998a2.514 2.514 0 0 1 2.518-2.51c.797 0 1.506.371 1.967.946h13.878l1.231 3.221Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgEdgeimpulseIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}