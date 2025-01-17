import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-tv-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#009fca" d="M0 0h512v512H0z" />
    <svg:path
      fill="#fff40d"
      fill-rule="evenodd"
      d="m478 226.3 7.1 20.4-18.4-12.6-18.5 12.6 7.1-20.4-18.5-12.6h22.9l7-20.4 7 20.4h22.8zm-57.2 162.8 7 20.4-18.4-12.7-18.4 12.7 7-20.4-18.4-12.7h22.8l7-20.4 7 20.5h22.9zm57.3-36.9 7 20.4-18.4-12.6-18.5 12.6 7.1-20.4-18.5-12.6h22.9l7-20.4 7 20.4h22.8zm-246.2 118 7.1 20.5-18.4-12.7-18.5 12.7 7.1-20.4-18.5-12.6h22.8l7-20.4 7.1 20.4h22.8zm43.1-88.4-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.8zm67.3-93-7.1-20.4 18.4 12.6 18.5-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zm56.5-19.3-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zm-56.5 161-7.1-20.4 18.4 12.6 18.5-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.9zM275 446.9l-7-20.4 18.4 12.6 18.4-12.6-7 20.4 18.4 12.6h-22.8l-7 20.4-7-20.4h-22.8z"
    />
    <svg:path fill="#012169" d="M0 0h256v256H0z" />
    <svg:path
      fill="#FFF"
      d="M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94z"
    />
    <svg:path
      fill="#C8102E"
      d="m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256zM256 0l-96 98-2-22 75-76zM0 .5 96.5 95 67 91 0 24.5z"
    />
    <svg:path fill="#FFF" d="M88 0v256h80V0zM0 88v80h256V88z" />
    <svg:path fill="#C8102E" d="M0 104v48h256v-48zM104 0v256h48V0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTvFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
