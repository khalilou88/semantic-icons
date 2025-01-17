import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-cf-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#ffda44"
        d="m0 378.4 252.9-28.8L512 378.4V512H322.8L256 481l-66.8 31H0z"
      />
      <svg:path fill="#6da544" d="m0 256 249.8-28L512 256v122.4H0z" />
      <svg:path fill="#eee" d="m0 133.6 255.3-28.3L512 133.6V256H0z" />
      <svg:path fill="#0052b4" d="M0 0h189.2L256 30l66.8-30H512v133.6H0z" />
      <svg:path
        fill="#ffda44"
        d="m137.7 55.7 6.9 21.2H167L148.9 90l6.9 21.3-18.1-13.1-18 13.1 6.8-21.3-18-13h22.3z"
      />
      <svg:path fill="#d80027" d="M189.2 0h133.6v512H189.2z" />
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
export class SiCfFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
