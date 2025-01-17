import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-folder-shield-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 10H12V17.3823C12 18.7906 12.6315 20.1159 13.7054 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V10ZM14 12H22V17.3823C22 18.2786 21.5544 19.1156 20.8125 19.6128L18 21.4978L15.1875 19.6128C14.4456 19.1156 14 18.2786 14 17.3823V12Z"
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
export class SiFolderShield2FillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
