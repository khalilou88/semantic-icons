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
  selector: 'svg[si-paperspace-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Paperspace</title>
    <svg:path
      d="M23.832 10.848c0 3.04-1.883 6.402-4.471 8.879C16.774 22.202 13.275 24 10.093 24c-3.213 0-5.806-1.766-7.44-4.178C1.026 17.42.168 14.2.168 11.226c0-3.04 1.617-5.934 3.945-7.936C6.437 1.292 9.651 0 12.81 0c3.162 0 5.991 1.211 7.916 3.13 1.927 1.919 3.107 4.706 3.107 7.718Zm-11.023-9.69c-.446 0-.89.027-1.328.078.273-.02.547-.032.822-.034 2.931.017 5.67 1.04 7.58 2.725-1.77-1.753-4.154-2.768-7.074-2.768Zm-2.716 21.683a8.9 8.9 0 0 0 1.972-.23 9.39 9.39 0 0 1-1.844.192 8.132 8.132 0 0 1-4.128-1.11c1.125.732 2.445 1.148 4 1.148Zm9.052-18.02c-1.76-1.566-4.101-2.482-6.842-2.46-.91-.007-1.794.1-2.64.306.614-.096 1.25-.145 1.902-.145 2.748 0 5.439.772 7.36 2.208.388.29.75.615 1.083.97a8.986 8.986 0 0 0-.863-.88ZM10.22 21.643c.966 0 1.95-.178 2.922-.502-.928.24-1.869.369-2.785.369-1.347 0-2.56-.265-3.611-.736.99.557 2.138.869 3.474.869Zm8.01-15.986c-1.757-1.313-4.077-1.977-6.666-1.977-2.572 0-4.638.738-6.166 2.132-1.524 1.392-2.364 3.285-2.364 5.792 0 2.547.586 4.687 1.825 6.275 1.234 1.58 2.96 2.472 5.498 2.472 2.564 0 5.178-1.038 7.248-2.752 2.067-1.71 3.401-3.9 3.401-6.374 0-2.481-1.03-4.262-2.777-5.568Zm-9 .732h4.719c1.765 0 3.217 1.131 3.217 3.08 0 2.475-1.95 3.961-4.377 3.961H10.35l-.696 3.99H7.287L9.232 6.39Zm3.45 5.149c1.207 0 2.149-.62 2.149-1.874 0-.975-.757-1.377-1.595-1.377h-1.978l-.572 3.246h1.996v.005Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPaperspaceIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
