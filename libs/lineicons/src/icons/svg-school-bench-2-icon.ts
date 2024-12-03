import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-school-bench-2-icon',
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
        d="M22 5.25C22 4.83579 21.6642 4.5 21.25 4.5C20.8358 4.5 20.5 4.83579 20.5 5.25V11.25H16.5C15.2574 11.25 14.25 12.2574 14.25 13.5V18.75C14.25 19.1642 14.5858 19.5 15 19.5C15.4142 19.5 15.75 19.1642 15.75 18.75V13.5C15.75 13.0858 16.0858 12.75 16.5 12.75H20.5V18.75C20.5 19.1642 20.8358 19.5 21.25 19.5C21.6642 19.5 22 19.1642 22 18.75V5.25Z"
        fill="#323544"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.87005 6.00967C2.653 5.97447 2.43143 6.0363 2.26397 6.1788C2.0965 6.3213 2 6.53011 2 6.75V18.75C2 19.1642 2.33579 19.5 2.75 19.5C3.16421 19.5 3.5 19.1642 3.5 18.75V11.3814L11.25 12.6382V18.75C11.25 19.1642 11.5858 19.5 12 19.5C12.4142 19.5 12.75 19.1642 12.75 18.75V8.25C12.75 7.88213 12.4832 7.56856 12.1201 7.50967L2.87005 6.00967ZM11.25 11.1186L3.5 9.86182V7.63142L11.25 8.88818V11.1186Z"
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
export class SvgSchoolBench2Icon {
  readonly class = input('');
}