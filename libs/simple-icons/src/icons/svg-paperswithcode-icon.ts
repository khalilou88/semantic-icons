import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-paperswithcode-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Papers With Code</title>
      <path
        d="M0 2v20h4.4v-2.4h-2V4.4h2V2H0Zm19.6 0v2.4h2v15.2h-2V22H24V2h-4.4Zm-16 3.6v12.8H6V5.6H3.6Zm7.2 0v12.8h2.4V5.6h-2.4Zm7.2 0v12.8h2.4V5.6H18Zm-10.8.8v11.2h2.4V6.4H7.2Zm7.2 0v11.2h2.4V6.4h-2.4Z"
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
export class SvgPaperswithcodeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
