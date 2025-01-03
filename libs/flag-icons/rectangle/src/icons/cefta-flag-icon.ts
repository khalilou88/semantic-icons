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
  selector: 'svg[si-cefta-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#039" d="M0 0h640v480H0z" />
    <svg:circle
      cx="320"
      cy="249.8"
      r="30.4"
      fill="none"
      stroke="#fc0"
      stroke-width="27.5"
    />
    <svg:circle
      cx="320"
      cy="249.8"
      r="88.3"
      fill="none"
      stroke="#fc0"
      stroke-width="27.5"
    />
    <svg:path fill="#039" d="m404.7 165.1 84.7 84.7-84.7 84.7-84.7-84.7z" />
    <svg:path
      fill="#fc0"
      d="M175.7 236.1h59.2v27.5h-59.2zm259.1 0h88.3v27.5h-88.3zM363 187.4l38.8-38.8 19.4 19.5-38.7 38.7zM306.3 48.6h27.5v107.1h-27.5z"
    />
    <svg:circle cx="225.1" cy="159.6" r="13.7" fill="#fc0" />
    <svg:circle cx="144.3" cy="249.8" r="13.7" fill="#fc0" />
    <svg:circle cx="320" cy="381.4" r="13.7" fill="#fc0" />
    <svg:circle cx="320" cy="425.5" r="13.7" fill="#fc0" />
    <svg:circle cx="408.3" cy="249.8" r="13.7" fill="#fc0" />
    <svg:path
      fill="#fc0"
      d="m208.3 341.5 19.5-19.4 19.4 19.4-19.4 19.5zm204.7 21 19.5-19.5 19.5 19.5-19.5 19.4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCeftaFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
