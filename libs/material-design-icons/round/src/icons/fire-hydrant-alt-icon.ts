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
  selector: 'svg[si-fire-hydrant-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 11h-1V8h1c.55 0 1-.45 1-1s-.45-1-1-1h-1.35a5.99 5.99 0 0 0-11.3 0H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-1v-3h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
    />
    <svg:circle cx="12" cy="14" r="1.5" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFireHydrantAltIcon implements OnInit {
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
