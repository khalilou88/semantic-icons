import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-atom-2-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-atom-2"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
      <path
        d="M12 20a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"
      />
      <path
        d="M3 8a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"
      />
      <path
        d="M21 8a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z"
      />
      <path
        d="M2.89 12.006a1 1 0 0 1 1.104 .884a8 8 0 0 0 4.444 6.311a1 1 0 1 1 -.876 1.799a10 10 0 0 1 -5.556 -7.89a1 1 0 0 1 .884 -1.103z"
      />
      <path
        d="M20.993 12l.117 .006a1 1 0 0 1 .884 1.104a10 10 0 0 1 -5.556 7.889a1 1 0 1 1 -.876 -1.798a8 8 0 0 0 4.444 -6.31a1 1 0 0 1 .987 -.891z"
      />
      <path
        d="M5.567 4.226a10 10 0 0 1 12.666 0a1 1 0 1 1 -1.266 1.548a8 8 0 0 0 -10.134 0a1 1 0 1 1 -1.266 -1.548z"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAtom2Icon {
  readonly class = input('');
}
