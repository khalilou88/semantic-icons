import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sa-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#496e2d" d="M0 0h512v512H0z" />
      <svg:g fill="#eee">
        <svg:path
          d="M144.7 306c0 18.5 15 33.5 33.4 33.5h100.2a27.8 27.8 0 0 0 27.8 27.8h33.4a27.8 27.8 0 0 0 27.8-27.8V306zm225.4-161.3v78c0 12.2-10 22.2-22.3 22.2v33.4c30.7 0 55.7-25 55.7-55.7v-77.9H370zm-239.3 78c0 12.2-10 22.2-22.3 22.2v33.4c30.7 0 55.7-25 55.7-55.7v-77.9h-33.4z"
        />
        <svg:path
          d="M320 144.7h33.4v78H320zm-50 44.5a5.6 5.6 0 0 1-11.2 0v-44.5h-33.4v44.5a5.6 5.6 0 0 1-11.1 0v-44.5h-33.4v44.5a39 39 0 0 0 39 39 38.7 38.7 0 0 0 22.2-7 38.7 38.7 0 0 0 22.2 7c1.7 0 3.4-.1 5-.3a22.3 22.3 0 0 1-21.6 17v33.4c30.6 0 55.6-25 55.6-55.7v-77.9H270z"
        />
        <svg:path d="M180.9 244.9h50v33.4h-50z" />
      </svg:g>
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
export class SiSaFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
