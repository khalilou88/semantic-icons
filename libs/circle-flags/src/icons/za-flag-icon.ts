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
  selector: 'svg[si-za-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="m0 0 192 256L0 512h47l465-189v-34l-32-33 32-33v-34L47 0Z"
      />
      <svg:path fill="#333" d="M0 142v228l140-114z" />
      <svg:path fill="#ffda44" d="M192 256 0 95v47l114 114L0 370v47z" />
      <svg:path
        fill="#6da544"
        d="M512 223H223L0 0v94l161 162L0 418v94l223-223h289z"
      />
      <svg:path fill="#d80027" d="M512 0H47l189 189h276z" />
      <svg:path fill="#0052b4" d="M512 512H47l189-189h276z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiZaFlagIcon implements OnInit {
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
