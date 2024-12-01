import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bell-electric-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <!-- @license lucide-static v0.462.0 - ISC -->
    <svg
      class="lucide lucide-bell-electric"
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
      <path d="M18.8 4A6.3 8.7 0 0 1 20 9" />
      <path d="M9 9h.01" />
      <circle cx="9" cy="9" r="7" />
      <rect width="10" height="6" x="4" y="16" rx="2" />
      <path d="M14 19c3 0 4.6-1.6 4.6-1.6" />
      <circle cx="20" cy="16" r="2" />
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
export class SvgBellElectricIcon {
  readonly class = input('');
}