import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-st-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#12ad2b" d="M0 0h640v480H0z" />
    <svg:path fill="#ffce00" d="M0 137.1h640V343H0z" />
    <svg:path fill="#d21034" d="M0 0v480l240-240" />
    <svg:g id="st-c" transform="translate(351.6 240)scale(.34286)">
      <svg:g id="st-b">
        <svg:path
          id="st-a"
          fill="#000001"
          d="M0-200V0h100"
          transform="rotate(18 0 -200)"
        />
        <svg:use
          xlink:href="#st-a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </svg:g>
      <svg:use
        xlink:href="#st-b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <svg:use
        xlink:href="#st-b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <svg:use
        xlink:href="#st-b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
      <svg:use
        xlink:href="#st-b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
    </svg:g>
    <svg:use
      xlink:href="#st-c"
      width="100%"
      height="100%"
      x="700"
      transform="translate(-523.2)"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
