import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-trowel-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-trowel"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M14.42 9.058l-5.362 5.363a1.978 1.978 0 0 1 -3.275 -.773l-2.682 -8.044a1.978 1.978 0 0 1 2.502 -2.502l8.045 2.682a1.978 1.978 0 0 1 .773 3.274z"
      />
      <path d="M10 10l6.5 6.5" />
      <path
        d="M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTrowelIcon {
  readonly class = input<string>('');
}
