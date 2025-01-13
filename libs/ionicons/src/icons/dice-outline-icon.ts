import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dice-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
    />
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M69 153.99l187 110 187-110M256 463.99v-200"
    />
    <svg:ellipse cx="256" cy="152" rx="24" ry="16" />
    <svg:ellipse cx="208" cy="296" rx="16" ry="24" />
    <svg:ellipse cx="112" cy="328" rx="16" ry="24" />
    <svg:ellipse cx="304" cy="296" rx="16" ry="24" />
    <svg:ellipse cx="400" cy="240" rx="16" ry="24" />
    <svg:ellipse cx="304" cy="384" rx="16" ry="24" />
    <svg:ellipse cx="400" cy="328" rx="16" ry="24" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDiceOutlineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
