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
  selector: 'svg[si-maptiler-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>MapTiler</title>
    <svg:path
      d="m7.794 1.655 4.188 4.188 4.204-4.204A6.13 6.13 0 0 0 12 0a6.136 6.136 0 0 0-4.204 1.655ZM3.25 6.197 7.455 1.99l4.19 4.19-4.206 4.207Zm-.315 8.697 4.168-4.168-2.889-2.89-1.298-1.299a6.19 6.19 0 0 0 .02 8.357zm14.728-5.64 3.073-3.073-4.208-4.207-4.207 4.207 4.207 4.206Zm-6.015 6.013L7.44 11.061l-4.172 4.172 4.206 4.208zm5.216-4.543 4.185 4.185a6.18 6.18 0 0 0 .02-8.387l-4.205 4.202zm-2.448 6.639 2.093 2.092 4.207-4.206-4.188-4.188-4.207 4.206zM11.968 24a3007.16 3007.16 0 0 0 4.2-4.208l-4.187-4.188-4.17 4.174c1.386 1.407 2.773 2.813 4.157 4.222Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMaptilerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
