import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-uz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#1eb53a" d="M0 341.3h512V512H0z" />
    <svg:path fill="#0099b5" d="M0 0h512v170.7H0z" />
    <svg:path fill="#ce1126" d="M0 163.8h512v184.4H0z" />
    <svg:path fill="#fff" d="M0 174h512v164H0z" />
    <svg:circle cx="143.4" cy="81.9" r="61.4" fill="#fff" />
    <svg:circle cx="163.8" cy="81.9" r="61.4" fill="#0099b5" />
    <svg:g fill="#fff" transform="translate(278.5 131)scale(2.048)">
      <svg:g id="uz-e">
        <svg:g id="uz-d">
          <svg:g id="uz-c">
            <svg:g id="uz-b">
              <svg:path id="uz-a" d="M0-6-1.9-.3 1 .7" />
              <svg:use
                xlink:href="#uz-a"
                width="100%"
                height="100%"
                transform="scale(-1 1)"
              />
            </svg:g>
            <svg:use
              xlink:href="#uz-b"
              width="100%"
              height="100%"
              transform="rotate(72)"
            />
          </svg:g>
          <svg:use
            xlink:href="#uz-b"
            width="100%"
            height="100%"
            transform="rotate(-72)"
          />
          <svg:use
            xlink:href="#uz-c"
            width="100%"
            height="100%"
            transform="rotate(144)"
          />
        </svg:g>
        <svg:use xlink:href="#uz-d" width="100%" height="100%" y="-24" />
        <svg:use xlink:href="#uz-d" width="100%" height="100%" y="-48" />
      </svg:g>
      <svg:use xlink:href="#uz-e" width="100%" height="100%" x="24" />
      <svg:use xlink:href="#uz-e" width="100%" height="100%" x="48" />
      <svg:use xlink:href="#uz-d" width="100%" height="100%" x="-48" />
      <svg:use xlink:href="#uz-d" width="100%" height="100%" x="-24" />
      <svg:use xlink:href="#uz-d" width="100%" height="100%" x="-24" y="-24" />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUzFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
