import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-an-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 0h171l85 32 85-32h171v171l-32 85 32 85v171H341l-85-32-85 32H0V341l32-85-32-85Z"
      />
      <svg:path fill="#d80027" d="M171 0h170v512H171z" />
      <svg:path fill="#0052b4" d="M512 171v170H0V171z" />
      <svg:path
        fill="#eee"
        d="m236 247 52-37h-64l52 37-20-61zm-45 79 52-37h-64l52 37-20-61zm90 0 52-37h-64l52 37-20-61zm74-47 52-37h-64l52 37-20-61zm-238 0 52-37h-64l52 37-20-61z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAnFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
