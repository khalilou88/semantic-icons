import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-square-f9-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-square-f9"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-3.083 6h-1.5l-.144 .006a1.75 1.75 0 0 0 -1.606 1.744v1.5l.006 .144a1.75 1.75 0 0 0 1.744 1.606h1.25v1h-1.033l-.025 -.087a1 1 0 0 0 -1.942 .337c0 .966 .784 1.75 1.75 1.75h1.5l.144 -.006a1.75 1.75 0 0 0 1.606 -1.744v-4.5l-.006 -.144a1.75 1.75 0 0 0 -1.744 -1.606zm-5.25 0h-2l-.117 .007a1 1 0 0 0 -.883 .993v6l.007 .117a1 1 0 0 0 .993 .883l.117 -.007a1 1 0 0 0 .883 -.993v-2h1l.117 -.007a1 1 0 0 0 -.117 -1.993h-1v-1h1l.117 -.007a1 1 0 0 0 -.117 -1.993zm5 2v1h-1v-1h1z"
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
export class SvgSquareF9Icon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
