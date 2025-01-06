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
  selector: 'svg[si-star-smile-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9996 0.5L16.2256 6.68342L23.4123 8.7918L18.8374 14.7217L19.053 22.2082L11.9996 19.6897L4.94617 22.2082L5.16179 14.7217L0.586914 8.7918L7.7736 6.68342L11.9996 0.5ZM11.9996 4.044L9.02186 8.40151L3.95659 9.887L7.18152 14.0655L7.02859 19.34L11.9996 17.566L16.9696 19.34L16.8177 14.0655L20.0416 9.887L14.9773 8.40151L11.9996 4.044ZM9.99959 12C9.99959 13.1046 10.895 14 11.9996 14C13.1042 14 13.9996 13.1046 13.9996 12H15.9996C15.9996 14.2091 14.2087 16 11.9996 16C9.79045 16 7.99959 14.2091 7.99959 12H9.99959Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStarSmileLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
