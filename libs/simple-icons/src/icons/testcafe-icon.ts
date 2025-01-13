import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-testcafe-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>TestCafe</svg:title>
    <svg:path
      d="m20.315 4.319-8.69 8.719-3.31-3.322-2.069 2.076 5.379 5.398 10.76-10.796zM5.849 14.689 0 19.682h24l-5.864-4.991h-3.2l-1.024.896h3.584l3.072 2.815H3.417l3.072-2.815h2.688l-.896-.896z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTestcafeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#36B6E5');
}
