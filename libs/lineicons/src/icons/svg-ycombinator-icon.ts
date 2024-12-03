import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ycombinator-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3V21H21V3H3ZM12.6097 13.2194V16.9355H11.4194V13.2194L8.28387 7.38387H9.70645C9.70645 7.38387 12 12.0581 12.029 12.1161C12.0581 11.9129 14.4097 7.4129 14.4097 7.4129H15.7161L12.6097 13.2194Z"
        fill="#323544"
      />
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
export class SvgYcombinatorIcon {
  readonly class = input('');
}