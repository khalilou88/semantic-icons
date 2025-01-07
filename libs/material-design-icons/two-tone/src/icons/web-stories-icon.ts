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
  selector: 'svg[si-web-stories-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M4 4h9v16H4z" opacity=".3" />
    <svg:path
      d="M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h9v16zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWebStoriesIcon implements OnInit {
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
