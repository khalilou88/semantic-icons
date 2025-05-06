import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-radio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="256" cy="256" r="36" />
    <svg:path
      d="M190.24 341.77a22 22 0 0 1-16.46-7.38 118 118 0 0 1 0-156.76 22 22 0 1 1 32.87 29.24 74 74 0 0 0 0 98.29 22 22 0 0 1-16.43 36.61ZM321.76 341.77a22 22 0 0 1-16.43-36.61 74 74 0 0 0 0-98.29 22 22 0 1 1 32.87-29.24 118 118 0 0 1 0 156.76 22 22 0 0 1-16.44 7.38"
    />
    <svg:path
      d="M139.29 392.72a21.92 21.92 0 0 1-16.08-7 190 190 0 0 1 0-259.49 22 22 0 1 1 32.13 30.06 146 146 0 0 0 0 199.38 22 22 0 0 1-16.06 37ZM372.71 392.72a22 22 0 0 1-16.06-37 146 146 0 0 0 0-199.38 22 22 0 1 1 32.13-30.06 190 190 0 0 1 0 259.49 21.92 21.92 0 0 1-16.07 6.95"
    />
    <svg:path
      d="M429 438a22 22 0 0 1-16.39-36.67 218.34 218.34 0 0 0 0-290.66 22 22 0 0 1 32.78-29.34 262.34 262.34 0 0 1 0 349.34A22 22 0 0 1 429 438M83 438a21.94 21.94 0 0 1-16.41-7.33 262.34 262.34 0 0 1 0-349.34 22 22 0 0 1 32.78 29.34 218.34 218.34 0 0 0 0 290.66A22 22 0 0 1 83 438"
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
export class SiRadioIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
