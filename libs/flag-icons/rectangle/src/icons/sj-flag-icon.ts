import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sj-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#ef2b2d" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M180 0h120v480H180z" />
    <svg:path fill="#fff" d="M0 180h640v120H0z" />
    <svg:path fill="#002868" d="M210 0h60v480h-60z" />
    <svg:path fill="#002868" d="M0 210h640v60H0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSjFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
