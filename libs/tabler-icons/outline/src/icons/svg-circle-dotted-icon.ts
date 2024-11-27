import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-circle-dotted-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-circle-dotted"
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
      <path d="M7.5 4.21l0 .01" />
      <path d="M4.21 7.5l0 .01" />
      <path d="M3 12l0 .01" />
      <path d="M4.21 16.5l0 .01" />
      <path d="M7.5 19.79l0 .01" />
      <path d="M12 21l0 .01" />
      <path d="M16.5 19.79l0 .01" />
      <path d="M19.79 16.5l0 .01" />
      <path d="M21 12l0 .01" />
      <path d="M19.79 7.5l0 .01" />
      <path d="M16.5 4.21l0 .01" />
      <path d="M12 3l0 .01" />
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
export class SvgCircleDottedIcon {
  readonly class = input('');
}
