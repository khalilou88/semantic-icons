import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-dashboard-square-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.60352 3.25C4.36088 3.25 3.35352 4.25736 3.35352 5.5V8.99998C3.35352 10.2426 4.36087 11.25 5.60352 11.25H9.10352C10.3462 11.25 11.3535 10.2426 11.3535 8.99998V5.5C11.3535 4.25736 10.3462 3.25 9.10352 3.25H5.60352ZM4.85352 5.5C4.85352 5.08579 5.1893 4.75 5.60352 4.75H9.10352C9.51773 4.75 9.85352 5.08579 9.85352 5.5V8.99998C9.85352 9.41419 9.51773 9.74998 9.10352 9.74998H5.60352C5.1893 9.74998 4.85352 9.41419 4.85352 8.99998V5.5Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.60352 12.75C4.36088 12.75 3.35352 13.7574 3.35352 15V18.5C3.35352 19.7426 4.36087 20.75 5.60352 20.75H9.10352C10.3462 20.75 11.3535 19.7426 11.3535 18.5V15C11.3535 13.7574 10.3462 12.75 9.10352 12.75H5.60352ZM4.85352 15C4.85352 14.5858 5.1893 14.25 5.60352 14.25H9.10352C9.51773 14.25 9.85352 14.5858 9.85352 15V18.5C9.85352 18.9142 9.51773 19.25 9.10352 19.25H5.60352C5.1893 19.25 4.85352 18.9142 4.85352 18.5V15Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.8535 5.5C12.8535 4.25736 13.8609 3.25 15.1035 3.25H18.6035C19.8462 3.25 20.8535 4.25736 20.8535 5.5V8.99998C20.8535 10.2426 19.8462 11.25 18.6035 11.25H15.1035C13.8609 11.25 12.8535 10.2426 12.8535 8.99998V5.5ZM15.1035 4.75C14.6893 4.75 14.3535 5.08579 14.3535 5.5V8.99998C14.3535 9.41419 14.6893 9.74998 15.1035 9.74998H18.6035C19.0177 9.74998 19.3535 9.41419 19.3535 8.99998V5.5C19.3535 5.08579 19.0177 4.75 18.6035 4.75H15.1035Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.1035 12.75C13.8609 12.75 12.8535 13.7574 12.8535 15V18.5C12.8535 19.7426 13.8609 20.75 15.1035 20.75H18.6035C19.8462 20.75 20.8535 19.7426 20.8535 18.5V15C20.8535 13.7574 19.8462 12.75 18.6035 12.75H15.1035ZM14.3535 15C14.3535 14.5858 14.6893 14.25 15.1035 14.25H18.6035C19.0177 14.25 19.3535 14.5858 19.3535 15V18.5C19.3535 18.9142 19.0177 19.25 18.6035 19.25H15.1035C14.6893 19.25 14.3535 18.9142 14.3535 18.5V15Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDashboardSquare1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
