import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-united-nations-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#338af3" d="M0 0h512v512H0z" />
      <svg:circle cx="256" cy="256" r="145" fill="#eee" />
      <svg:circle cx="256" cy="256" r="111" fill="#338af3" />
      <svg:path fill="#338af3" d="M76 76h360L256 256z" />
      <svg:circle cx="256" cy="256" r="89" fill="#eee" />
      <svg:circle cx="256" cy="256" r="69" fill="#338af3" />
      <svg:path fill="#eee" d="M246 178h20v156h-20z" />
      <svg:path fill="#eee" d="M334 246v20H178v-20z" />
      <svg:path fill="#eee" d="m304 193.7 14.2 14.2-110.3 110.3-14.2-14.1z" />
      <svg:path fill="#eee" d="m318.2 304-14.1 14.2-110.4-110.3 14.2-14.2z" />
      <svg:circle cx="256" cy="256" r="44" fill="#eee" />
      <svg:circle cx="256" cy="256" r="22" fill="#338af3" />
      <svg:ellipse cx="256" cy="412" fill="#eee" rx="44" ry="40" />
      <svg:path fill="#338af3" d="m256 407-78 63h156z" />
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
export class SiUnitedNationsFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
