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
  selector: 'svg[si-mm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fecb00" d="M0 0h512v512H0z" />
    <svg:path fill="#34b233" d="M0 170.7h512V512H0z" />
    <svg:path fill="#ea2839" d="M0 341.3h512V512H0z" />
    <svg:path
      id="mm-a"
      fill="#fff"
      stroke-width="188.7"
      d="M312.6 274H199.4L256 85.3Z"
    />
    <use
      xlink:href="#mm-a"
      width="100%"
      height="100%"
      transform="rotate(-144 256 274)"
    />
    <use
      xlink:href="#mm-a"
      width="100%"
      height="100%"
      transform="rotate(-72 256 274)"
    />
    <use
      xlink:href="#mm-a"
      width="100%"
      height="100%"
      transform="rotate(72 256 274)"
    />
    <use
      xlink:href="#mm-a"
      width="100%"
      height="100%"
      transform="rotate(144 256 274)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMmFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
