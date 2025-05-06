import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-code-working-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="256" cy="256" r="26" />
    <svg:circle cx="346" cy="256" r="26" />
    <svg:circle cx="166" cy="256" r="26" />
    <svg:path
      d="M160 368 32 256l128-112M352 368l128-112-128-112"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
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
export class SiCodeWorkingOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
