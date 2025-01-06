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
  selector: 'svg[si-bandage-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      x="-24.43"
      y="167.88"
      width="560.87"
      height="176.25"
      rx="88.12"
      ry="88.12"
      transform="rotate(-45 256 256.002)"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:rect
      x="169.41"
      y="156.59"
      width="176"
      height="196"
      rx="32"
      ry="32"
      transform="rotate(45 257.409 254.582)"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <svg:circle cx="256" cy="208" r="16" />
    <svg:circle cx="304" cy="256" r="16" />
    <svg:circle cx="208" cy="256" r="16" />
    <svg:circle cx="256" cy="304" r="16" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBandageOutlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
