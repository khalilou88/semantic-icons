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
  selector: 'svg[si-tf-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:path id="tf-a" fill="#fff" d="m0-21 12.3 38L-20-6.5h40L-12.3 17z" />
    </svg:defs>
    <svg:path fill="#002395" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M0 0h312.3v210H0z" />
    <svg:path fill="#002395" d="M0 0h102.4v204.8H0z" />
    <svg:path fill="#ed2939" d="M204.8 0h102.4v204.8H204.8z" />
    <svg:path
      fill="#fff"
      d="m282.4 234.2 16.5 26.3h46.9V352l-35.3-55-47.3 75.5h23l24.4-43.5 49.9 89.6 49.9-89.6 24.3 43.5h23L410.5 297l-35.2 55v-50.6h21.1l15.7-25h-36.8v-16h46.9l16.5-26.2zm55 112h-51.2v18h51.2zm97.3 0h-51.2v18h51.2z"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="416"
      y="362"
      transform="translate(-172)scale(1.28)"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="371"
      y="328"
      transform="translate(-172)scale(1.28)"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="461"
      y="328"
      transform="translate(-172)scale(1.28)"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="333"
      y="227"
      transform="translate(-172)scale(1.28)"
    />
    <svg:use
      xlink:href="#tf-a"
      width="100%"
      height="100%"
      x="499"
      y="227"
      transform="translate(-172)scale(1.28)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTfFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
