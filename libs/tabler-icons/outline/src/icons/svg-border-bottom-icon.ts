import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-border-bottom-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-border-bottom"
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
      <path d="M20 20l-16 0" />
      <path d="M4 4l0 .01" />
      <path d="M8 4l0 .01" />
      <path d="M12 4l0 .01" />
      <path d="M16 4l0 .01" />
      <path d="M20 4l0 .01" />
      <path d="M4 8l0 .01" />
      <path d="M12 8l0 .01" />
      <path d="M20 8l0 .01" />
      <path d="M4 12l0 .01" />
      <path d="M8 12l0 .01" />
      <path d="M12 12l0 .01" />
      <path d="M16 12l0 .01" />
      <path d="M20 12l0 .01" />
      <path d="M4 16l0 .01" />
      <path d="M12 16l0 .01" />
      <path d="M20 16l0 .01" />
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
export class SvgBorderBottomIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
