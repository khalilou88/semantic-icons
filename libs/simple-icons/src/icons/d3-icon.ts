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
  selector: 'svg[si-d3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>D3</svg:title>
    <svg:path
      d="M13.312 12C13.312 5.718 8.22.625 1.937.625H0v5h1.938c3.521 0 6.375 2.854 6.375 6.375s-2.854 6.375-6.375 6.375H0v5h1.938c6.281 0 11.374-5.093 11.374-11.375zM24 7.563C24 3.731 20.893.625 17.062.625h-8a13.4154 13.4154 0 0 1 4.686 5h3.314c1.069 0 1.938.868 1.938 1.938 0 1.07-.869 1.938-1.938 1.938h-1.938c.313 1.652.313 3.348 0 5h1.938c1.068 0 1.938.867 1.938 1.938s-.869 1.938-1.938 1.938h-3.314a13.4154 13.4154 0 0 1-4.686 5h8c1.621 0 3.191-.568 4.438-1.605 2.943-2.45 3.346-6.824.895-9.77A6.9459 6.9459 0 0 0 24 7.563z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiD3Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
