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
  selector: 'svg[si-gi-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#d80027" d="m0 345 256.3-31.3L512 345v167H0z" />
      <svg:path fill="#eee" d="M0 0h512v345H0z" />
      <svg:path
        fill="#d80027"
        d="M356.2 211.5V178h11.1v-22.3H345V167h-22.2v-11.2h-22.3v22.3h11.2v33.4h-22.3v-78h11.1v-22.2h-22.2v11.1H267v-11h-22v11h-11.2v-11h-22.2v22.2h11.1v77.9h-22.3V178h11.2v-22.3h-22.3V167H167v-11.2h-22.3v22.3h11.1v33.4h-22.2v89h244.8v-89z"
      />
      <svg:path
        fill="#ffda44"
        d="M256 289.4a33.4 33.4 0 0 0-11.1 64.9v46.4h-33.4v44.5H267v-91a33.4 33.4 0 0 0-11.1-64.8zm0 44.5a11.1 11.1 0 1 1 0-22.2 11.1 11.1 0 0 1 0 22.2z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGiFlagIcon implements OnInit {
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
