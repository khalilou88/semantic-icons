import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fecb00" d="M0 0h512v512H0z" />
    <svg:path fill="#34b233" d="M0 170.7h512V512H0z" />
    <svg:path fill="#ea2839" d="M0 341.3h512V512H0z" />
    <svg:path
      id="mm-a"
      fill="#fff"
      stroke-width="188.7"
      d="M312.6 274H199.4L256 85.3Z"
    />
    <svg:use
      xlink:href="#mm-a"
      width="100%"
      height="100%"
      transform="rotate(-144 256 274)"
    />
    <svg:use
      xlink:href="#mm-a"
      width="100%"
      height="100%"
      transform="rotate(-72 256 274)"
    />
    <svg:use
      xlink:href="#mm-a"
      width="100%"
      height="100%"
      transform="rotate(72 256 274)"
    />
    <svg:use
      xlink:href="#mm-a"
      width="100%"
      height="100%"
      transform="rotate(144 256 274)"
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
export class SiMmFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
