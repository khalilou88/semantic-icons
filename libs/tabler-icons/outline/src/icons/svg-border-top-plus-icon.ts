import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-border-top-plus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-border-top-plus"
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
      <path d="M4 4h16" />
      <path d="M4 8v.01" />
      <path d="M20 8v.01" />
      <path d="M4 12v.01" />
      <path d="M20 12v.01" />
      <path d="M4 16v.01" />
      <path d="M15 12h-6" />
      <path d="M12 9v6" />
      <path d="M20 16v.01" />
      <path d="M4 20v.01" />
      <path d="M8 20v.01" />
      <path d="M12 20v.01" />
      <path d="M16 20v.01" />
      <path d="M20 20v.01" />
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
export class SvgBorderTopPlusIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
