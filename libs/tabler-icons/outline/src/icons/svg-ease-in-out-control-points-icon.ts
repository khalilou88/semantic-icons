import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ease-in-out-control-points-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-ease-in-out-control-points"
      [class]="classInput()"
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
      <path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
      <path d="M17 20h-2" />
      <path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
      <path d="M7 4h2" />
      <path d="M14 4h-2" />
      <path d="M12 20h-2" />
      <path d="M3 20c8 0 10 -16 18 -16" />
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
export class SvgEaseInOutControlPointsIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
