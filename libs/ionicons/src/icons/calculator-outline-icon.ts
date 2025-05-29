import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-calculator-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="288"
      height="416"
      x="112"
      y="48"
      rx="32"
      ry="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:path
      d="M160.01 112H352v64H160.01z"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:circle cx="168" cy="248" r="24" />
    <svg:circle cx="256" cy="248" r="24" />
    <svg:circle cx="344" cy="248" r="24" />
    <svg:circle cx="168" cy="328" r="24" />
    <svg:circle cx="256" cy="328" r="24" />
    <svg:circle cx="168" cy="408" r="24" />
    <svg:circle cx="256" cy="408" r="24" />
    <svg:rect width="48" height="128" x="320" y="304" rx="24" ry="24" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCalculatorOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
