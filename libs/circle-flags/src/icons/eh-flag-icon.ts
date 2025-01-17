import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-eh-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="m90.1 144.8 210.5-27.7L512 144.8v222.6l-209 32.4-213-32.4z"
      />
      <svg:path fill="#333" d="M0 0h512v144.8H28.2z" />
      <svg:path fill="#496e2d" d="M39.5 367.4H512V512H0z" />
      <svg:path
        fill="#d80027"
        d="M0 .1V512h.1L256 256.1 0 .1zm365.1 178.1a78 78 0 1 0 18.9 154 78 78 0 0 1 0-152.2 78.2 78.2 0 0 0-18.9-1.8z"
      />
      <svg:path
        fill="#d80027"
        d="m387.3 206.1 11 34h35.8l-29 21 11.1 34-29-21-28.9 21 11.1-34-29-21h35.8z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEhFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
