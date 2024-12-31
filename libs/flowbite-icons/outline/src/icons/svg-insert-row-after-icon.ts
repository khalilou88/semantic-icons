import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-insert-row-after-icon',
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
        d="M3 9V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44771 1 1v3M3 9v9c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1V9M3 9h18M8 9V5m4 4V5m4 4V5m-6 9h2m0 0h2m-2 0v-2m0 2v2"
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
export class SvgInsertRowAfterIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
