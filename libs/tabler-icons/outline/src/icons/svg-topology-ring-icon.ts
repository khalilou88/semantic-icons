import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-topology-ring-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-topology-ring"
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
      <path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M13.5 5.5l5 5" />
      <path d="M5.5 13.5l5 5" />
      <path d="M13.5 18.5l5 -5" />
      <path d="M10.5 5.5l-5 5" />
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
export class SvgTopologyRingIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
