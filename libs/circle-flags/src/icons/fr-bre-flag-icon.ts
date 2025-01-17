import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-fr-bre-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 0h256l256 57v57l-32 28 32 29v57l-32 28 32 29v56l-32 29 32 28v57l-256 29L0 455v-57l32-28-32-29v-56l32-29-32-28Z"
      />
      <svg:path
        fill="#333"
        d="M256 0h256v57H256zm0 114h256v57H256zM0 228h512v57H0zm0 113h512v57H0zm0 114h512v57H0zM16 72l19 14 19-14-19-40z"
      />
      <svg:circle cx="46.7" cy="32.4" r="6" fill="#333" />
      <svg:circle cx="22.7" cy="32.4" r="6" fill="#333" />
      <svg:circle cx="34.7" cy="20.4" r="6" fill="#333" />
      <svg:path fill="#333" d="m109 72 19 14 19-14-19-40z" />
      <svg:circle cx="140.4" cy="32.4" r="6" fill="#333" />
      <svg:circle cx="116.4" cy="32.4" r="6" fill="#333" />
      <svg:circle cx="128.4" cy="20.4" r="6" fill="#333" />
      <svg:path fill="#333" d="m203 72 19 14 19-14-19-40z" />
      <svg:circle cx="234.1" cy="32.4" r="6" fill="#333" />
      <svg:circle cx="210.1" cy="32.4" r="6" fill="#333" />
      <svg:circle cx="222.1" cy="20.4" r="6" fill="#333" />
      <svg:path fill="#333" d="m156 138 19 14 19-14-19-40z" />
      <svg:circle cx="187.2" cy="98.2" r="6" fill="#333" />
      <svg:circle cx="163.2" cy="98.2" r="6" fill="#333" />
      <svg:circle cx="175.2" cy="86.2" r="6" fill="#333" />
      <svg:path fill="#333" d="m63 138 19 14 18-14-18-40z" />
      <svg:circle cx="93.5" cy="98.2" r="6" fill="#333" />
      <svg:circle cx="69.5" cy="98.2" r="6" fill="#333" />
      <svg:circle cx="81.5" cy="86.2" r="6" fill="#333" />
      <svg:path fill="#333" d="m16 204 19 14 19-14-19-40z" />
      <svg:circle cx="46.7" cy="164" r="6" fill="#333" />
      <svg:circle cx="22.7" cy="164" r="6" fill="#333" />
      <svg:circle cx="34.7" cy="152" r="6" fill="#333" />
      <svg:path fill="#333" d="m109 204 19 14 19-14-19-40z" />
      <svg:circle cx="140.4" cy="164" r="6" fill="#333" />
      <svg:circle cx="116.4" cy="164" r="6" fill="#333" />
      <svg:circle cx="128.4" cy="152" r="6" fill="#333" />
      <svg:path fill="#333" d="m203 204 19 14 19-14-19-40z" />
      <svg:circle cx="234.1" cy="164" r="6" fill="#333" />
      <svg:circle cx="210.1" cy="164" r="6" fill="#333" />
      <svg:circle cx="222.1" cy="152" r="6" fill="#333" />
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
export class SiFrBreFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
