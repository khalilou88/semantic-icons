import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-code-working-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle
      cx="256"
      cy="256"
      r="26"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="10"
    />
    <svg:circle
      cx="346"
      cy="256"
      r="26"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="10"
    />
    <svg:circle
      cx="166"
      cy="256"
      r="26"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="10"
    />
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="42"
      d="M160 368L32 256l128-112M352 368l128-112-128-112"
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
export class SiCodeWorkingIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
