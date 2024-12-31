import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bn-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#ffda44"
          d="M0 0h512v326.7l-19.3 76.5 19.3 77.7V512H0V185.2l21.4-76.5L0 31z"
        />
        <path fill="#eee" d="M0 31v117.2l512 295.7V326.7L0 31z" />
        <path fill="#333" d="M0 108.2v77L512 481v-77L0 108.2z" />
        <g fill="#d80027">
          <path
            d="M328.3 228.2a72.3 72.3 0 1 1-136-34.4 89 89 0 1 0 127.3 0 72 72 0 0 1 8.7 34.4z"
          />
          <path d="M239.3 144.7h33.4v167h-33.4z" />
          <path
            d="M311.6 178H200.4c0 7.8 6.6 14 14.3 14h-.4a14 14 0 0 0 13.9 14 14 14 0 0 0 13.9 13.8h27.8a14 14 0 0 0 14-13.9 14 14 0 0 0 13.8-13.9h-.4c7.6 0 14.3-6.2 14.3-13.9zM178.1 322.9h155.8v33.4H178.1z"
          />
          <path d="M289.4 333.9h66.8v33.4h-66.8zm-133.6 0h66.8v33.4h-66.8z" />
        </g>
      </g>
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
export class SvgBnFlagIcon {
  readonly class = input<string>('');
}
