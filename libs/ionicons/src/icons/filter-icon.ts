import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-filter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48M392 280H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48M296 392h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48"
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
export class SiFilterIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
