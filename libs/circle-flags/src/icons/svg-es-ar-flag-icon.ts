import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-es-ar-flag-icon',
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
          fill="#ffda44"
          d="M0 0v57l32 29-32 28v57l32 29-32 28v57l32 28-32 28v57l32 29-32 28v57h512v-57l-32-28 32-29v-57l-32-28 32-28v-57l-32-28 32-29v-57l-32-28 32-29V0H0z"
        />
        <path
          fill="#d80027"
          d="M0 57h512v57H0Zm0 114h512v57H0Zm0 114h512v56H0Zm0 113h512v57H0Z"
        />
        <path
          fill="#ff9811"
          d="M96 128v160l96 96c53 0 96-43 96-96l-48-48 48-48v-64h-28v32h-27v-32h-27v32h-28v-32h-27v32h-28v-32z"
        />
        <path fill="#0052b4" d="M192 192h96v96h-96z" />
        <path fill="#eee" d="M192 288v96a96 96 0 0 1-96-96Z" />
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
export class SvgEsArFlagIcon {
  readonly class = input('');
}
