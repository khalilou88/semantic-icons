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
  selector: 'svg[si-alx-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>ALX</title>
    <svg:path
      d="m13.732 5.879-2.903 1.299V18.12h2.903V5.879Zm3.219 1.436c-.361.36-1.59 1.587-1.977 1.978.839.851 1.684 1.696 2.527 2.543l-2.529 2.529 1.978 1.978c.844-.842 1.686-1.686 2.529-2.529l2.543 2.529c.66-.659 1.319-1.319 1.978-1.98-.848-.841-1.695-1.684-2.543-2.527L24 9.293l-1.978-1.978-2.543 2.543-2.528-2.543ZM6.157 9.271v.382C3.256 8.379.002 10.503 0 13.671c.001 3.169 3.256 5.293 6.157 4.018v.431H9.06V9.271H6.157ZM4.39 11.902c.978 0 1.718.741 1.767 1.674v.19a1.77 1.77 0 0 1-1.767 1.675c-.946 0-1.77-.792-1.77-1.77s.792-1.77 1.77-1.77v.001Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAlxIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
