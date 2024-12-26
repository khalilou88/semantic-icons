import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-jabber-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Jabber</title>
      <path
        d="M9.597 11.737c0-.35-.065-.732-.268-1.025-.408-.588-1.283-.775-1.892-.405-.308.188-.48.515-.576.851-.191.668-.104 1.43.03 2.1.043.214.088.428.148.639.021.076.031.186.08.25.087.11.297.141.426.12.387-.065.291-.703.278-.974-.03-.634-.218-1.25-.036-1.881.076-.268.225-.568.494-.684.244-.105.49.023.586.261.156.385.117.83.215 1.23.033.137.07.272.131.399.018.037.043.113.094.108.126-.011.304-.22.398-.298.304-.25.616-.52.965-.705.165-.088.435-.23.603-.08a.612.612 0 0 1 .108.13c.198.31.002.55-.127.845-.166.38-.336.758-.577 1.098-.207.293-.49.549-.655.869-.107.205-.167.43-.123.663.036.188.181.301.373.257.143-.033.24-.156.322-.269.146-.202.281-.412.426-.615.28-.393.61-.76.846-1.183a3.41 3.41 0 0 0 .42-1.664c0-.474-.171-1.198-.723-1.298a.974.974 0 0 0-.326.01 1.432 1.432 0 0 0-.374.12 2.715 2.715 0 0 0-.818.637c-.146.16-.276.363-.449.495M9.078.016c-.435.058-.878.052-1.315.12-.838.129-1.64.389-2.425.703-.286.114-.568.241-.845.376-.103.05-.26.09-.343.17-.043.041-.039.139-.044.195-.014.156-.034.313-.05.47-.058.605-.1 1.229-.013 1.834.028.195.09.55.33.587.369.058.656-.397.837-.648.424-.586.905-1.132 1.6-1.394.817-.308 1.753-.381 2.618-.44 2.426-.167 5.078.277 6.865 2.064.254.254.495.524.7.82.8 1.159 1.223 2.477 1.427 3.86.096.65.161 1.308.013 1.955-.257 1.122-.932 2.1-1.706 2.931-.53.57-1.128 1.084-1.749 1.552-.347.261-.736.483-1.062.768-.375.329-.688.74-.925 1.179-.639 1.181-.81 2.602-.622 3.92.038.27.073.542.134.809.018.08.022.217.073.282.097.122.36.189.508.196.154.007.256-.11.294-.249.064-.236.026-.498-.012-.736-.076-.487-.147-.977-.125-1.471a3.71 3.71 0 0 1 1.026-2.425c.643-.673 1.512-1.061 2.243-1.625 1.474-1.136 2.794-2.668 3.301-4.492a5.194 5.194 0 0 0 .159-2.015c-.105-.849-.415-1.697-.708-2.497-.892-2.437-2.422-4.755-4.851-5.87-.964-.443-1.973-.645-3.016-.79-.49-.068-.98-.11-1.472-.132-.274-.012-.572-.042-.845-.006M5.277 15.796c-.473.068-.61.447-.523.876.112.548.543.965.97 1.295a6.03 6.03 0 0 0 3.884 1.238c.538-.023 1.124-.112 1.617-.34.265-.122.542-.563.181-.751a.59.59 0 0 0-.169-.051c-.157-.026-.333.041-.482.084-.263.075-.526.153-.797.196-.808.13-1.683-.055-2.352-.534-.542-.387-.98-.898-1.393-1.415-.253-.316-.482-.663-.936-.598M4.662 18.474c-.12.016-.259.011-.362.087-.215.158.022.476.135.62.328.417.76.763 1.192 1.068a7.832 7.832 0 0 0 4.03 1.442c.421.03.85 0 1.267-.07.152-.026.342-.037.482-.103.399-.186.284-.939-.072-1.106-.155-.073-.404.023-.567.046-.385.054-.771.06-1.158.05-1.015-.025-2.096-.338-2.98-.831a5.589 5.589 0 0 1-.966-.693c-.181-.16-.368-.42-.603-.502-.11-.037-.284-.023-.398-.008M4.903 20.73a.638.638 0 0 0-.413.236c-.078.088-.152.167-.197.278-.246.609.41 1.183.864 1.47.504.32 1.055.558 1.616.758 1.266.45 2.752.739 4.066.336.391-.12.778-.338 1.062-.634.16-.167.27-.419-.024-.526-.174-.063-.385.098-.543.162a4.57 4.57 0 0 1-1.158.312c-.527.064-1.001-.052-1.508-.179-.434-.108-.872-.217-1.291-.373a4.457 4.457 0 0 1-1.026-.513c-.094-.066-.206-.125-.282-.211-.25-.282-.439-.612-.707-.88-.116-.116-.281-.256-.459-.236"
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
export class SvgJabberIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
