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
  selector: 'svg[si-revealdotjs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>reveal.js</svg:title>
    <svg:path
      d="M4.271 1.352a.774.774 0 0 0-.787.775v19.761c0 .49.45.857.93.758l6.676-1.382-2.77-.614-3.675.762V2.607l3.101.686 2.777-.574-6.097-1.35a.774.774 0 0 0-.155-.017zm15.315.002L5.145 4.344v15.092l14.43 3.195a.774.774 0 0 0 .94-.758V2.111a.773.773 0 0 0-.93-.757zM2.984 4.79l-2.367.49A.774.774 0 0 0 0 6.04v11.639a.774.774 0 0 0 .607.754l2.377.525V4.791zm18.034.252V6.23l1.822.405v11.011l-1.822.377v1.186l2.365-.49A.774.774 0 0 0 24 17.96V6.322a.774.774 0 0 0-.607-.754l-2.375-.525z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRevealdotjsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'F2E142');
  }
}
