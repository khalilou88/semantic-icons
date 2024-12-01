import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-en-us-flag-icon',
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
          d="M256 0 0 256v64l32 32-32 32v128l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0H256z"
        />
        <path
          fill="#d80027"
          d="M224 64v64h160l64-64zm0 128 32 64-48 48v208h96V304h208v-96H304l16-16zM0 320v64h128l-64 64H0v64h45l131-131v-45l16-16zm336 16 176 176v-45L381 336Z"
        />
        <path
          fill="#0052b4"
          d="M0 0v256h256V0H0zm512 68L404 176h108V68zM404 336l108 108V336H404zm-228 68L68 512h108V404zm160 0v108h108L336 404z"
        />
        <path
          fill="#eee"
          d="m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67Zm-81 0 57-41H12l57 41-22-67Z"
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
export class SvgEnUsFlagIcon {
  readonly class = input('');
}