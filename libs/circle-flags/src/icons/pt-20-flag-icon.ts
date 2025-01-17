import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pt-20-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 512h189.2l41.4-256L189.2 0H0z" />
      <svg:path fill="#eee" d="M189.2 0H512v512H189.2z" />
      <svg:path fill="#d80027" d="M91.8 89v41.8a37.6 37.6 0 1 0 75.2 0V89z" />
      <svg:path
        fill="#eee"
        d="M129.4 146c-8.4 0-15.3-6.8-15.3-15.2v-19.5h30.6v19.5c0 8.4-6.9 15.3-15.3 15.3z"
      />
      <svg:path
        fill="#ffda44"
        d="M278.3 267.1h-66.8a22.3 22.3 0 0 0-44.5 0h-66.8a23 23 0 0 0 23 22.3h-.8c0 12.3 10 22.3 22.3 22.3 0 12.2 10 22.2 22.3 22.2h44.5c12.3 0 22.2-10 22.2-22.2 12.3 0 22.3-10 22.3-22.3h-.7a23 23 0 0 0 23-22.3zm9.1-35.6-5.8 9.4 7 8.4-10.6-2.7-5.9 9.4-.8-11-10.7-2.7 10.3-4.1-.8-11 7 8.4zm-34-28.6-2.4 10.8 9.6 5.5-11 1.2-2.3 10.7-4.5-10-11 1.1 8.2-7.4-4.4-10 9.5 5.5zm-42-15.2 1.6 10.9 10.9 2-10 4.7 1.6 11-7.7-8-9.9 4.9 5.2-9.8-7.7-8 10.9 2zm-44.4 0 5.1 9.7 10.9-2-7.7 8 5.2 9.8-9.9-4.9-7.7 8 1.6-11-10-4.8 11-2zm-42 15.2 8.2 7.4 9.6-5.5-4.5 10 8.2 7.4-11-1.1-4.5 10-2.3-10.7-11-1.2 9.6-5.5zm-34 28.6 10.2 4.1 7-8.4-.7 11 10.2 4.1L107 245l-.8 11-5.8-9.4-10.7 2.7 7-8.4z"
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
export class SiPt20FlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
