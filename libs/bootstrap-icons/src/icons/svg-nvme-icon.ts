import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nvme-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-nvme"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M1.5 4.5A.5.5 0 0 1 2 4h13.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5.5.5 0 0 0 0 1 .5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5h-1A.5.5 0 0 1 0 11V7.5A.5.5 0 0 1 .5 7h1a.25.25 0 0 0 0-.5h-1A.5.5 0 0 1 0 6V5a.5.5 0 0 1 .5-.5zm1 .5a.5.5 0 0 1-.5.5h-.5a1.25 1.25 0 1 1 0 2.5H1v2.5h1a.5.5 0 0 1 .5.5H15V9.415a1.5 1.5 0 0 1 0-2.83V5z"
      />
      <path
        d="M4 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM5 7v2h1V7zm3-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM9 7v2h3V7z"
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
export class SvgNvmeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
