import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-leslibraires-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Les libraires</title>
      <path
        d="M11.79.002a10.579 10.579 0 0 0-7.735 3.575C.18 7.958.593 14.647 4.981 18.518a10.557 10.557 0 0 0 5.3 2.51L12.002 24l1.717-2.971a10.56 10.56 0 0 0 6.227-3.437c3.876-4.38 3.461-11.07-.926-14.94a10.567 10.567 0 0 0-7.23-2.65zM11.277 7.5l.613.512-1.862 2.444c-.005.007-.048.06-.048.115 0 .056.045.112.045.113l1.866 2.461-.615.502-2.573-2.403a.883.883 0 0 1-.3-.667c0-.38.22-.596.304-.678zm3.265 0 .613.512-1.863 2.444c-.005.007-.048.06-.048.115 0 .056.045.112.046.113l1.866 2.461-.615.502-2.573-2.403a.883.883 0 0 1-.301-.667c0-.38.222-.596.305-.678z"
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
export class SvgLeslibrairesIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
