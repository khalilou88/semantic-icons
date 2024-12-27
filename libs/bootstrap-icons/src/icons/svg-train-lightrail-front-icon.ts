import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-train-lightrail-front-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-train-lightrail-front"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M6.5 0a.5.5 0 0 0 0 1h1v1.011c-1.525.064-3.346.394-4.588.655C1.775 2.904 1 3.915 1 5.055V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V5.055c0-1.14-.775-2.15-1.912-2.39-1.242-.26-3.063-.59-4.588-.654V1h1a.5.5 0 0 0 0-1zM8 3c1.497 0 3.505.356 4.883.644.653.137 1.117.722 1.117 1.411V13.5a1.5 1.5 0 0 1-1.072 1.438 76 76 0 0 1-.1-.792c-.092-.761-.2-1.752-.266-2.682A21 21 0 0 1 12.5 10c0-1.051.143-2.404.278-3.435l.07-.522c.112-.798-.42-1.571-1.244-1.697C10.644 4.199 9.136 4 8 4s-2.645.2-3.604.346c-.825.126-1.356.9-1.244 1.697q.034.24.07.522C3.357 7.596 3.5 8.949 3.5 10c0 .428-.024.933-.062 1.464a57 57 0 0 1-.266 2.682c-.038.31-.072.58-.1.792A1.5 1.5 0 0 1 2 13.5V5.055c0-.69.464-1.274 1.117-1.41C4.495 3.354 6.503 3 8 3m3.835 11.266c.034.28.066.53.093.734H4.072a63 63 0 0 0 .328-3h2.246c.36 0 .704-.143.958-.396a.35.35 0 0 1 .25-.104h.292a.35.35 0 0 1 .25.104c.254.253.599.396.958.396H11.6c.068.808.158 1.621.236 2.266ZM6 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m3.5.5a.5.5 0 0 0 .5-.5.5.5 0 1 0 1 0 .5.5 0 0 0-1 0 .5.5 0 1 0-.5.5m-5.03-3c.019-.353.03-.692.03-1 0-.927-.104-2.051-.216-3h7.432c-.112.949-.216 2.073-.216 3 0 .308.011.647.03 1H9.354a.35.35 0 0 1-.25-.104 1.35 1.35 0 0 0-.958-.396h-.292c-.36 0-.704.143-.958.396a.35.35 0 0 1-.25.104zm-.315-5-.013-.096a.497.497 0 0 1 .405-.57C5.505 5.188 6.947 5 8 5s2.495.188 3.453.334a.497.497 0 0 1 .405.57L11.845 6z"
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
export class SvgTrainLightrailFrontIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
