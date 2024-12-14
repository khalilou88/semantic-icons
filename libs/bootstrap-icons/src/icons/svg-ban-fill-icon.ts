import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ban-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-ban-fill"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M2.71 12.584q.328.378.706.707l9.875-9.875a7 7 0 0 0-.707-.707l-9.875 9.875Z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBanFillIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
