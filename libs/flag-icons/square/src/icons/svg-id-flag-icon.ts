import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-id-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-id"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#e70011" d="M0 0h512v256H0Z" />
      <path fill="#fff" d="M0 256h512v256H0Z" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIdFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
