import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-film-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M480 80H32v352h448zM112 352v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm256 160H144v-32h224zm80 80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48z"
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
export class SiFilmSharpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
