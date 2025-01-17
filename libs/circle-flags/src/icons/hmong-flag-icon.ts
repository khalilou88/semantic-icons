import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-hmong-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v512H0z" />
      <svg:path
        fill="#ffda44"
        d="M41 32 16 51 6 72l12 33-14 17 5 27 12-26 13 18-34 34 54 15-19-18 24-17 24 17-19 18 54-15-34-34 13-18 12 26 5-27-14-17 12-33-10-21-25-19 17 37-23 24 3-24-15-25-15 25 3 24-23-24 17-37zm394 0-25 19-10 21 12 33-14 17 5 27 12-26 13 18-34 34 54 15-19-18 24-17 24 17-19 18 54-15-34-34 13-18 12 26 5-27-14-17 12-33-10-21-25-19 17 37-23 24 3-24-15-25-15 25 3 24-23-24 17-37zM228.3 42v32l-27.7 16 27.7 16v32l27.7-16 27.7 16v-32l27.7-16-27.7-16V42L256 58l-27.7-16zM256 244a111 111 0 0 0-111 111 111 111 0 0 0 111 111 111 111 0 0 0 111-111 111 111 0 0 0-111-111zM41 322l-25 19-10 21 28 69-34 34 54 15-19-18 24-17 24 17-19 18 54-15-34-34 28-69-10-21-25-19 17 37-23 24 3-24-15-25-15 25 3 24-23-24 17-37zm394 0-25 19-10 21 28 69-34 34 54 15-19-18 24-17 24 17-19 18 54-15-34-34 28-69-10-21-25-19 17 37-23 24 3-24-15-25-15 25 3 24-23-24 17-37z"
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
export class SiHmongFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
