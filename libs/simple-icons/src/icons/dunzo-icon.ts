import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-dunzo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Dunzo</svg:title>
    <svg:path
      d="M2.75 0A2.744 2.744 0 0 0 0 2.75v18.5A2.744 2.744 0 0 0 2.75 24h18.5A2.744 2.744 0 0 0 24 21.25V2.75A2.744 2.744 0 0 0 21.25 0Zm9.902 5.506c.91.006 1.781.197 2.594.605-.891 1.87-1.888 3.8-2.832 5.682-.017.029-.086.13-.225.031-.8-.638-1.581-1.304-2.369-1.959-.223-.195-.442-.105-.55.133-.515 1.027-.952 1.883-1.465 2.91-.7 1.398-1.398 2.673-2.098 4.07-.064.142-.143.043-.143.043.538-3.258 1.643-10.807 1.717-11.1.055-.213.183-.36.42-.394.09-.012.18-.023.27-.023ZM17.78 8c.01-.003.016.022.045.082.48.935.803 2.554.487 4.238-.25 1.328-.849 2.487-1.737 3.512a7.715 7.715 0 0 1-3.224 2.207c-.735.268-1.498.362-2.288.361H6.275c-.654 0-.725-.224-.709-.238a923.24 923.24 0 0 1 4.309-5.906c.235-.258.417-.022.668.224 1.105.957 2.139 1.826 2.28 1.94.08.066.163.051.222-.033A971.241 971.241 0 0 1 17.779 8z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDunzoIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00D290');
}
