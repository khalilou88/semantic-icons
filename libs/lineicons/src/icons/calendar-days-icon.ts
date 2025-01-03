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
  selector: 'svg[si-calendar-days-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.18535 12.75C7.18535 12.3082 7.54352 11.95 7.98535 11.95H7.99535C8.43718 11.95 8.79535 12.3082 8.79535 12.75C8.79535 13.1918 8.43718 13.55 7.99535 13.55H7.98535C7.54352 13.55 7.18535 13.1918 7.18535 12.75Z"
      fill="#323544"
    />
    <svg:path
      d="M7.98535 15.95C7.54352 15.95 7.18535 16.3082 7.18535 16.75C7.18535 17.1918 7.54352 17.55 7.98535 17.55H7.99535C8.43718 17.55 8.79535 17.1918 8.79535 16.75C8.79535 16.3082 8.43718 15.95 7.99535 15.95H7.98535Z"
      fill="#323544"
    />
    <svg:path
      d="M11.1951 12.75C11.1951 12.3082 11.5533 11.95 11.9951 11.95H12.0051C12.4469 11.95 12.8051 12.3082 12.8051 12.75C12.8051 13.1918 12.4469 13.55 12.0051 13.55H11.9951C11.5533 13.55 11.1951 13.1918 11.1951 12.75Z"
      fill="#323544"
    />
    <svg:path
      d="M11.9951 15.95C11.5533 15.95 11.1951 16.3082 11.1951 16.75C11.1951 17.1918 11.5533 17.55 11.9951 17.55H12.0051C12.4469 17.55 12.8051 17.1918 12.8051 16.75C12.8051 16.3082 12.4469 15.95 12.0051 15.95H11.9951Z"
      fill="#323544"
    />
    <svg:path
      d="M15.2049 12.75C15.2049 12.3082 15.5631 11.95 16.0049 11.95H16.0149C16.4567 11.95 16.8149 12.3082 16.8149 12.75C16.8149 13.1918 16.4567 13.55 16.0149 13.55H16.0049C15.5631 13.55 15.2049 13.1918 15.2049 12.75Z"
      fill="#323544"
    />
    <svg:path
      d="M16.0049 15.95C15.5631 15.95 15.2049 16.3082 15.2049 16.75C15.2049 17.1918 15.5631 17.55 16.0049 17.55H16.0149C16.4567 17.55 16.8149 17.1918 16.8149 16.75C16.8149 16.3082 16.4567 15.95 16.0149 15.95H16.0049Z"
      fill="#323544"
    />
    <svg:path
      d="M8.75 2.75C8.75 2.33579 8.41421 2 8 2C7.58579 2 7.25 2.33579 7.25 2.75V3.75H5.5C4.25736 3.75 3.25 4.75736 3.25 6V19C3.25 20.2426 4.25736 21.25 5.5 21.25H18.5C19.7426 21.25 20.75 20.2426 20.75 19V6C20.75 4.75736 19.7426 3.75 18.5 3.75H16.75V2.75C16.75 2.33579 16.4142 2 16 2C15.5858 2 15.25 2.33579 15.25 2.75V3.75H8.75V2.75ZM19.25 8.25H4.75V6C4.75 5.58579 5.08579 5.25 5.5 5.25H18.5C18.9142 5.25 19.25 5.58579 19.25 6V8.25ZM4.75 9.75H19.25V19C19.25 19.4142 18.9142 19.75 18.5 19.75H5.5C5.08579 19.75 4.75 19.4142 4.75 19V9.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCalendarDaysIcon implements OnInit {
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
