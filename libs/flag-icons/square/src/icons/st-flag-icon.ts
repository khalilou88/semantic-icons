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
    <svg:path fill="#12ad2b" d="M0 0h512v512H0z" />
    <svg:path fill="#ffce00" d="M0 146.3h512v219.4H0z" />
    <svg:path fill="#d21034" d="M0 0v512l192-256" />
    <svg:g id="st-c" transform="translate(276.9 261.5)scale(.33167)">
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
      transform="translate(-550.9)"
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

  readonly viewBox = input<string>('0 0 512 512');
}
