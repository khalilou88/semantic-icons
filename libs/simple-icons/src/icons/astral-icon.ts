import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-astral-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Astral</svg:title>
    <svg:path
      d="M1.44 0C.6422 0 0 .6422 0 1.44v21.12C0 23.3578.6422 24 1.44 24h21.12c.7978 0 1.44-.6422 1.44-1.44V1.44C24 .6422 23.3578 0 22.56 0Zm4.7998 4.8h11.5199c.7953 0 1.44.6447 1.44 1.44V19.2h-6.624v-4.32h-1.152v4.32H4.8V6.24c0-.7953.6446-1.44 1.4398-1.44m4.032 5.472v1.152h3.456v-1.152z"
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
export class SiAstralIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#261230');
}
