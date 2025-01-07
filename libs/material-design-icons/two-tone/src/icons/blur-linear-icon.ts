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
  selector: 'svg[si-blur-linear-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 16.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
    />
    <svg:circle cx="9" cy="12" r="1" />
    <svg:circle cx="13" cy="8" r="1" />
    <svg:circle cx="13" cy="16" r="1" />
    <svg:path
      d="M17 12.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
    />
    <svg:circle cx="13" cy="12" r="1" />
    <svg:path d="M3 3h18v2H3z" />
    <svg:circle cx="5" cy="8" r="1.5" />
    <svg:circle cx="5" cy="12" r="1.5" />
    <svg:circle cx="5" cy="16" r="1.5" />
    <svg:path
      d="M17 8.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5z"
    />
    <svg:circle cx="9" cy="16" r="1" />
    <svg:circle cx="9" cy="8" r="1" />
    <svg:path d="M3 19h18v2H3z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBlurLinearIcon implements OnInit {
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
