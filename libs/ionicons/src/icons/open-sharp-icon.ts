import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-open-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M201.37 288l176-176H48v352h352V134.63l-176 176L201.37 288z" />
    <svg:path d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48H320z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOpenSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
