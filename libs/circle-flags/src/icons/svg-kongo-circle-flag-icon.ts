import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kongo-circle-flag-icon',
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
        <path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
        <path fill="#d80027" d="M0 0h512v160H0Z" />
        <path fill="#ffda44" d="M0 352h512v160H0Z" />
        <path fill="#333" d="M144 423 256 79l112 344L75 211h362z" />
        <path fill="#eee" d="m175 381 81-250 81 250-213-154h264z" />
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
export class SvgKongoCircleFlagIcon {
  readonly class = input('');
}
