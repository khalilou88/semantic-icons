import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-instapaper-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instapaper</title>
      <path
        d="M14.766 20.259c0 1.819.271 2.089 2.934 2.292V24H6.301v-1.449c2.666-.203 2.934-.473 2.934-2.292V3.708c0-1.784-.27-2.089-2.934-2.292V0h11.398v1.416c-2.662.203-2.934.506-2.934 2.292v16.551z"
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
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgInstapaperIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
