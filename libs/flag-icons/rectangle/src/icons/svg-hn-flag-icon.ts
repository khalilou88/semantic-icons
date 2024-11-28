import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hn-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-hn"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
    >
      <path fill="#18c3df" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <g id="hn-c" fill="#18c3df" transform="translate(320 240)scale(26.66665)">
        <g id="hn-b">
          <path id="hn-a" d="m-.3 0 .5.1L0-1z" />
          <use
            xlink:href="#hn-a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </g>
        <use
          xlink:href="#hn-b"
          width="100%"
          height="100%"
          transform="rotate(72)"
        />
        <use
          xlink:href="#hn-b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
        <use
          xlink:href="#hn-b"
          width="100%"
          height="100%"
          transform="rotate(144)"
        />
        <use
          xlink:href="#hn-b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
      </g>
      <use
        xlink:href="#hn-c"
        width="100%"
        height="100%"
        transform="translate(133.3 -42.7)"
      />
      <use
        xlink:href="#hn-c"
        width="100%"
        height="100%"
        transform="translate(133.3 37.3)"
      />
      <use
        xlink:href="#hn-c"
        width="100%"
        height="100%"
        transform="translate(-133.3 -42.7)"
      />
      <use
        xlink:href="#hn-c"
        width="100%"
        height="100%"
        transform="translate(-133.3 37.3)"
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
export class SvgHnFlagIcon {
  readonly class = input('');
}