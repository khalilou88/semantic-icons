import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-transition-bottom-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-transition-bottom"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M21 17a1 1 0 0 1 1 1a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4a1 1 0 0 1 2 0a2 2 0 0 0 2 2h12a2 2 0 0 0 1.995 -1.85l.005 -.15a1 1 0 0 1 1 -1m-9 1l-.082 -.004l-.119 -.016l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-4.586h-5a4 4 0 1 1 0 -8h12a4 4 0 1 1 0 8h-5v4.583l1.293 -1.29a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3l-.112 .097l-.11 .071l-.062 .031l-.081 .034l-.076 .024l-.149 .03z"
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
export class SvgTransitionBottomIcon {
  readonly class = input<string>('');
}
