import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-merge-or-split-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18.5045 14.4954 21 12m0 0-2.4955-2.49542M21 12h-5.9481m-9.49798 2.5539L3 12m0 0 2.55392-2.55392M3 12h5.83192m.16807 7V5H15v14H8.99999Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMergeOrSplitIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
