import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-apps-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M104 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M256 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M408 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M104 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M256 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M408 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M104 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M256 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M408 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
