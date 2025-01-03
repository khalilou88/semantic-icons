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
  selector: 'svg[si-nano-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Nano</title>
    <svg:path
      d="M22.2864 6.8576c-.9453 0-1.7135.7665-1.7135 1.7136 0 1.2843-.4275 1.7136-1.7136 1.7136-.9453 0-1.7135.7664-1.7135 1.7135 0 1.2843-.4276 1.7136-1.7136 1.7136-.9453 0-1.7135.7664-1.7135 1.7135 0 .9454.7665 1.7136 1.7135 1.7136.9454 0 1.7136-.7665 1.7136-1.7136 0-1.2843.4275-1.7135 1.7135-1.7135.9454 0 1.7136-.7665 1.7136-1.7136 0-1.2843.4275-1.7135 1.7135-1.7135.9454 0 1.7136-.7666 1.7136-1.7136 0-.9454-.7682-1.7136-1.7136-1.7136zm-13.717.0017c-.9453 0-1.7135.7665-1.7135 1.7136 0 1.2843-.4275 1.7136-1.7135 1.7136-.9454 0-1.7136.7664-1.7136 1.7135 0 .947.77 1.7135 1.7153 1.7135S6.8576 12.9471 6.8576 12c0-1.2843.4293-1.7135 1.7136-1.7135s1.7136.4275 1.7136 1.7135c0 .947.7698 1.7135 1.7152 1.7135.9453 0 1.7135-.7664 1.7135-1.7135 0-.9454-.7664-1.7135-1.7169-1.7135-1.2843 0-1.7135-.4276-1.7135-1.7136 0-.9453-.7683-1.7136-1.7136-1.7136zm-6.8559 6.856A1.7136 1.7136 0 0 0 0 15.4287a1.7136 1.7136 0 0 0 1.7135 1.7136 1.7136 1.7136 0 0 0 1.7136-1.7136 1.7136 1.7136 0 0 0-1.7135-1.7136Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNanoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
