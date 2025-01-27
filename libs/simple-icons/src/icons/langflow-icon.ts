import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-langflow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Langflow</svg:title>
    <svg:path
      d="M9.755 1.52h-.001c-.31 0-.608.124-.828.343L4.037 6.752a1.17 1.17 0 0 1-.827.343H1.17A1.17 1.17 0 0 0 0 8.295l.052 1.984a1.17 1.17 0 0 0 1.17 1.14h2.37c.31 0 .607-.124.827-.344l4.93-4.93c.22-.22.517-.343.827-.343h2.874a1.17 1.17 0 0 0 1.17-1.17V2.69a1.17 1.17 0 0 0-1.17-1.17zm9.78 2.503c-.31 0-.608.123-.828.343l-4.889 4.889a1.17 1.17 0 0 1-.827.342h-2.756c-.31 0-.608.124-.827.344L4.15 15.197a1.17 1.17 0 0 1-.827.343H1.32a1.17 1.17 0 0 0-1.17 1.17v1.996c0 .646.524 1.17 1.17 1.17h2.017c.302 0 .592-.116.81-.325l5.535-5.304a1.17 1.17 0 0 1 .81-.326h2.88c.31 0 .607-.123.827-.342l4.93-4.93c.22-.22.517-.344.827-.344h2.873A1.17 1.17 0 0 0 24 7.135V5.193a1.17 1.17 0 0 0-1.17-1.17h-3.294zm0 8.559c-.31 0-.608.123-.828.343l-4.889 4.889a1.17 1.17 0 0 1-.827.343h-2.04a1.17 1.17 0 0 0-1.17 1.2l.052 1.984a1.17 1.17 0 0 0 1.17 1.14h2.37c.31 0 .607-.124.827-.343l4.93-4.93c.22-.22.517-.343.827-.343h2.873a1.17 1.17 0 0 0 1.17-1.17v-1.943a1.17 1.17 0 0 0-1.17-1.17h-3.294Z"
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
export class SiLangflowIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
