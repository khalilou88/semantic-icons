import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-label-important-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-label-important"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M16.52 6a2 2 0 0 1 1.561 .75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624a2 2 0 0 1 -1.561 .751h-12.52a1 1 0 0 1 -.78 -1.625l3.5 -4.375l-3.5 -4.375a1 1 0 0 1 .668 -1.62l.112 -.005z"
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
export class SvgLabelImportantIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
