import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mv-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-mv"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#d21034" d="M0 0h640v480H0z" />
      <path fill="#007e3a" d="M120 120h400v240H120z" />
      <circle cx="350" cy="240" r="80" fill="#fff" />
      <circle cx="380" cy="240" r="80" fill="#007e3a" />
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
export class SvgMvIcon {
  readonly class = input('');
}
