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
  selector: 'svg[si-wb-iridescent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M7 11h10v2H7z" opacity=".3" />
    <svg:path
      d="M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-10h2v3h-2zm6.25 4.39 1.41 1.41 1.8-1.79-1.42-1.41zM11 20h2v3h-2zm6.24-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM5.34 6.805l-1.788-1.79L4.96 3.61l1.788 1.788zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWbIridescentIcon implements OnInit {
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
