import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cylinder-plus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-cylinder-plus"
      [class]="class()"
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
      <path d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
      <path
        d="M5 6v12c0 1.657 3.134 3 7 3c.173 0 .345 -.003 .515 -.008m6.485 -8.992v-6"
      />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCylinderPlusIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
