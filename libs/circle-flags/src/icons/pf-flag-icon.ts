import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pf-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#d80027"
        d="M0 0h512v133.7l-52 126 52 118.8V512H0V378.5l53-121L0 133.6z"
      />
      <svg:path fill="#eee" d="M0 133.7h512v244.8H0z" />
      <svg:path
        fill="#ffda44"
        d="M345 256.1c0 49.2-39.8 78-89 78s-89-28.8-89-78a89 89 0 1 1 178 0z"
      />
      <svg:path fill="#0052b4" d="M345 256.1a89 89 0 1 1-178 0" />
      <svg:path
        fill="#d80027"
        d="M200.3 233.8h22.3v44.6h-22.3zm89 0h22.4v44.6h-22.3zM245 200.4h22v78h-22z"
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
export class SiPfFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
