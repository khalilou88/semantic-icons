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
  selector: 'svg[si-propane-tank-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 6.14V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-8c0-1.86-1.28-3.41-3-3.86zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9V4zM8 8h8c1.1 0 2 .9 2 2v3H6v-3c0-1.1.9-2 2-2zm8 12H8c-1.1 0-2-.9-2-2v-3h12v3c0 1.1-.9 2-2 2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPropaneTankIcon implements OnInit {
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
