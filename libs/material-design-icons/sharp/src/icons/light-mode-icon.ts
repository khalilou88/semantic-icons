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
  selector: 'svg[si-light-mode-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1-6v4h2V1h-2zm0 18v4h2v-4h-2zm12-8h-4v2h4v-2zM5 11H1v2h4v-2zm11.24 6.66 2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zM3.87 5.28l2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zm2.47 10.96-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41zM18.72 3.87l-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLightModeIcon implements OnInit {
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
