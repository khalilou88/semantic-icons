import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-bus-stop-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-bus-stop"
      [ngClass]="class()"
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
      <path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
      <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" />
      <path d="M16 17h-8" />
      <path d="M16 5l1.5 7h4.5" />
      <path d="M9.5 10h7.5" />
      <path d="M12 5v5" />
      <path d="M5 9v11" />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBusStopIcon {
  readonly class = input('');
}
