import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-curtains-closed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M6 5h3v14H6zm9 0h3v14h-3z" opacity=".3" />
    <svg:path
      d="M20 19V3H4v16H2v2h20v-2h-2zM9 19H6V5h3v14zm4 0h-2V5h2v14zm5 0h-3V5h3v14z"
    />
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
export class SiCurtainsClosedIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
