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
  selector: 'svg[si-box-closed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.91623 4.96229C6.31475 4.25385 7.0644 3.81543 7.87725 3.81543H16.1228C16.9356 3.81543 17.6852 4.25385 18.0838 4.96229L20.461 9.18826C20.6505 9.52506 20.75 9.90497 20.75 10.2914V19.0646C20.75 20.3072 19.7426 21.3146 18.5 21.3146H5.5C4.25736 21.3146 3.25 20.3072 3.25 19.0646V10.2914C3.25 9.90497 3.34952 9.52506 3.53898 9.18826L5.91623 4.96229ZM11.25 9.14853V5.31543H7.87725C7.6063 5.31543 7.35641 5.46157 7.22357 5.69772L5.28238 9.14853H11.25ZM4.75 10.6485V19.0646C4.75 19.4788 5.08579 19.8146 5.5 19.8146H18.5C18.9142 19.8146 19.25 19.4788 19.25 19.0646V10.6485H4.75ZM18.7176 9.14853L16.7764 5.69772C16.6436 5.46157 16.3937 5.31543 16.1228 5.31543H12.75V9.14853H18.7176Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBoxClosedIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
