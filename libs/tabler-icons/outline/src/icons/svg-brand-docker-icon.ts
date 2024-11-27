import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-brand-docker-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-docker"
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
      <path
        d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z"
      />
      <path d="M5 10h3v3h-3z" />
      <path d="M8 10h3v3h-3z" />
      <path d="M11 10h3v3h-3z" />
      <path d="M8 7h3v3h-3z" />
      <path d="M11 7h3v3h-3z" />
      <path d="M11 4h3v3h-3z" />
      <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
      <path d="M10 16l0 .01" />
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
export class SvgBrandDockerIcon {
  readonly class = input('');
}
