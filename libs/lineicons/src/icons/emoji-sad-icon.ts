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
  selector: 'svg[si-emoji-sad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.0001 9.23256C10.0001 8.5422 9.44042 7.98256 8.75007 7.98256C8.05971 7.98256 7.50007 8.5422 7.50007 9.23256C7.50007 9.92291 8.05971 10.4827 8.75007 10.4827C9.44042 10.4827 10.0001 9.92291 10.0001 9.23256Z"
      fill="#323544"
    />
    <svg:path
      d="M15.2499 7.98256C15.9403 7.98256 16.4999 8.5422 16.4999 9.23256C16.4999 9.92291 15.9403 10.4827 15.2499 10.4827C14.5596 10.4827 13.9999 9.92301 13.9999 9.23266C13.9999 8.5423 14.5596 7.98256 15.2499 7.98256Z"
      fill="#323544"
    />
    <svg:path
      d="M9.23014 16.2652C8.97215 16.5893 8.5003 16.6428 8.17625 16.3848C7.8522 16.1268 7.79865 15.655 8.05665 15.3309C8.97846 14.1731 10.4026 13.4288 12 13.4288C13.5975 13.4288 15.0216 14.1731 15.9434 15.3309C16.2014 15.655 16.1479 16.1268 15.8238 16.3848C15.4998 16.6428 15.0279 16.5893 14.7699 16.2652C14.1205 15.4495 13.1213 14.9288 12 14.9288C10.8788 14.9288 9.87961 15.4495 9.23014 16.2652Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEmojiSadIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}