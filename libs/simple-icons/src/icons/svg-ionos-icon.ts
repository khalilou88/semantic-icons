import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ionos-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ionos</title>
      <path
        d="M22.182 15.499a1.7634 1.7634 0 0 1-.3536-.0358 1.8319 1.8319 0 0 1-1.2086-.8632l-.0066-.012c-.1308-.2616-.0448-.5693.2-.7162a.5236.5236 0 0 1 .2689-.0743.5327.5327 0 0 1 .4632.272.558.558 0 0 0 .018.0299l.0564.0766.0757.0765a.7385.7385 0 0 0 .3453.167.7596.7596 0 0 0 .5954-.136.7206.7206 0 0 0 .299-.5386.7441.7441 0 0 0-.207-.578s-1.5994-1.6612-1.6712-1.7382a1.9604 1.9604 0 0 1-.1929-.229c-.2256-.3198-.2962-.697-.2614-1.0702a1.7361 1.7361 0 0 1 .2253-.7397s.0732-.124.0948-.1554c.0847-.1236.2515-.2834.3658-.3726a1.8813 1.8813 0 0 1 .3069-.1844 1.7494 1.7494 0 0 1 2.2815.7041.5186.5186 0 0 1 .0553.402.5298.5298 0 0 1-.2528.3263.5082.5082 0 0 1-.2593.0705.5283.5283 0 0 1-.46-.2706.6953.6953 0 0 0-.4656-.329.721.721 0 0 0-.5645.1269.688.688 0 0 0-.267.498.6998.6998 0 0 0 .1905.5398l1.6351 1.6862a1.8284 1.8284 0 0 1 .5071 1.3931c-.0465.5243-.3071.9994-.7152 1.3053a1.8425 1.8425 0 0 1-1.0984.369m-5.175-.0006a1.7608 1.7608 0 0 0 1.7585-1.7589v-3.4787a1.7587 1.7587 0 0 0-3.5173 0v3.4786a1.7608 1.7608 0 0 0 1.7587 1.7589m0-5.9342c.3777 0 .6968.319.6968.6967v3.4786a.6977.6977 0 0 1-.6968.6968.6894.6894 0 0 1-.6968-.6968v-3.4786a.6976.6976 0 0 1 .697-.6967m-7.8986.3224v5.0804a.5309.5309 0 0 0 1.0618 0V12.09Zm2.8802 2.0255V9.0328a.531.531 0 0 1 1.0619 0v5.0828zm1.053 2.9406v.1134a.533.533 0 0 1-1.0067.2408L9.1153 9.154v-.1212a.5261.5261 0 0 1 .3028-.4772.5253.5253 0 0 1 .7088.2475Zm-7.9067.6457a1.761 1.761 0 0 0 1.7586-1.7589v-3.4786a1.7587 1.7587 0 0 0-3.5173 0v3.4786a1.7609 1.7609 0 0 0 1.7587 1.7589m0-5.9342a.707.707 0 0 1 .6968.6967v3.4786a.6968.6968 0 1 1-1.3936 0v-3.4786a.6976.6976 0 0 1 .6968-.6967M0 14.9111a.5791.5791 0 1 0 1.1581 0V9.0803a.5791.5791 0 0 0-1.1582 0z"
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
export class SvgIonosIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
