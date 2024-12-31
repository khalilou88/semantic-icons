import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hacker-news-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3V21H21V3H3ZM12.6097 13.1032V17.1387H11.3323V13.0161L8.13871 6.83226H9.61935C11.7387 10.7516 11.5935 10.9258 12 11.8548C12.4935 10.7516 12.2032 10.8677 14.4677 6.83226H15.8613L12.6097 13.1032Z"
        fill="#323544"
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
export class SvgHackerNewsIcon {
  readonly class = input<string>('');
}
