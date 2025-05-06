import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-bandage-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      width="560.87"
      height="176.25"
      x="-24.43"
      y="167.88"
      rx="88.12"
      ry="88.12"
      transform="rotate(-45 256 256.002)"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:rect
      width="176"
      height="196"
      x="169.41"
      y="156.59"
      rx="32"
      ry="32"
      transform="rotate(45 257.409 254.582)"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:circle cx="256" cy="208" r="16" />
    <svg:circle cx="304" cy="256" r="16" />
    <svg:circle cx="208" cy="256" r="16" />
    <svg:circle cx="256" cy="304" r="16" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBandageOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
