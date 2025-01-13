import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-table-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a1 1 0 0 1 1 -1z"
    />
    <svg:path
      d="M21 12v6a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1z"
    />
    <svg:path
      d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h6z"
    />
    <svg:path
      d="M9 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2a1 1 0 0 1 1 1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTableIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
