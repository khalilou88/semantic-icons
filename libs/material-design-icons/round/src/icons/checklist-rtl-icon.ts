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
  selector: 'svg[si-checklist-rtl-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1zm0 8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1zm6.05-5.71a.996.996 0 0 1-1.41 0l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.25zm0 8a.996.996 0 0 1-1.41 0l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.25z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChecklistRtlIcon implements OnInit {
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
