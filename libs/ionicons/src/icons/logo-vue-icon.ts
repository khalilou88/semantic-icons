import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-vue-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m256 144.03-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43z"
    />
    <svg:path
      d="M409.4 47.92 256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoVueIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
