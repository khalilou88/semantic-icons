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
  selector: 'svg[si-i3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>i3</svg:title>
    <svg:path
      d="M8.933 9.09a1.341 1.341 0 0 0 .031 1.896l6.973 6.945a1.342 1.342 0 1 0 1.893-1.901l-6.973-6.945a1.344 1.344 0 0 0-1.924.005Zm-1.66 7.176a426.366 426.366 0 0 0-1.338-1.339c-.377-.369-.829-.843-1.401-.856a1.646 1.646 0 0 0-.615.132c-.123.05-.383.276-.383.276a1.34 1.34 0 0 0-.394 1.122c.051.414.364.728.653.993.066.063.142.132.262.25.305.298.755.751 1.312 1.312 1.114 1.123 2.658 2.688 4.39 4.414 1.508 1.501 3.668 1.701 5.549 1.149 1.881-.552 3.66-1.757 5.148-3.25 1.487-1.494 2.685-3.278 3.229-5.162s.335-4.042-1.173-5.544l-6.22-6.194a1.34 1.34 0 0 0-1.923.005 1.342 1.342 0 0 0 .03 1.896l6.22 6.194c.739.736.858 1.619.488 2.898-.369 1.28-1.325 2.781-2.552 4.013-1.228 1.233-2.725 2.195-4.002 2.57-1.278.374-2.162.259-2.9-.476-1.723-1.716-3.261-3.275-4.38-4.403Zm-4.946-4.947c.522.52.524 1.376.004 1.897a1.347 1.347 0 0 1-1.897.004 1.348 1.348 0 0 1-.004-1.897 1.348 1.348 0 0 1 1.897-.004Zm5.364-5.386c.522.519.524 1.376.004 1.897a1.347 1.347 0 0 1-1.897.004 1.348 1.348 0 0 1-.004-1.897 1.347 1.347 0 0 1 1.897-.004ZM13.213.388c.521.52.523 1.376.004 1.897a1.347 1.347 0 0 1-1.897.004 1.347 1.347 0 0 1-.004-1.897 1.348 1.348 0 0 1 1.897-.004Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiI3Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
