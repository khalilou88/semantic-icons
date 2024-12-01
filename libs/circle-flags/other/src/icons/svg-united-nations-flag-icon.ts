import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-united-nations-flag-icon',
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
        <path fill="#338af3" d="M0 0h512v512H0z" />
        <circle cx="256" cy="256" r="145" fill="#eee" />
        <circle cx="256" cy="256" r="111" fill="#338af3" />
        <path fill="#338af3" d="M76 76h360L256 256z" />
        <circle cx="256" cy="256" r="89" fill="#eee" />
        <circle cx="256" cy="256" r="69" fill="#338af3" />
        <path fill="#eee" d="M246 178h20v156h-20z" />
        <path fill="#eee" d="M334 246v20H178v-20z" />
        <path fill="#eee" d="m304 193.7 14.2 14.2-110.3 110.3-14.2-14.1z" />
        <path fill="#eee" d="m318.2 304-14.1 14.2-110.4-110.3 14.2-14.2z" />
        <circle cx="256" cy="256" r="44" fill="#eee" />
        <circle cx="256" cy="256" r="22" fill="#338af3" />
        <ellipse cx="256" cy="412" fill="#eee" rx="44" ry="40" />
        <path fill="#338af3" d="m256 407-78 63h156z" />
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
export class SvgUnitedNationsFlagIcon {
  readonly class = input('');
}