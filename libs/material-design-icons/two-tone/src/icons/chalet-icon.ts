import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chalet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M13 18h-2v-3H9v3H7v-4.67l3-3 3 3z" opacity=".3" />
    <svg:path
      d="M17.5 15 10 7.5 2.5 15l1.41 1.41L5 15.33V20h10v-4.67l1.09 1.09L17.5 15zM13 18h-2v-3H9v3H7v-4.67l3-3 3 3V18zm9-10.5h-1.19l.75.75-.71.71-1.46-1.46h-.89v.89l1.45 1.45-.71.71-.74-.74V11h-1V9.81l-.75.75-.71-.71 1.45-1.45v-.9h-.89l-1.45 1.45-.71-.71.75-.75H14v-1h1.19l-.75-.75.71-.71 1.45 1.45h.89v-.87l-1.45-1.45.71-.71.75.75V3h1v1.19l.75-.75.71.71-1.46 1.46v.89h.89l1.45-1.45.71.71-.74.74H22v1z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChaletIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
