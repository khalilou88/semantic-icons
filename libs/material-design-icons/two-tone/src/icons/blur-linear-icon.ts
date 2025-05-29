import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-blur-linear-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 16.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
    />
    <svg:circle cx="9" cy="12" r="1" />
    <svg:circle cx="13" cy="8" r="1" />
    <svg:circle cx="13" cy="16" r="1" />
    <svg:path
      d="M17 12.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
    />
    <svg:circle cx="13" cy="12" r="1" />
    <svg:path d="M3 3h18v2H3z" />
    <svg:circle cx="5" cy="8" r="1.5" />
    <svg:circle cx="5" cy="12" r="1.5" />
    <svg:circle cx="5" cy="16" r="1.5" />
    <svg:path
      d="M17 8.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
    />
    <svg:circle cx="9" cy="16" r="1" />
    <svg:circle cx="9" cy="8" r="1" />
    <svg:path d="M3 19h18v2H3z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBlurLinearIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
