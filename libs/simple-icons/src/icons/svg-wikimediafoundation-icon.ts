import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-wikimediafoundation-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Wikimedia Foundation</title>
      <path
        d="M20.074 3.126C22.486 5.321 24 8.485 24 12c0 6.623-5.377 12-12 12S0 18.623 0 12c0-3.515 1.514-6.679 3.926-8.874l2.265 2.265C4.358 7.005 3.2 9.368 3.2 12c0 4.857 3.943 8.8 8.8 8.8s8.8-3.943 8.8-8.8c0-2.632-1.158-4.995-2.991-6.609zm-3.399 3.399C18.22 7.846 19.2 9.81 19.2 12c0 3.703-2.802 6.757-6.4 7.156V10.4zM11.2 19.156C7.602 18.757 4.8 15.703 4.8 12c0-2.19.98-4.154 2.525-5.475L11.2 10.4zM12 0c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4"
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
export class SvgWikimediafoundationIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
