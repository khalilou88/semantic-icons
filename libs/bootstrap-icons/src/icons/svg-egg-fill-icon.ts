import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-egg-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-egg-fill"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgEggFillIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
