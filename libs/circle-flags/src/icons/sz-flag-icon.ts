import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-sz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#ffda44"
        d="m0 144.7 256-20.5 256 20.5V178l-37.4 79 37.4 77v33.3l-256 24.1L0 367.3V334l37.7-77.3L0 178z"
      />
      <svg:path fill="#333" d="M0 0h512v144.7H0z" />
      <svg:path fill="#0052b4" d="M0 367.3h512V512H0z" />
      <svg:path fill="#a2001d" d="M0 178h512v156H0z" />
      <svg:path
        fill="#ffda44"
        d="M89.2 244.9h334V267h-334zm44.6-44.6h244.8v22.3H133.8z"
      />
      <svg:path
        fill="#eee"
        d="m256.2 189.2-18 65.2 18 68.4c66.8 0 124-66.8 124-66.8s-57.2-66.8-124-66.8z"
      />
      <svg:path
        fill="#333"
        d="M256.2 322.8c-66.8 0-124-66.8-124-66.8s57.2-66.8 124-66.8"
      />
      <svg:path fill="#eee" d="M211.7 233.7h22.2v44.6h-22.2z" />
      <svg:path fill="#333" d="M278.5 233.7h22.2v44.6h-22.2z" />
      <svg:g fill="#0052b4" transform="translate(.2)">
        <svg:circle cx="89" cy="256" r="22.3" />
        <svg:circle cx="423" cy="256" r="22.3" />
      </svg:g>
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
export class SiSzFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
