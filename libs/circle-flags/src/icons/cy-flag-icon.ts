import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-cy-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0z" />
      <svg:path
        fill="#6da544"
        d="M400.7 222.6h-33.4a111.3 111.3 0 0 1-222.6 0h-33.4c0 66.2 44.5 122 105.2 139.2a37 37 0 0 0 3.9 40.5l36.3-29.2 36.4 29.2a37 37 0 0 0 3.7-40.8 144.8 144.8 0 0 0 103.9-138.9z"
      />
      <svg:path
        fill="#ffda44"
        d="M167 211.5s0 55.6 55.6 55.6l11.1 11.2H256s11.1-33.4 33.4-33.4c0 0 0-22.3 22.3-22.3H345s-11-44.5 44.6-77.9l-22.3-11.1s-78 55.6-133.6 44.5v22.2h-22.2l-11.2-11-33.3 22.2z"
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
export class SiCyFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
