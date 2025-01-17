import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-crop-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17.5858 5L20.1421 2.44365L21.5563 3.85786L19 6.41421V17H22V19H19V22H17V7H9V5H17.5858ZM15 17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V17H15ZM9 9H15V15H9V9Z"
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
export class SiCrop2FillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
