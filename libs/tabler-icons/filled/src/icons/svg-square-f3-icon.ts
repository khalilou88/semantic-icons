import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-square-f3-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-square-f3"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-3.833 6h-1l-.144 .007a1.5 1.5 0 0 0 -1.356 1.493a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .727 -.457l.02 -.036h.636l.09 .008a.5 .5 0 0 1 0 .984l-.09 .008h-.5l-.133 .007c-1.156 .124 -1.156 1.862 0 1.986l.133 .007h.5l.09 .008a.5 .5 0 0 1 .41 .492l-.008 .09a.5 .5 0 0 1 -.492 .41h-.635l-.02 -.036a1 1 0 0 0 -1.845 .536a1.5 1.5 0 0 0 1.5 1.5h1l.164 -.005a2.5 2.5 0 0 0 2.336 -2.495l-.005 -.164a2.487 2.487 0 0 0 -.477 -1.312l-.019 -.024l.126 -.183a2.5 2.5 0 0 0 -2.125 -3.817zm-4.5 0h-2l-.117 .007a1 1 0 0 0 -.883 .993v6l.007 .117a1 1 0 0 0 .993 .883l.117 -.007a1 1 0 0 0 .883 -.993v-2h1l.117 -.007a1 1 0 0 0 -.117 -1.993h-1v-1h1l.117 -.007a1 1 0 0 0 -.117 -1.993z"
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
export class SvgSquareF3Icon {
  readonly class = input<string>('');
}
