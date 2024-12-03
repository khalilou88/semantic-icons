import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dropbox-icon',
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
        d="M2 13.0317L7 16.2253L12 13.0317L7 9.87046L2 13.0317Z"
        fill="#323544"
      />
      <path
        d="M6.96743 17.3221L11.9997 20.5157L16.9997 17.3221L11.9997 14.1286L6.96743 17.3221Z"
        fill="#323544"
      />
      <path
        d="M12 13.0317L17 16.2253L22 13.0317L17 9.87046L12 13.0317Z"
        fill="#323544"
      />
      <path
        d="M7 3.4834L2 6.67694L7 9.87046L12 6.67694L7 3.4834Z"
        fill="#323544"
      />
      <path
        d="M22 6.67694L17 3.4834L12 6.67694L17 9.87046L22 6.67694Z"
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
export class SvgDropboxIcon {
  readonly class = input('');
}