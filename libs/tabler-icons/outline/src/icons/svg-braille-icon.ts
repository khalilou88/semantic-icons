import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-braille-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-braille"
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
      <path d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
      <path d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
      <path d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
      <path d="M16 12h.01" />
      <path d="M8 12h.01" />
      <path d="M16 19h.01" />
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
export class SvgBrailleIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
