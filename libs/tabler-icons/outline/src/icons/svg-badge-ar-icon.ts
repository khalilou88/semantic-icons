import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-badge-ar-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-badge-ar"
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
      <path
        d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
      />
      <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
      <path d="M7 13h3" />
      <path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
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
export class SvgBadgeArIcon {
  readonly class = input<string>('');
}
