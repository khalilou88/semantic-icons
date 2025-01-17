import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-windows-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.001 2.5V21.5L3.00098 19.5V4.5L21.001 2.5ZM19.001 12.999L12.001 13V18.487L19.001 19.2655V12.999ZM5.00098 17.7099L10.001 18.265V13L5.00098 12.999V17.7099ZM19.001 10.999V4.73453L12.001 5.512V11L19.001 10.999ZM10.001 5.734L5.00098 6.29009V10.999L10.001 11V5.734Z"
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
export class SiWindowsLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
