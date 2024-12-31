import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-zodiac-virgo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-virgo"
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
      <path d="M3 4a2 2 0 0 1 2 2v9" />
      <path d="M5 6a2 2 0 0 1 4 0v9" />
      <path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
      <path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" />
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
export class SvgZodiacVirgoIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
