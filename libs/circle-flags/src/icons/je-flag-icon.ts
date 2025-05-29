import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-je-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 47.1 47 0h417.8L512 47.2v417.7L464.9 512H47L0 464.9z"
      />
      <svg:path
        fill="#d80027"
        d="M0 0v47.1L208.8 256 0 464.9V512h47.1L256 303.2 464.9 512H512v-47L303.1 256 512 47.2V0h-47.2L256 208.9 47 0z"
      />
      <svg:path
        fill="#ffda44"
        d="M211.5 78 256 89l44.5-11V40l-17.8 9L256 22.3 229.3 49l-17.8-9z"
      />
      <svg:path
        fill="#d80027"
        d="M211.5 78v27.7c0 34.1 44.5 44.6 44.5 44.6s44.5-10.5 44.5-44.6V78z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJeFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
