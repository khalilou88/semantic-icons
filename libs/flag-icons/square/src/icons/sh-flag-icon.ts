import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sh-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#012169" d="M0 0h512v512H0z" />
    <svg:path
      fill="#FFF"
      d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
    />
    <svg:path
      fill="#C8102E"
      d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
    />
    <svg:path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z" />
    <svg:path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiShFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
