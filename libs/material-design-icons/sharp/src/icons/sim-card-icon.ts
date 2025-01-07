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
  selector: 'svg[si-sim-card-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.99 2H10L4 8v14h16l-.01-20zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSimCardIcon implements OnInit {
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
