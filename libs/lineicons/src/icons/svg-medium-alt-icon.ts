import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-medium-alt-icon',
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
        d="M7.64516 6.32227C10.7742 6.32227 13.2903 8.87065 13.2903 11.9997C13.2903 15.1287 10.7419 17.6771 7.64516 17.6771C4.54839 17.6771 2 15.1287 2 11.9997C2 8.87065 4.54839 6.32227 7.64516 6.32227ZM16.6452 6.64485C18.1935 6.64485 19.4516 9.0642 19.4516 11.9997C19.4516 14.9674 18.1935 17.3545 16.6452 17.3545C15.0968 17.3545 13.8387 14.9352 13.8387 11.9997C13.8387 9.0642 15.0968 6.64485 16.6452 6.64485ZM21 7.22549C21.5484 7.22549 22 9.35452 22 11.9997C22 14.6448 21.5484 16.7739 21 16.7739C20.4516 16.7739 20 14.6448 20 11.9997C20 9.35452 20.4516 7.22549 21 7.22549Z"
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
export class SvgMediumAltIcon {
  readonly class = input('');
}