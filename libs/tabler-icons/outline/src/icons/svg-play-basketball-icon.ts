import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-play-basketball-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-play-basketball"
      [class]="svgClass()"
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
      <path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M5 21l3 -3l.75 -1.5" />
      <path d="M14 21v-4l-4 -3l.5 -6" />
      <path d="M5 12l1 -3l4.5 -1l3.5 3l4 1" />
      <path
        d="M18.5 16a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z"
        fill="currentColor"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPlayBasketballIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
