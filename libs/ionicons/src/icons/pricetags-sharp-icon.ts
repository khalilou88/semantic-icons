import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pricetags-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M288 16 0 304l176 176 288-288V16Zm80 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32"
    />
    <svg:path d="M480 64v144L216.9 471.1 242 496l270-272V64z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPricetagsSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
