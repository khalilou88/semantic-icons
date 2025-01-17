import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-arrow-undo-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm97.67 281.1c-24.07-25.21-51.51-38.68-108.58-38.68v37.32a8.32 8.32 0 01-14.05 6L146.58 254a8.2 8.2 0 010-11.94L231 162.29a8.32 8.32 0 0114.05 6v37.32c88.73 0 117.42 55.64 122.87 117.09.73 7.72-8.85 12.05-14.25 6.4z"
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
export class SiArrowUndoCircleIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
