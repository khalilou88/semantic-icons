import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pencil-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M103 464H48v-55L358.14 98.09l55.77 55.78zM425.72 142 370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.9 25.9 0 0 1 18.42 7.62l17 17A25.87 25.87 0 0 1 464 91c0 7-2.71 14.45-7.62 19.36Zm-7.52-70.83"
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
export class SiPencilSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
