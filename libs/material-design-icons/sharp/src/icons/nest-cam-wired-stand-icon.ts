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
  selector: 'svg[si-nest-cam-wired-stand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m18 .85-6.02.55C8.95 1.7 6.37 4 6.04 7.03a6.362 6.362 0 0 0 5.68 7.04l1.9.19-.56.85c-.88-.19-1.83-.18-2.85.25-2 .85-3.21 2.89-3.21 5.05V23h10v-3c0-1.67-.83-3.15-2.09-4.06l.97-1.45 2.12.23V.85z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNestCamWiredStandIcon implements OnInit {
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
