import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-af-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#d80027"
        d="M144.7 0h222.6l37 257.7-37 254.3H144.7l-42.4-255.2z"
      />
      <svg:path fill="#496e2d" d="M367.3 0H512v512H367.3z" />
      <svg:path fill="#333" d="M0 0h144.7v512H0z" />
      <svg:g fill="#ffda44">
        <svg:path
          d="M256 167a89 89 0 1 0 0 178 89 89 0 0 0 0-178zm0 144.7a55.7 55.7 0 1 1 0-111.4 55.7 55.7 0 0 1 0 111.4z"
        />
        <svg:path
          d="M256 222.6c-12.3 0-22.3 10-22.3 22.3v33.4h44.6v-33.4c0-12.3-10-22.3-22.3-22.3z"
        />
      </svg:g>
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
export class SiAfFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
