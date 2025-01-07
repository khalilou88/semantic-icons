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
  selector: 'svg[si-energy-savings-leaf-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm-1.5 14-.5-.5 2.5-3.5-5-.5 6-5.5.5.5-2.5 3.5 5 .5-6 5.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEnergySavingsLeafIcon implements OnInit {
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
