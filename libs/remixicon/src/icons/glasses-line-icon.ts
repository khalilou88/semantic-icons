import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-glasses-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C7.65685 15 9 13.6569 9 12C9 11.3629 8.8025 10.7748 8.46538 10.29C7.92183 9.50831 7.02019 9 6 9ZM1 12C1 9.23858 3.23858 7 6 7C7.21392 7 8.32661 7.43307 9.19203 8.1515C9.91366 7.44003 10.905 7 12 7C13.095 7 14.0863 7.44003 14.808 8.1515C15.6734 7.43307 16.7861 7 18 7C20.7614 7 23 9.23858 23 12C23 14.7614 20.7614 17 18 17C15.2386 17 13 14.7614 13 12C13 11.1835 13.1964 10.411 13.5445 9.72905C13.177 9.28296 12.6209 9 12 9C11.3791 9 10.823 9.28296 10.4555 9.72905C10.8036 10.411 11 11.1835 11 12C11 14.7614 8.76142 17 6 17C3.23858 17 1 14.7614 1 12ZM18 9C16.9798 9 16.0782 9.50831 15.5346 10.29C15.1975 10.7748 15 11.3629 15 12C15 13.6569 16.3431 15 18 15C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGlassesLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
