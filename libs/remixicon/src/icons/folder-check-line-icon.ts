import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-folder-check-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H13V19H4V5H9.58579L11.5858 7H20V13H22V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3ZM15.4645 18.4647L19 22.0002L23.9497 17.0505L22.5355 15.6362L19 19.1718L16.8787 17.0505L15.4645 18.4647Z"
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
export class SiFolderCheckLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
