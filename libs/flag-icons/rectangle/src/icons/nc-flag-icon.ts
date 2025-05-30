import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#009543" d="M0 0h640v480H0z" />
    <svg:path fill="#ed4135" d="M0 0h640v320H0z" />
    <svg:path fill="#0035ad" d="M0 0h640v160H0z" />
    <svg:circle
      cx="240"
      cy="240"
      r="157.3"
      fill="#fae600"
      stroke="#000"
      stroke-width="5.3"
    />
    <svg:path
      stroke="#000"
      stroke-width="6.4"
      d="M213.3 263.5h53.3M213.3 224h53.3M240 83.2V352"
    />
    <svg:path
      fill="#000001"
      d="M176.6 384.4c64.2 26.3 124.4 1.7 124.4 1.7s-22.7-24.6-34.3-34.2c-11.4-9.4-44.8-9-56.2 0a489 489 0 0 0-33.9 32.5"
    />
    <svg:ellipse cx="240" cy="312.5" fill="#000001" rx="17.6" ry="25.6" />
    <svg:ellipse cx="240" cy="243.7" fill="#000001" rx="21.3" ry="13.5" />
    <svg:circle cx="240" cy="181.3" r="21.3" fill="#000001" />
    <svg:path
      fill="#000001"
      d="M265.6 101.9s1.8 3-2 10c-18.6 33.5-37.3 34.2-40.8 37.1-4 3.2-5.6 3-5.6 3 .3-2.9.5-14.6.7-15.7 2.9-15.7 26.5-15.5 45-31.5 2.9-2.5 2.7-3 2.7-3zm-62.4 72s4.3 12 4.8 24c1 19.2 19.4 19.7 32 19.7v-10.7c-9.5 0-17.7-1.4-24.5-15.4a123 123 0 0 0-12.3-17.6m-.5 154.6s6.7-8.3 14.6-27.7c4-10.1 13.8-16 22.7-16v-15c-20.3 0-30 7.5-31 18.6a329 329 0 0 1-6.3 40.1"
    />
    <svg:path
      d="M276.8 173.9s-4.3 12-4.8 24c-1 19.2-19.4 19.7-32 19.7V207c9.5 0 17.7-1.4 24.5-15.5q5.4-9.3 12.3-17.6m.5 154.7s-6.7-8.4-14.6-27.8c-4-10.1-13.8-16-22.7-16V270c20.3 0 30 7.5 31 18.6a329 329 0 0 0 6.3 40"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNcFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
