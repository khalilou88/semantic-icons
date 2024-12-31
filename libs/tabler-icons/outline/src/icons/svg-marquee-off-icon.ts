import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-marquee-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-marquee-off"
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
      <path d="M4 6c0 -.556 .227 -1.059 .593 -1.421" />
      <path d="M9 4h1.5" />
      <path d="M13.5 4h1.5" />
      <path d="M18 4a2 2 0 0 1 2 2" />
      <path d="M20 9v1.5" />
      <path d="M20 13.5v1.5" />
      <path d="M19.402 19.426a1.993 1.993 0 0 1 -1.402 .574" />
      <path d="M15 20h-1.5" />
      <path d="M10.5 20h-1.5" />
      <path d="M6 20a2 2 0 0 1 -2 -2" />
      <path d="M4 15v-1.5" />
      <path d="M4 10.5v-1.5" />
      <path d="M3 3l18 18" />
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
export class SvgMarqueeOffIcon {
  readonly class = input<string>('');
}
