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
  selector: 'svg[si-developer-mode-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 5h10v1c0 .55.45 1 1 1s1-.45 1-1V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V5zm9.12 10.88 3.17-3.17a.996.996 0 0 0 0-1.41l-3.17-3.17c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41L17.17 12l-2.47 2.47a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0zm-6.83-1.42L6.83 12l2.46-2.46a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0L4.7 11.3a.996.996 0 0 0 0 1.41l3.17 3.17c.39.39 1.03.39 1.42 0 .4-.39.39-1.03 0-1.42zM17 19H7v-1c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeveloperModeIcon implements OnInit {
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
