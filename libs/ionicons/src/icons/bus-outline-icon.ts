import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bus-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      x="80"
      y="112"
      width="352"
      height="192"
      rx="32"
      ry="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="80"
      y="304"
      width="352"
      height="128"
      rx="32"
      ry="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:path
      d="M400 112H112a32.09 32.09 0 01-32-32h0a32.09 32.09 0 0132-32h288a32.09 32.09 0 0132 32h0a32.09 32.09 0 01-32 32zM144 432v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22zM416 432v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22z"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:circle
      cx="368"
      cy="368"
      r="16"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:circle
      cx="144"
      cy="368"
      r="16"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M256 112v192M80 80v288M432 80v288"
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
export class SiBusOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
