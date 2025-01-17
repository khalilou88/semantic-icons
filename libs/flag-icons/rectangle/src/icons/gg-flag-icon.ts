import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h640v480H0z" />
    <svg:path fill="#e8112d" d="M256 0h128v480H256z" />
    <svg:path fill="#e8112d" d="M0 176h640v128H0z" />
    <svg:path
      id="gg-a"
      fill="#f9dd16"
      d="m110 286.7 23.3-23.4h210v-46.6h-210L110 193.3z"
    />
    <svg:use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="rotate(90 320 240)"
    />
    <svg:use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="rotate(-90 320 240)"
    />
    <svg:use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="rotate(180 320 240)"
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
export class SiGgFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
