import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-coin-rupee-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-coin-rupee"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 3.66h-6c-1.287 0 -1.332 1.864 -.133 1.993l.133 .007h1a2 2 0 0 1 1.732 1h-2.732a1 1 0 0 0 0 2l2.732 .001a2 2 0 0 1 -1.732 .999h-1c-.89 0 -1.337 1.077 -.707 1.707l3 3a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-1.484 -1.485l.113 -.037a4.009 4.009 0 0 0 2.538 -2.77l1.126 -.001a1 1 0 0 0 0 -2h-1.126a3.973 3.973 0 0 0 -.33 -.855l-.079 -.145h1.535a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCoinRupeeIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
