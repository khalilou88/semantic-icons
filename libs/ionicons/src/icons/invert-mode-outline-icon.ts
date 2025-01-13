import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-invert-mode-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
      cx="256"
      cy="256"
      r="208"
    />
    <svg:path
      d="M256 176v160a80 80 0 010-160zM256 48v128a80 80 0 010 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48z"
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
export class SiInvertModeOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
