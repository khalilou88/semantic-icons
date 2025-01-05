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
  selector: 'svg[si-awwwards-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Awwwards</svg:title>
    <svg:path
      d="m14.72 5.6-2.24 8.68-2.12-8.68H7.47l-2.12 8.68L3.11 5.6H0l4.01 12.65h2.74l2.17-8.18 2.16 8.18h2.74L17.83 5.6zm5.1 10.7c0 1.2.9 2.1 2.09 2.1 1.2 0 2.09-.9 2.09-2.1s-.9-2.12-2.1-2.12c-1.19 0-2.08.9-2.08 2.11"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAwwwardsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '222222');
  }
}
