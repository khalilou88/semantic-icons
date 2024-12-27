import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-binary-tree-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-binary-tree"
      [class]="svgClass()"
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
      <path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M5.058 18.306l2.88 -4.606" />
      <path d="M10.061 10.303l2.877 -4.604" />
      <path d="M10.065 13.705l2.876 4.6" />
      <path d="M15.063 5.7l2.881 4.61" />
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
export class SvgBinaryTreeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
