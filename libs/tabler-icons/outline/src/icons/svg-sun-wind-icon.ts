import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sun-wind-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-sun-wind"
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
      <path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
      <path d="M2 12h1" />
      <path d="M11 3v1" />
      <path d="M11 20v1" />
      <path d="M4.6 5.6l.7 .7" />
      <path d="M17.4 5.6l-.7 .7" />
      <path d="M5.3 17.7l-.7 .7" />
      <path d="M15 13h5a2 2 0 1 0 0 -4" />
      <path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
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
export class SvgSunWindIcon {
  readonly class = input<string>('');
}
