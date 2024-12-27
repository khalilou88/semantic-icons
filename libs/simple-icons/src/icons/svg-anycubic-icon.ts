import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-anycubic-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Anycubic</title>
      <path
        d="m6.762.534 8.728 3.481 8.469 7.449-6.494-.631L6.762.534Zm10.72 10.463 6.518.581-7.826 8.749-8.649 3.139 9.957-12.469ZM6.592.601l10.699 10.331L7.355 23.44 0 12.465 6.592.601Z"
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
export class SvgAnycubicIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
