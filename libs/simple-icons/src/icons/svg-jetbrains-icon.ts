import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-jetbrains-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>JetBrains</title>
      <path
        d="M7.529 8.753h-.705v.941h.706c.376 0 .565-.188.565-.471-.001-.329-.236-.47-.566-.47zm-3.2.282c0-.235-.188-.329-.471-.329h-.705v.706h.659c.329-.047.517-.141.517-.377zm6.212 1.13h.847l-.423-1.083zm-6.588 0h-.847v.706h.847c.329 0 .518-.141.518-.376s-.189-.33-.518-.33zM0 0v24h24V0H0zm8.424 3.012h3.435v.941h-1.176v2.965H9.6V3.953H8.424v-.941zm-.236 0v.894h-2.07v.612H8v.847H6.118v.612h2.118v.941H5.082l-.047-3.906h3.153zm-2.635 7.623c0 .659-.565 1.082-1.459 1.082H2.071V7.812h2.023c.471 0 .847.141 1.082.329.142.141.236.377.236.659 0 .471-.235.706-.612.894.471.141.753.424.753.941zM2.682 5.647c.188.235.376.376.612.376.282 0 .424-.188.424-.565V2.965H4.8v2.494c0 .471-.141.847-.376 1.082s-.612.377-1.083.377c-.706.047-1.082-.236-1.364-.612l.705-.659zm8.377 15.341H2.071v-1.506h8.988v1.506zm.894-9.223l-.282-.706h-1.506l-.282.706h-1.13l.02-.047h-.679l-.8-1.176h-.47v1.176H5.741V7.812h1.835c.612 0 .988.141 1.271.424.235.235.329.518.329.894 0 .612-.329.988-.8 1.224l.605.878 1.465-3.419h1.035l1.647 3.953h-1.175zm2.4-.047h-1.082V7.812h1.082v3.906zm3.953 0h-.941L15.718 9.6v2.165h-1.082V7.812h.988l1.6 2.071V7.812h1.082v3.906zm1.929.047a2.488 2.488 0 0 1-1.835-.612l.612-.706c.376.329.8.471 1.271.471.282 0 .471-.094.471-.282s-.141-.235-.659-.376c-.847-.188-1.459-.424-1.459-1.224 0-.706.565-1.271 1.506-1.271.659 0 1.176.188 1.6.518l-.565.753c-.377-.236-.753-.377-1.083-.377-.282 0-.376.094-.376.235 0 .188.141.235.659.376.894.188 1.459.471 1.459 1.224-.001.8-.612 1.271-1.601 1.271z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgJetbrainsIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
