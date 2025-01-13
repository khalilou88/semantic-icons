import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-occitania-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v512H0z" />
      <svg:circle cx="256" cy="64" r="32" fill="#ffda44" />
      <svg:circle cx="64" cy="256" r="32" fill="#ffda44" />
      <svg:circle cx="448" cy="256" r="32" fill="#ffda44" />
      <svg:circle cx="256" cy="448" r="32" fill="#ffda44" />
      <svg:circle cx="352" cy="400" r="32" fill="#ffda44" />
      <svg:circle cx="400" cy="352" r="32" fill="#ffda44" />
      <svg:circle cx="352" cy="112" r="32" fill="#ffda44" />
      <svg:circle cx="400" cy="160" r="32" fill="#ffda44" />
      <svg:circle cx="160" cy="112" r="32" fill="#ffda44" />
      <svg:circle cx="112" cy="160" r="32" fill="#ffda44" />
      <svg:circle cx="112" cy="352" r="32" fill="#ffda44" />
      <svg:circle cx="160" cy="400" r="32" fill="#ffda44" />
      <svg:path
        fill="#ffda44"
        d="m256 60-103 52 20 61-61-20-52 103 52 103 61-20-20 61 103 52 103-52-20-61 61 20 52-103-52-103-61 20 20-61zm0 36 64 32-32 96 96-32 32 64-32 64-96-32 32 96-64 32-64-32 32-96-96 32-32-64 32-64 96 32-32-96z"
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
export class SiOccitaniaFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
