import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
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
    <g fill="#fff" transform="translate(278.5 131)scale(2.048)">
      <g id="uz-e">
        <g id="uz-d">
          <g id="uz-c">
            <g id="uz-b">
              <svg:path id="uz-a" d="M0-6-1.9-.3 1 .7" />
              <use
                xlink:href="#uz-a"
                width="100%"
                height="100%"
                transform="scale(-1 1)"
              />
            </g>
            <use
              xlink:href="#uz-b"
              width="100%"
              height="100%"
              transform="rotate(72)"
            />
          </g>
          <use
            xlink:href="#uz-b"
            width="100%"
            height="100%"
            transform="rotate(-72)"
          />
          <use
            xlink:href="#uz-c"
            width="100%"
            height="100%"
            transform="rotate(144)"
          />
        </g>
        <use xlink:href="#uz-d" width="100%" height="100%" y="-24" />
        <use xlink:href="#uz-d" width="100%" height="100%" y="-48" />
      </g>
      <use xlink:href="#uz-e" width="100%" height="100%" x="24" />
      <use xlink:href="#uz-e" width="100%" height="100%" x="48" />
      <use xlink:href="#uz-d" width="100%" height="100%" x="-48" />
      <use xlink:href="#uz-d" width="100%" height="100%" x="-24" />
      <use xlink:href="#uz-d" width="100%" height="100%" x="-24" y="-24" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUzFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
