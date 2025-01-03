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
  selector: 'svg[si-acura-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Acura</title>
    <svg:path
      d="M23.77 10.908c-.23-4.018-1.492-6.89-3.33-8.496C18.489.689 14.814 0 12.057 0c-2.87 0-6.43.689-8.382 2.412C1.839 4.019.46 7.004.23 10.908c-.23 3.675.574 7.81 2.641 10.106C4.823 23.31 8.843 24 11.943 24s7.12-.689 9.072-2.986c2.18-2.296 2.986-6.316 2.755-10.106m-12.4-9.761h1.377v8.73H11.37ZM1.839 14.585c-.116-1.493-.575-6.89 1.607-9.99.919-1.38 2.182-2.297 3.56-2.757 1.838-.689 4.134-.689 4.134-.689-.919 2.181-2.641 6.89-2.985 7.924-.46 1.263-.804 1.952-1.15 4.248-.229 1.838-.688 6.546-.688 8.612-2.641-1.262-4.133-3.56-4.478-7.35m15.847 7.466c-1.723.803-3.905.918-5.628.918-1.722 0-3.903-.23-5.626-.918.574-1.607 3.33-8.269 4.823-10.91h1.608c1.493 2.643 4.248 9.417 4.823 10.91m4.592-7.466c-.344 3.79-1.837 6.088-4.363 7.35-.115-2.066-.459-6.774-.689-8.612-.345-2.296-.688-2.985-1.148-4.248-.345-1.034-2.182-5.742-2.986-7.924 0 0 2.181 0 4.134.69 1.378.458 2.642 1.377 3.56 2.756 1.952 3.1 1.607 8.497 1.493 9.99"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAcuraIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}