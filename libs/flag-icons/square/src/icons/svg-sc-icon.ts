import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sc-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-sc"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0Z" />
      <path fill="#d92223" d="M0 512V0h512v170.7z" />
      <path fill="#fcd955" d="M0 512V0h341.3z" />
      <path fill="#003d88" d="M0 512V0h170.7z" />
      <path fill="#007a39" d="m0 512 512-170.7V512Z" />
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
export class SvgScIcon {
  readonly class = input('');
}
