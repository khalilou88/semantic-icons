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
  selector: 'svg[si-blackmagicdesign-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Blackmagic Design</title>
    <svg:path
      d="M10.385 0c-1.15 0-2.076.93-2.076 2.076V5.31c0 1.148.929 2.076 2.076 2.076h3.23c1.15 0 2.076-.93 2.076-2.076V2.076A2.074 2.074 0 0 0 13.615 0h-3.23zm0 .924h3.23c.638 0 1.155.514 1.155 1.152V5.31c0 .638-.516 1.152-1.155 1.152h-3.23A1.152 1.152 0 0 1 9.23 5.309V2.076c0-.638.516-1.152 1.155-1.152zm0 7.385c-1.15 0-2.076.929-2.076 2.076v3.23c0 1.15.929 2.076 2.076 2.076h3.23c1.15 0 2.076-.929 2.076-2.076v-3.23c0-1.15-.929-2.076-2.076-2.076h-3.23zm0 .921h3.23c.638 0 1.155.516 1.155 1.155v3.23c0 .638-.516 1.155-1.155 1.155h-3.23a1.154 1.154 0 0 1-1.155-1.155v-3.23c0-.638.516-1.155 1.155-1.155zm0 7.385c-1.15 0-2.076.93-2.076 2.076v3.233c0 1.149.929 2.076 2.076 2.076h3.23c1.15 0 2.076-.93 2.076-2.076V18.69a2.075 2.075 0 0 0-2.076-2.076h-3.23zm0 .924h3.23c.638 0 1.155.514 1.155 1.152v3.233c0 .638-.516 1.152-1.155 1.152h-3.23a1.152 1.152 0 0 1-1.155-1.152V18.69c0-.638.516-1.152 1.155-1.152Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBlackmagicdesignIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
