import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-log-out-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M160 240h160V96a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V272H160ZM459.31 244.69 368 153.37 345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 0 0 0-22.62"
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
export class SiLogOutSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
