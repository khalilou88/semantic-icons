import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-access-point-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-access-point-off"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3l18 18" />
      <path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />
      <path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />
      <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
      <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAccessPointOffIcon {
  readonly class = input<string>('');
}
