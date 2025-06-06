import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-et-si-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#496e2d" d="M0 0h512v149H0Z" />
      <svg:path fill="#eee" d="M0 149h512v32H0z" />
      <svg:path fill="#d80027" d="M0 363h512v149H0Z" />
      <svg:path fill="#eee" d="M0 331h512v32H0z" />
      <svg:path fill="#0052b4" d="M0 181h512v150H0Z" />
      <svg:path
        fill="#eee"
        d="m312 317 104-75H288l104 75-40-122zm-203-32 49-36H98l49 36-19-58zm64 32 49-36h-60l49 36-19-58Zm0-64 49-36h-60l49 36-19-58Z"
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
export class SiEtSiFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
