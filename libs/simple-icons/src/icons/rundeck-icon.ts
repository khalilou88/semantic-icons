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
  selector: 'svg[si-rundeck-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Rundeck</svg:title>
    <svg:path
      d="M19.35 4.8 16.325 0H.115L3.14 4.8h16.21zM.115 24h16.21l3.025-4.8H3.14L.115 24zM6.163 9.6h16.21l1.512 2.4-1.512 2.4H6.163L7.675 12 6.163 9.6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRundeckIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
