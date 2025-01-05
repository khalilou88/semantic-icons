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
  selector: 'svg[si-yubico-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Yubico</svg:title>
    <svg:path
      d="m12.356 12.388 2.521-7.138h3.64l-6.135 15.093H8.539l1.755-4.136L6 5.25h3.717ZM12 0C5.381 0 0 5.381 0 12s5.381 12 12 12 12-5.381 12-12S18.619 0 12 0Zm0 1.5c5.808 0 10.5 4.692 10.5 10.5S17.808 22.5 12 22.5 1.5 17.808 1.5 12 6.192 1.5 12 1.5Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiYubicoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#84BD00');
  }
}
