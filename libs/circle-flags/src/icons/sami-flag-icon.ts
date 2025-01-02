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
  selector: 'svg[si-sami-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#ffda44" d="M199 0h32l32 256-32 256h-32l-32-256Z" />
      <svg:path fill="#496e2d" d="M167 0h32v512h-32l-32-256Z" />
      <svg:path fill="#0052b4" d="M231 0h281v512H231Z" />
      <svg:path
        fill="#d80027"
        d="M0 0h167v512H0Zm199 132-32 16 32 16a92 92 0 1 1 0 184l-32 16 32 16a124 124 0 0 0 0-248z"
      />
      <svg:path
        fill="#0052b4"
        d="M199 132a124 124 0 0 0 0 248v-32a92 92 0 1 1 0-184z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSamiFlagIcon implements OnInit {
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
