import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-affinityphoto-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Affinity Photo</title>
      <path
        d="M24 2.344v19.312A2.345 2.345 0 0 1 21.656 24H2.344A2.345 2.345 0 0 1 0 21.656V2.344A2.345 2.345 0 0 1 2.344 0h19.312A2.345 2.345 0 0 1 24 2.344Zm-13.328-.586-.41.709 5.021 8.693 5.43-9.402H10.672Zm2.213 7.702H11.12a.901.901 0 0 0-.75.446l-.925 1.605-.007.011a.901.901 0 0 0 0 .872l.924 1.599.01.017a.893.893 0 0 0 .755.428c.002 0 1.178.001 1.765-.002a.888.888 0 0 0 .75-.436c.311-.539.624-1.077.933-1.617a.879.879 0 0 0-.006-.863l-.008-.013-.921-1.595-.005-.008a.897.897 0 0 0-.75-.444ZM2.36 22.18 9.699 9.475H6.215l-4.457 7.717.002 4.182a.94.94 0 0 0 .6.806Zm11.844.062-5.479-9.486-5.485 9.486h10.964ZM12.926 8.676l-3.125-5.41-3.125 5.41h6.25Zm9.316 6.56H11.08l4.046 7.006h6.197a.938.938 0 0 0 .919-.937v-6.069Zm-.635-13.428-7.295 12.63h7.93V2.695a.938.938 0 0 0-.635-.887Z"
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
export class SvgAffinityphotoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
