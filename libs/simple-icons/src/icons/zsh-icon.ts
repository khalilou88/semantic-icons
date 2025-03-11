import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-zsh-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Zsh</svg:title>
    <svg:path
      d="M11.415 5.038a.58.58 0 0 0-.543.197L.135 18.021a.58.58 0 0 0 .071.814.58.58 0 0 0 .815-.07L11.757 5.979a.58.58 0 0 0-.07-.815.6.6 0 0 0-.272-.126m-8.113.317a3.133 3.133 0 0 0-3.12 3.12 3.13 3.13 0 0 0 3.12 3.119A3.133 3.133 0 0 0 6.42 8.475a3.13 3.13 0 0 0-3.119-3.119m0 1.806a1.3 1.3 0 0 1 1.314 1.313 1.3 1.3 0 0 1-1.314 1.312A1.3 1.3 0 0 1 1.99 8.475a1.3 1.3 0 0 1 1.312-1.314m5.253 5.253a3.13 3.13 0 0 0-3.119 3.119 3.13 3.13 0 0 0 3.12 3.118 3.133 3.133 0 0 0 3.118-3.12 3.133 3.133 0 0 0-3.119-3.118m0 1.805a1.3 1.3 0 0 1 1.313 1.314c0 .735-.577 1.312-1.312 1.312a1.3 1.3 0 0 1-1.314-1.312 1.3 1.3 0 0 1 1.313-1.314m7.201 3.276a.58.58 0 0 0-.578.578.58.58 0 0 0 .578.578h7.666a.58.58 0 0 0 .579-.578.58.58 0 0 0-.579-.578Z"
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
export class SiZshIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F15A24');
}
