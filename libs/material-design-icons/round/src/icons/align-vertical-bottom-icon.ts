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
  selector: 'svg[si-align-vertical-bottom-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 22H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zM8.5 2C7.67 2 7 2.67 7 3.5v13c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-13C10 2.67 9.33 2 8.5 2zm7 6c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlignVerticalBottomIcon implements OnInit {
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
