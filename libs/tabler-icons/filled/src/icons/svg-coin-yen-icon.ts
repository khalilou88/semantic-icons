import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-coin-yen-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-coin-yen"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.445 3.828a1 1 0 0 0 -1.387 .277l-2.168 3.251l-2.168 -3.25a1 1 0 0 0 -1.286 -.337l-.1 .059a1 1 0 0 0 -.278 1.387l1.63 2.445h-.798a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v1h-2a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v1a1 1 0 0 0 .883 .993l.117 .007l.117 -.007a1 1 0 0 0 .883 -.993v-1h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-1h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-.799l1.631 -2.445a1 1 0 0 0 -.184 -1.317l-.093 -.07z"
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
export class SvgCoinYenIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
