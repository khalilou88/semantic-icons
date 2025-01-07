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
  selector: 'svg[si-fluorescent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M7 11h10v2H7z" opacity=".3" />
    <svg:path
      d="M5 15h14V9H5v6zm2-4h10v2H7v-2zm4-9h2v3h-2zm6.286 4.399 1.79-1.803 1.42 1.41-1.79 1.802zM11 19h2v3h-2zm6.29-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391 5.284 7.798zm-.003 12.066 1.803-1.79 1.409 1.42-1.803 1.79z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFluorescentIcon implements OnInit {
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
