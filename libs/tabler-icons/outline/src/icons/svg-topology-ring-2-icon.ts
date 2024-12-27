import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-topology-ring-2-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-topology-ring-2"
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
      <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7 18h10" />
      <path d="M18 16l-5 -8" />
      <path d="M11 8l-5 8" />
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
export class SvgTopologyRing2Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
