import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-corner-right-down-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.9999 4.99989L5.00003 4.99976L5 6.99976L11.9999 6.99986L12 14.5859H6.58581L13 21.0001L19.4142 14.5859L14 14.5859L13.9999 4.99989Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCornerRightDownFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
