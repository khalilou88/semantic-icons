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
  selector: 'svg[si-youtubekids-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>YouTube Kids</svg:title>
    <svg:path
      d="m23.99 13.543-.007-.288c-.015-1.122-.645-6.495-.999-7.457-.41-1.111-.974-1.945-1.675-2.48-1.143-.873-2.115-1.063-3.313-1.087h-.03c-.51 0-3.848.415-6.642.801-2.797.387-6.303.915-7.14 1.227-1.153.432-2.07.997-2.796 1.728C.05 7.332-.113 8.731.054 10.553c.13 1.412.875 6.975 1.302 8.248.574 1.717 1.694 2.75 3.154 2.909.36.039.704.059 1.045.059 1.28 0 2.295-.278 3.47-.598 1.848-.505 4.147-1.13 8.893-1.13h.14c1.162 0 4.008-.263 5.303-2.687.693-1.297.652-2.87.629-3.811zm-7.719-1.67-.105.066c-.274.185-.547.373-.819.563l-4.298 2.975c-.27.21-.748.521-1.016.521a.236.236 0 0 1-.107-.024c-.226-.12-.303-.94-.356-1.34l-.011-.087c-.065-.478-.594-5.035-.654-5.535-.017-.142-.105-.663.055-.781.05-.037.12-.05.2-.05.195 0 .442.083.549.118.845.272 5.083 1.774 6.4 2.448.038.02.079.04.122.057.188.08.446.192.452.51.004.304-.225.446-.412.56z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiYoutubekidsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
