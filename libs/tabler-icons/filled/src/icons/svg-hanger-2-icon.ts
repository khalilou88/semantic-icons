import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hanger-2-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-hanger-2"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2a3 3 0 0 1 3 3a1 1 0 0 1 -1.993 .117l-.007 -.117a1 1 0 0 0 -2 -.004c.006 1.516 .495 2.579 1.486 3.13l7.97 4.428a3 3 0 0 1 1.544 2.623v.823a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3a3 3 0 0 1 -3 -3v-.823a3 3 0 0 1 1.543 -2.623l6.695 -3.72c-.832 -.976 -1.232 -2.296 -1.238 -3.834a3 3 0 0 1 3 -3m0 8.144l-7.486 4.158a1 1 0 0 0 -.514 .875v.823a1 1 0 0 0 1 1h.17a3 3 0 0 1 2.83 -2h8c1.306 0 2.418 .835 2.83 2h.17a1 1 0 0 0 1 -1v-.823a1 1 0 0 0 -.515 -.875z"
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
export class SvgHanger2Icon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
