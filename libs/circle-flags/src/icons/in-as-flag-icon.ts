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
  selector: 'svg[si-in-as-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0z" />
      <svg:path
        fill="#333"
        d="M256 112c-22 0-40 18-40 40-7-12-20-20-34-20a40 40 0 1 0 0 80h6v126h-2c-10 0-20 8-20 20v16c0 10 10 20 20 20h2v2c0 12 10 20 20 20h96c12 0 20-8 20-20v-2h2c12 0 20-10 20-20v-16c0-12-8-20-20-20h-2V212h6a40 40 0 1 0 0-80c-14 1-27 9-34 22v-2c0-22-18-40-40-40z"
      />
      <svg:rect
        width="224"
        height="32"
        x="144"
        y="448"
        fill="#acabb1"
        rx="16"
        ry="16"
      />
      <svg:rect
        width="192"
        height="48"
        x="160"
        y="32"
        fill="#acabb1"
        rx="24"
        ry="24"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInAsFlagIcon implements OnInit {
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
