import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sv-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#0052b4"
        d="M0 0h512v144.7l-40.5 112.6 40.5 110V512H0V367.3l42.2-114L0 144.7z"
      />
      <svg:path fill="#eee" d="M0 144.7h512v222.6H0z" />
      <svg:path fill="#ffda44" d="m204.6 267.1 51.4-89 51.4 89z" />
      <svg:path fill="#6da544" d="M322.8 296.5 256 330l-66.8-33.4V252h133.6z" />
      <svg:path
        fill="#ffda44"
        d="m319 182-23.6 23.5a55.5 55.5 0 0 1-39.4 95 55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0z"
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
export class SiSvFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
