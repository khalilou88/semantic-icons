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
  selector: 'svg[si-man-4-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.75 7h-3.5C9.04 7 8.11 8.07 8.27 9.26L9.82 20.7c.1.74.74 1.3 1.49 1.3h1.38a1.5 1.5 0 0 0 1.49-1.3l1.56-11.44C15.89 8.07 14.96 7 13.75 7z"
    />
    <svg:circle cx="12" cy="4" r="2" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMan4Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
