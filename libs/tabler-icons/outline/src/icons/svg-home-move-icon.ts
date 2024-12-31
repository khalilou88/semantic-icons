import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-home-move-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-home-move"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
      <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
      <path d="M16 19h6" />
      <path d="M19 16l3 3l-3 3" />
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
export class SvgHomeMoveIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
