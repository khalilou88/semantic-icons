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
  selector: 'svg[si-chess-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 2a4 4 0 0 1 4 4a5.03 5.03 0 0 1 -.438 2.001l.438 -.001a1 1 0 0 1 .117 1.993l-.117 .007h-1.263l1.24 5.79a1 1 0 0 1 -.747 1.184l-.113 .02l-.117 .006h-6a1 1 0 0 1 -.996 -1.093l.018 -.117l1.24 -5.79h-1.262a1 1 0 0 1 -.117 -1.993l.117 -.007h.438a5.154 5.154 0 0 1 -.412 -1.525l-.02 -.259l-.006 -.216a4 4 0 0 1 4 -4z"
    />
    <svg:path
      d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiChessIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}