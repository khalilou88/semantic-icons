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
  selector: 'svg[si-start-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.29 17.29c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L16.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42L18.17 11H7c-.55 0-1 .45-1 1s.45 1 1 1h11.17l-2.88 2.88a.996.996 0 0 0 0 1.41zM3 18c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStartIcon implements OnInit {
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
