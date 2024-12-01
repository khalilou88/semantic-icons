import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-us-dc-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#eee"
          d="M0 0h512v186l-64 48 64 48v57l-64 48 64 48v77H0v-77l64-48-64-48v-57l64-48-64-48Z"
        />
        <path
          fill="#d80027"
          d="M0 186h512v96H0zm0 153h512v96H0zm224-181 83-60H205l83 60-32-98Zm118 0 83-60H323l83 60-32-98Zm-236 0 83-60H87l83 60-32-98Z"
        />
      </g>
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
export class SvgUsDcFlagIcon {
  readonly class = input('');
}