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
  selector: 'svg[si-glasses-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M1 12C1 9.23858 3.23858 7 6 7C7.21392 7 8.32661 7.43307 9.19203 8.1515C9.91366 7.44003 10.905 7 12 7C13.095 7 14.0863 7.44003 14.808 8.1515C15.6734 7.43307 16.7861 7 18 7C20.7614 7 23 9.23858 23 12C23 14.7614 20.7614 17 18 17C15.2386 17 13 14.7614 13 12C13 11.1835 13.1964 10.411 13.5445 9.72905C13.177 9.28296 12.6209 9 12 9C11.3791 9 10.823 9.28296 10.4555 9.72905C10.8036 10.411 11 11.1835 11 12C11 14.7614 8.76142 17 6 17C3.23858 17 1 14.7614 1 12Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGlassesFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
