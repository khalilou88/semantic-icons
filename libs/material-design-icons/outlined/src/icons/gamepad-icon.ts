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
  selector: 'svg[si-gamepad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5-3 3V22h6v-5.5l-3-3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGamepadIcon implements OnInit {
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
