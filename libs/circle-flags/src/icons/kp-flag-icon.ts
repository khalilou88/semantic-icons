import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kp-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#0052b4"
        d="M0 0h512v89l-61.2 165.6L512 423v89H0v-89l62.5-174.6L0 89z"
      />
      <svg:path
        fill="#eee"
        d="M0 89h512v33.4l-28.1 130L512 389.7V423H0v-33.4L30 255 0 122.4z"
      />
      <svg:path fill="#d80027" d="M0 122.4h512v267.2H0z" />
      <svg:circle cx="157.5" cy="256" r="98.5" fill="#eee" />
      <svg:path
        fill="#d80027"
        d="m157.5 157.5 22.1 68h71.6l-58 42 22.3 68.3-58-42.3-58 42.2 22.2-68.1-57.9-42h71.6z"
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
export class SiKpFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
