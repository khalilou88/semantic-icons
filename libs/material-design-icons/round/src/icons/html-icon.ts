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
  selector: 'svg[si-html-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 15c-.55 0-1-.45-1-1V9.75c0-.41.34-.75.75-.75s.75.34.75.75v3.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75H21zm-5-4.51h1v3.76c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1v2.75c0 .41.34.75.75.75s.75-.34.75-.75v-2.76zM5 9.75C5 9.34 4.66 9 4.25 9s-.75.34-.75.75V11h-2V9.75c0-.41-.34-.75-.75-.75S0 9.34 0 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5zm5.25.75c.41 0 .75-.34.75-.75S10.66 9 10.25 9h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h1v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHtmlIcon implements OnInit {
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
