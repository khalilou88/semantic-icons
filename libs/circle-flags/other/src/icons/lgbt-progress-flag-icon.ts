import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lgbt-progress-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#9c27b0" d="m0 425 256-32 256 32v87H0Z" />
      <svg:path fill="#0052b4" d="m0 340 256-32 256 32v85H0Z" />
      <svg:path fill="#6da544" d="m0 255 256-32 256 32v85H0Z" />
      <svg:path fill="#ffda44" d="m0 170 256-32 256 32v85H0Z" />
      <svg:path fill="#ff9811" d="m0 85 256-32 256 32v85H0Z" />
      <svg:path fill="#d80027" d="M0 0h512v85H0Z" />
      <svg:path fill="#333" d="M160 0H80l192 256L80 512h80l256-256Z" />
      <svg:path fill="#85693d" d="M80 0H0l192 256L0 512h80l256-256Z" />
      <svg:path fill="#338af3" d="M0 0v80l112 176L0 432v80l256-256Z" />
      <svg:path fill="#f5a9b8" d="M0 80v80l32 96-32 96v80l176-176Z" />
      <svg:path fill="#eee" d="M0 160v192l96-96Z" />
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
export class SiLgbtProgressFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
