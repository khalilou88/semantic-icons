import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-folder-close-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H13V19H4V5H9.58579L11.5858 7H20V12H22V6C22 5.44772 21.5523 5 21 5H12.4142L10.4142 3H3ZM20.4143 17.9999L22.5356 20.1212L21.1214 21.5354L19.0001 19.4141L16.8788 21.5354L15.4646 20.1212L17.5859 17.9999L15.4646 15.8786L16.8788 14.4644L19.0001 16.5857L21.1214 14.4644L22.5356 15.8786L20.4143 17.9999Z"
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
export class SiFolderCloseLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
