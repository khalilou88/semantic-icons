import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-et-af-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <svg:path fill="#0052b4" d="M0 0h512v160H0Z" />
      <svg:path fill="#496e2d" d="M0 352h512v160H0Z" />
      <svg:path fill="#d80027" d="M0 0v512l256-256L0 0z" />
      <svg:path
        fill="#ff9811"
        d="m345 229-12 11 40 40-40 40 11 11 40-40 40 40 11-11-40-40 40-40-11-11-40 40z"
      />
      <svg:path fill="#d80027" d="m384 181 21 62-54-38h66l-53 39z" />
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
export class SiEtAfFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
