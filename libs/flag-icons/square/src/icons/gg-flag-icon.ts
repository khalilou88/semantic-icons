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
  selector: 'svg[si-gg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h512v512H0z" />
    <svg:path fill="#e8112d" d="M192 0h128v512H192z" />
    <svg:path fill="#e8112d" d="M0 187.7h512v136.6H0z" />
    <svg:path
      id="gg-a"
      fill="#f9dd16"
      d="m46 305.8 23.3-25h210v-49.7h-210L46 206.2z"
    />
    <use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="matrix(0 1.06667 -.9375 0 496 -17)"
    />
    <use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="matrix(0 -1.06667 .9375 0 16 529)"
    />
    <use
      xlink:href="#gg-a"
      width="36"
      height="24"
      transform="rotate(180 256 256)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGgFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}