import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-haxe-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Haxe</title>
      <path
        d="M23.784 0a.221.221 0 0 0-.043.003h-5.853a.221.221 0 0 0-.1.023L12 2.918 6.21.026a.221.221 0 0 0-.098-.023H.238a.221.221 0 0 0-.026 0 .221.221 0 0 0-.21.256v5.853a.221.221 0 0 0 .024.1l2.894 5.785L.026 17.79a.221.221 0 0 0-.024.099v5.84a.221.221 0 0 0 .002.078.221.221 0 0 0 .253.19h5.855a.221.221 0 0 0 .099-.023L12 21.076l5.789 2.898a.221.221 0 0 0 .099.023h5.877a.221.221 0 0 0 .232-.257V17.89a.221.221 0 0 0-.023-.1l-2.895-5.792 2.895-5.786a.221.221 0 0 0 .023-.099V.267a.221.221 0 0 0-.005-.098.221.221 0 0 0-.208-.169zM2.022.445H6.06l4.038 2.017zm15.918 0h4.038l-8.075 2.017zM.528.528l11.039 2.76-8.28 8.275-.238-.953zM23.47.535l-2.76 11.031-8.277-8.279zm.084 1.487V6.06l-2.019 4.035zm-23.11.003L2.29 9.398l.175.7L.445 6.06zM12 3.48L20.52 12l-8.517 8.516-8.241-8.234L3.48 12zm8.712 8.952l.088.351 2.672 10.688-11.04-2.76zm-17.424 0l8.274 8.274L.531 23.46l.266-1.065zm18.247 1.466l2.02 4.042v4.027zm-19.07 0l-2.02 8.08v-4.038zm7.626 7.638l-4.032 2.018H2.02zm3.818 0l8.071 2.018h-4.04z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHaxeIcon {
  readonly class = input<string>('');
}
