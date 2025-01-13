import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ban-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="48"
      cx="256"
      cy="256"
      r="200"
    />
    <svg:path
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="48"
      d="M114.58 114.58l282.84 282.84"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBanIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
