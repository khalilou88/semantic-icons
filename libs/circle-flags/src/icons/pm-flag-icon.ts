import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#338af3" d="M160 0h352v512H160l-32-256z" />
      <svg:path fill="#eee" d="m0 160 80-32 80 32v192l-80 32-80-32z" />
      <svg:rect width="160" height="160" fill="#d80027" ry="0" />
      <svg:path fill="#6da544" d="M160 21V0h-20L0 139v21h20z" />
      <svg:path fill="#6da544" d="M0 21V0h20l140 139v21h-20z" />
      <svg:path fill="#eee" d="M0 64h160v32H0z" />
      <svg:path fill="#eee" d="M64 0h32v160H64z" />
      <svg:path fill="#d80027" d="M0 512h160V352H0z" />
      <svg:path
        fill="#ffda44"
        d="M340 146v158h-40c-24 0-24-32-24-32h-96v32h20l147 32 145-32v-24h-80s0 24-24 24h-32V146z"
      />
      <svg:path
        fill="#ffda44"
        d="M356 138v32c-31-11-61 8-80-32 33 23 51-10 80 0zm-72 46s-24 24-16 72h-72s32-56 88-72zm16 104h95c-31-48 0-104 0-104h-95s-40 56 0 104zm101-24a96 96 0 0 1 4-64h63s-16 32-1 64zm-101 40h192s-8 0-16 24-16 48-56 48H276c-39 0-52-50-76-72z"
      />
      <svg:rect
        width="96"
        height="32"
        x="32"
        y="384"
        fill="#ffda44"
        rx="16"
        ry="16"
      />
      <svg:rect
        width="96"
        height="32"
        x="32"
        y="448"
        fill="#ffda44"
        rx="16"
        ry="16"
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
export class SiPmFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
