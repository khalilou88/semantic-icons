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
  selector: 'svg[si-aldinord-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Aldi Nord</svg:title>
    <svg:path
      d="M13.812 2.057 6.086 13.73c-.349.523-.581.89-.592 1.461-.01.541.128 1.027.395 1.495h1.46a2.11 2.11 0 0 1-.546-1.531c.007-.125.03-.28.067-.405h9.833a1.933 1.933 0 0 0-.297-.583H7.145a11.3 11.3 0 0 1 .379-.604l.507-.76h7.47l-.408-.614H8.44l6.702-10.132zm-3.502 0L3.092 12.963c-.549.823-.806 1.304-.806 2.068 0 .871.232 1.255.409 1.655h1.153a4.007 4.007 0 0 1-.096-.232 3.327 3.327 0 0 1-.233-1.23c.02-.811.302-1.356.772-2.058l7.381-11.109zm6.34 14.629c.338-.352.58-.927.547-1.532-.028-.517-.343-1.026-.72-1.591l-4.234-6.35.648-.974 4.993 7.491c.348.523.58.89.592 1.461a2.833 2.833 0 0 1-.395 1.495h-1.43zm3.508 0c.041-.09.062-.144.094-.23.123-.324.27-.768.26-1.231-.02-.812-.302-1.357-.773-2.059l-5.745-8.58.665-.996 6.25 9.373c.548.824.805 1.303.805 2.068 0 .871-.232 1.255-.409 1.655zm-17.53.457v4.8h18.743v-4.8zm3.588.571h1.672l1.873 3.658H8.104l-.176-.385H6.177L6 21.372H4.343zm3.761 0h1.67v2.601h1.435v1.057H9.977zm3.422 0h2.43c1.002 0 1.814.82 1.814 1.83a1.822 1.822 0 0 1-1.815 1.828h-2.43zm4.614 0h1.644v3.658h-1.644zm-2.974 1.034v1.59h.352c.41 0 .743-.356.743-.795 0-.44-.332-.795-.743-.795zm-7.996.465-.374.811h.767zm.84-6.189h7.767l.614.922H7.276c.088-.145.607-.922.607-.922m4.035-10.967L4.488 13.24c-.465.695-.731 1.214-.75 1.99-.01.452.128 1.013.337 1.457h1.576a2.942 2.942 0 0 1-.376-1.497c.012-.615.266-1.01.614-1.531l7.678-11.6zm6.431 14.629a2.94 2.94 0 0 0 .376-1.497c-.012-.615-.266-1.01-.613-1.532l-5.079-7.625.827-1.247 5.652 8.454c.465.695.732 1.214.75 1.99.011.452-.128 1.013-.338 1.457H18.35zM23.429 0H.57v24h22.86zm-.915 23.086H1.486V.914h21.028z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAldinordIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '2490D7');
  }
}
