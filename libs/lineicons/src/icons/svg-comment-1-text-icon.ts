import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-comment-1-text-icon',
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
        d="M7.00002 10.5967C7.00002 10.1825 7.33581 9.84668 7.75002 9.84668H16.25C16.6642 9.84668 17 10.1825 17 10.5967C17 11.0109 16.6642 11.3467 16.25 11.3467H7.75002C7.33581 11.3467 7.00002 11.0109 7.00002 10.5967Z"
        fill="#323544"
      />
      <path
        d="M7.75002 12.8467C7.33581 12.8467 7.00002 13.1825 7.00002 13.5967C7.00002 14.0109 7.33581 14.3467 7.75002 14.3467H12.75C13.1642 14.3467 13.5 14.0109 13.5 13.5967C13.5 13.1825 13.1642 12.8467 12.75 12.8467H7.75002Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.50002 12.0957C2.50002 6.849 6.75332 2.5957 12 2.5957C17.2467 2.5957 21.5 6.849 21.5 12.0957C21.5 17.3424 17.2467 21.5957 12 21.5957H3.25002C2.94668 21.5957 2.6732 21.413 2.55711 21.1327C2.44103 20.8525 2.50519 20.5299 2.71969 20.3154L4.77303 18.262C3.35633 16.603 2.50002 14.4488 2.50002 12.0957ZM12 4.0957C7.58174 4.0957 4.00002 7.67742 4.00002 12.0957C4.00002 14.305 4.89463 16.304 6.34317 17.7526C6.48382 17.8932 6.56284 18.084 6.56284 18.2829C6.56284 18.4818 6.48382 18.6726 6.34317 18.8132L5.06068 20.0957H12C16.4183 20.0957 20 16.514 20 12.0957C20 7.67742 16.4183 4.0957 12 4.0957Z"
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
export class SvgComment1TextIcon {
  readonly class = input('');
}