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
  selector: 'svg[si-remove-moderator-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 11.09V5l-8-3-5.22 1.96 12.09 12.09c.72-1.53 1.13-3.22 1.13-4.96zM2.81 2.81 1.39 4.22 4 6.83v4.26c0 5.05 3.41 9.76 8 10.91 1.72-.43 3.28-1.36 4.55-2.62l3.23 3.23 1.41-1.41L2.81 2.81z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRemoveModeratorIcon implements OnInit {
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
