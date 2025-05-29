import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-uz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#1eb53a" d="M0 320h640v160H0z" />
    <svg:path fill="#0099b5" d="M0 0h640v160H0z" />
    <svg:path fill="#ce1126" d="M0 153.6h640v172.8H0z" />
    <svg:path fill="#fff" d="M0 163.2h640v153.6H0z" />
    <svg:circle cx="134.4" cy="76.8" r="57.6" fill="#fff" />
    <svg:circle cx="153.6" cy="76.8" r="57.6" fill="#0099b5" />
    <svg:g fill="#fff" transform="translate(261.1 122.9)scale(1.92)">
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
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUzFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
