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
  selector: 'svg[si-pentagon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m2.47 10.42 3.07 9.22c.28.81 1.04 1.36 1.9 1.36h9.12a2 2 0 0 0 1.9-1.37l3.07-9.22c.28-.84-.03-1.76-.75-2.27L13.15 2.8a2 2 0 0 0-2.29 0L3.22 8.14c-.72.51-1.03 1.44-.75 2.28z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPentagonIcon implements OnInit {
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
