import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cone-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-cone"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125z"
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
export class SvgConeIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
