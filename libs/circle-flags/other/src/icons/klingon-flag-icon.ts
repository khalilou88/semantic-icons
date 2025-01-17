import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-klingon-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v512H0z" />
      <svg:circle cx="256" cy="277" r="126" fill="#eee" />
      <svg:path
        fill="#333"
        d="M256 355c15.1-25.3 28.9-39.7 44-65-3.5-15.8-17.3-7.1-43-204-29 198.4-44.5 189.4-46 202 14.8 25.8 30.2 41.2 45 67zm-53-51c11.5 17.7 32.5 42.3 44 60-69.2 4.6-83.4 21.3-107 46-4.2-81.8 50.6-81.5 63-106zm63 59c13.3-19.2 29.7-41.8 43-61 22.6 46.3 52.6 59.7 80 62-21.4 30.2-76.8 27.2-123-1z"
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
export class SiKlingonFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
