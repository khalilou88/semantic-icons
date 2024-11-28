import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-at-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-at"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <path fill="#c8102e" d="M0 0h512v170.7H0zm0 341.3h512V512H0z" />
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
export class SvgAtIcon {
  readonly class = input('');
}
