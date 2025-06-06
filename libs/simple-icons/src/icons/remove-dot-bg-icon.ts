import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-remove-dot-bg-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>remove.bg</svg:title>
    <svg:path
      d="m23.729 13.55-1.903-.995-9.134 4.776a1.497 1.497 0 0 1-1.383.002l-9.137-4.778-1.903.995a.5.5 0 0 0 0 .888l11.499 6.011a.495.495 0 0 0 .462 0l11.499-6.011a.5.5 0 0 0 0-.888zM.269 10.447l11.499 6.013a.495.495 0 0 0 .462 0l11.499-6.013a.5.5 0 0 0 0-.887l-11.5-6.012a.505.505 0 0 0-.462 0L.268 9.559a.5.5 0 0 0 .001.887z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRemoveDotBgIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#54616C');
}
