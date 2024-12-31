import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dk-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-dk"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#c8102e" d="M0 0h640.1v480H0z" />
      <path fill="#fff" d="M205.7 0h68.6v480h-68.6z" />
      <path fill="#fff" d="M0 205.7h640.1v68.6H0z" />
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
export class SvgDkFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
