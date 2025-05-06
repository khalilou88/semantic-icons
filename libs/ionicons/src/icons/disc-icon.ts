import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-disc-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 176a80 80 0 1 0 80 80 80.09 80.09 0 0 0-80-80m0 112a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
    />
    <svg:path
      d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61M256 368a112 112 0 1 1 112-112 112.12 112.12 0 0 1-112 112"
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
export class SiDiscIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
