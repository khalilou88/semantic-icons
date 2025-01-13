import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-beer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17 2a2 2 0 0 1 1.995 1.85l.005 .15v4c0 1.335 -.229 2.386 -.774 3.692l-.157 .363l-.31 .701a8.902 8.902 0 0 0 -.751 3.242l-.008 .377v3.625a2 2 0 0 1 -1.85 1.995l-.15 .005h-6a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3.625c0 -1.132 -.21 -2.25 -.617 -3.28l-.142 -.34l-.31 -.699c-.604 -1.358 -.883 -2.41 -.925 -3.698l-.006 -.358v-4a2 2 0 0 1 1.85 -1.995l.15 -.005h10zm0 2h-10v3h10v-3z"
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
export class SiBeerIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
