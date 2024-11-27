import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-password-mobile-phone-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-password-mobile-phone"
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
      <path d="M12 17v4" />
      <path d="M10 20l4 -2" />
      <path d="M10 18l4 2" />
      <path d="M5 17v4" />
      <path d="M3 20l4 -2" />
      <path d="M3 18l4 2" />
      <path d="M19 17v4" />
      <path d="M17 20l4 -2" />
      <path d="M17 18l4 2" />
      <path d="M7 14v-8a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8" />
      <path d="M11 5h2" />
      <path d="M12 17v.01" />
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
export class SvgPasswordMobilePhoneIcon {
  readonly class = input('');
}
