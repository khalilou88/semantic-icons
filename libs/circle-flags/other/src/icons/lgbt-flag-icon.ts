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
  selector: 'svg[si-lgbt-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#9c27b0" d="m0 425 256-32 256 32v87H0Z" />
      <svg:path fill="#0052b4" d="m0 340 256-32 256 32v85H0Z" />
      <svg:path fill="#6da544" d="m0 255 256-32 256 32v85H0Z" />
      <svg:path fill="#ffda44" d="m0 170 256-32 256 32v85H0Z" />
      <svg:path fill="#ff9811" d="m0 85 256-32 256 32v85H0Z" />
      <svg:path fill="#d80027" d="M0 0h512v85H0z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLgbtFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
