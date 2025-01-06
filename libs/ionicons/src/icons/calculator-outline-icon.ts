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
  selector: 'svg[si-calculator-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      x="112"
      y="48"
      width="288"
      height="416"
      rx="32"
      ry="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M160.01 112H352v64H160.01z"
    />
    <svg:circle cx="168" cy="248" r="24" />
    <svg:circle cx="256" cy="248" r="24" />
    <svg:circle cx="344" cy="248" r="24" />
    <svg:circle cx="168" cy="328" r="24" />
    <svg:circle cx="256" cy="328" r="24" />
    <svg:circle cx="168" cy="408" r="24" />
    <svg:circle cx="256" cy="408" r="24" />
    <svg:rect x="320" y="304" width="48" height="128" rx="24" ry="24" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCalculatorOutlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
