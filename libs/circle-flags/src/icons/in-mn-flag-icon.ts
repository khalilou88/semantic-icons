import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-in-mn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v73L256 96 0 73Z" />
      <svg:path fill="#eee" d="M0 73h512v73l-256 23L0 146Z" />
      <svg:path fill="#333" d="M0 146h512v73l-256 23L0 219Z" />
      <svg:path fill="#ffda44" d="M0 219h512v74l-256 22L0 293Z" />
      <svg:path fill="#4a1f63" d="M0 293h512v73l-256 23L0 366Z" />
      <svg:path fill="#338af3" d="M0 366h512v73l-256 23L0 439Z" />
      <svg:path fill="#6da544" d="M0 439h512v73H0z" />
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
export class SiInMnFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
