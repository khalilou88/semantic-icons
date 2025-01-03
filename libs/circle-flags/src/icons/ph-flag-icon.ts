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
  selector: 'svg[si-ph-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v256l-265 45.2z" />
      <svg:path fill="#d80027" d="M210 256h302v256H0z" />
      <svg:path fill="#eee" d="M0 0v512l256-256z" />
      <svg:path
        fill="#ffda44"
        d="M175.3 256 144 241.3l16.7-30.3-34 6.5-4.3-34.3-23.6 25.2L75 183.2l-4.3 34.3-34-6.5 16.7 30.3L22.3 256l31.2 14.7L37 301l34-6.5 4.2 34.3 23.7-25.2 23.6 25.2 4.3-34.3 34 6.5-16.7-30.3zm-107-155.8 10.4 14.5 17-5.4-10.6 14.4 10.4 14.5-17-5.6L68 147l.2-17.9-17-5.6 17-5.4zm0 264.8 10.4 14.6 17-5.4-10.6 14.3 10.4 14.6-17-5.7L68 411.8l.2-17.9-17-5.6 17-5.4zm148.4-132.4L206.3 247l-17-5.4 10.5 14.4-10.4 14.6 17-5.7 10.6 14.4-.1-17.9 17-5.6-17.1-5.4z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPhFlagIcon implements OnInit {
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
