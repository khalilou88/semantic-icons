import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-thespritersresource-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>The Spriters Resource</title>
      <path
        d="M1.25 0C.557 0 0 .557 0 1.25v6.674C4.756 2.364 9.47.04 12.879.066c1.472.011 3.551.87 3.46 2.747-.074 1.558-3.202 3.763-4.71 4.197L10.5 6.893c.075-.687 2.257-2.77 2.246-3.79-.006-.633-.976-1.38-1.853-1.318-2.047.145-8.146 5.276-8.059 6.944.07 1.356 3.274 1.823 6.46 1.775 3.276-.05 3.634-.116 6.352.01 2.129.098 8.24 2.02 8.293 5.39.039 2.465-2.673 4.325-6.326 5.776-3.402 1.351-8.208 2.291-9.789 2.265-2.62-.043-7.763-.901-7.758-3.543.004-2.015 1.494-4.58 3.907-4.732.399-.025.74.028 1.047.588-.934.925-1.683 1.592-1.627 2.888.08 1.855 3.02 2.501 4.492 2.829.435.096 3.397.582 6.767-.489 4.035-1.28 5.742-2.996 5.71-5.134-.014-.85-.923-2.285-3.563-3.149-2.374-.776-3.476-1.012-6.64-.965-2.98.045-5.872.109-8.263-.43-1.134-.255-1.875-.804-1.875-.804L0 10.982V22.75C0 23.442.557 24 1.25 24h21.5c.692 0 1.25-.558 1.25-1.25V1.25C24 .557 23.442 0 22.75 0H1.25z"
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
export class SvgThespritersresourceIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
