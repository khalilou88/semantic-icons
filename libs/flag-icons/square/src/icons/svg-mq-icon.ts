import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mq-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-mq"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#231f1e" d="M0 0h512v512H0z" />
      <path fill="#00a650" d="M0 0h512v256H0z" />
      <path fill="#ef1923" d="M256 256 0 512V0z" />
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
export class SvgMqIcon {
  readonly class = input('');
}
