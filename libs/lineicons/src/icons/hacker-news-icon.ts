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
  selector: 'svg[si-hacker-news-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3V21H21V3H3ZM12.6097 13.1032V17.1387H11.3323V13.0161L8.13871 6.83226H9.61935C11.7387 10.7516 11.5935 10.9258 12 11.8548C12.4935 10.7516 12.2032 10.8677 14.4677 6.83226H15.8613L12.6097 13.1032Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHackerNewsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
