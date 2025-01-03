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
  selector: 'svg[si-rw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#496e2d" d="m0 378.5 254.1-22.1L512 378.5V512H0z" />
      <svg:path fill="#ffda44" d="m0 256.1 255-30.3 257 30.3v122.4H0z" />
      <svg:path fill="#338af3" d="M0 0h512v256H0z" />
      <svg:path
        fill="#ffda44"
        d="m289.4 150 31.3 14.6L304 195l34-6.5 4.3 34.3 23.6-25.2 23.7 25.2 4.3-34.3 34 6.5-16.7-30.3 31.2-14.7-31.2-14.7 16.6-30.3-34 6.5-4.2-34.3-23.7 25.3-23.6-25.3-4.3 34.3-34-6.5 16.7 30.3z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRwFlagIcon implements OnInit {
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
