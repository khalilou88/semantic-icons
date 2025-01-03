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
  selector: 'svg[si-vg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <svg:path
        fill="#ffda44"
        d="m367.3 256-69.2 69.2a77.9 77.9 0 0 0 138.4 0z"
      />
      <svg:path
        fill="#6da544"
        d="M289.4 133.6V256c0 59.6 77.9 78 77.9 78s78-18.4 78-78V133.6h-156z"
      />
      <svg:path fill="#496e2d" d="M445.2 256zm-155.8 0z" />
      <svg:path
        fill="#ffda44"
        d="M311.7 155.8h22.2v22.3h-22.2zm0 50.1h22.2v22.3h-22.2zm0 50.1h22.2v22.3h-22.2zm89-100.2H423v22.3h-22.3zm0 50.1H423v22.3h-22.3zm0 50.1H423v22.3h-22.3z"
      />
      <svg:path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <svg:path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
      />
      <svg:path fill="#eee" d="M350.6 189.2H384v89h-33.4z" />
      <svg:circle cx="367.3" cy="189.2" r="16.7" fill="#a2001d" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiVgFlagIcon implements OnInit {
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
