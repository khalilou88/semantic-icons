import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-geode-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Geode</title>
    <svg:path
      d="M12 0c-.30206 0-.60438.09583-.85742.28906L.5957 8.34375c-.4705.3593-.66703.97346-.49218 1.53906l4.05664 13.1211c.1829.59168.7303.99609 1.3496.99609h12.98047c.61931 0 1.1667-.40441 1.34961-.9961l4.05664-13.12109c.17485-.5656-.02168-1.17975-.49218-1.53906l-.97266-.74219-1.11914 3.51758-3.07031 9.99024c-.12005.3903-.48032.65624-.88868.65624H6.57813c-.40836 0-.76863-.26593-.88868-.65624l-3.36132-10.9336c-.11419-.37133.01411-.77514.32226-1.01172l8.74805-6.7168a.93.93 0 0 1 .10937-.07226L13.55273.82031l-.6953-.53125C12.60437.09583 12.30205 0 12 0m.06836 4.75781c-.16254 0-.32493.05197-.46094.15625l-6.52344 5.0039c-.25142.19277-.35688.52145-.26367.82423l.4336 1.4082 2.19726-1.61914 4.31445-3.37695c.13717-.10727.33159-.10727.46875 0l4.70508 3.68164c.12315.09628.17407.25661.1289.40625l-1.80858 5.99219c-.0483.15993-.19619.26953-.36329.26953H9.10352a.377.377 0 0 1-.07618-.0078H6.9004l.42774 1.39257c.0979.3179.39196.53516.7246.53516h8.0332c.33265 0 .62477-.21725.72266-.53516l2.50977-8.14648c.09321-.30278-.01225-.63146-.26367-.82422l-6.5254-5.00392c-.136-.10428-.29839-.15625-.46093-.15625Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGeodeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}