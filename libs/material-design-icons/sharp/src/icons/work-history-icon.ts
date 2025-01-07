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
  selector: 'svg[si-work-history-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.66 11.13c2-.37 3.88.11 5.34 1.13V6h-6V2H8v4H2v15h9.68a7 7 0 0 1-.52-4.51c.59-2.7 2.78-4.86 5.5-5.36zM10 4h4v2h-4V4z"
    />
    <svg:path
      d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWorkHistoryIcon implements OnInit {
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
