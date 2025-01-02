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
  selector: 'svg[si-toll-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Toll</title>
    <svg:path
      d="M21.852 13.351H24l-.645 1.455h-3.346c-.689 0-1.158-.584-.898-1.15l1.978-4.463h2.356l-1.75 3.954c-.037.088-.008.202.157.204ZM6.147 10.647l-1.843 4.159H3.303c-.601 0-1.061-.556-.852-1.045l1.379-3.114H0l.112-.252h7.375c.375 0 .955-.058 1.534-.338.155-.074.845-.473 1.503-.864h1.474c-.411.194-2.381 1.141-2.617 1.227-.618.225-1.017.227-1.526.227H6.147Zm.538-.471H.209c.195-.442.632-.983 1.933-.983h6.18c-.351.44-.704.983-1.637.983Zm10.001 2.971c-.037.088-.007.202.157.204h2.149l-.644 1.455h-3.347c-.689 0-1.157-.584-.898-1.15l1.978-4.463h2.356l-1.75 3.954h-.001Zm-1.831-3.439c.283.402.128 1-.107 1.506l-.91 2.055c-.686 1.655-3.056 1.536-3.056 1.536H8.085s-2.332.122-1.315-2.167l.785-1.774h.655c.531 0 1.182-.165 1.48-.282l3.509-1.389h.616c.497 0 .871.24 1.037.515h.003Zm-2.4 1.376c.119-.291-.054-.437-.294-.437h-1.7c-.343-.002-.512.168-.563.279-.036.074-.854 1.925-.854 1.925-.233.518.261.501.261.501h1.617s.52.002.756-.512l.777-1.757v.001Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTollIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
