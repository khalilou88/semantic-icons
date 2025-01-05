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
  selector: 'svg[si-checkmk-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Checkmk</svg:title>
    <svg:path
      d="M5.187 8.738v3.985l4.883-3.157v8.217l1.925 1.111 1.926-1.111V9.57l4.882 3.158V8.742l-6.808-4.269-6.808 4.265zM12 0l10.375 5.999V18L12 24 1.625 18.006V6.003L12 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCheckmkIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#15D1A0');
  }
}
