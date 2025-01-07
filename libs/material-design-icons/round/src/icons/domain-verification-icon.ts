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
  selector: 'svg[si-domain-verification-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.23 15.83c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0l-3.54 3.53-1.41-1.41c-.39-.39-1.02-.39-1.42 0s-.39 1.02 0 1.41l2.13 2.13z"
    />
    <svg:path
      d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8h14v9z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDomainVerificationIcon implements OnInit {
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
