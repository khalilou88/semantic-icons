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
  selector: 'svg[si-ug-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#ffda44" d="M0 85v342l256 31 256-31V85L256 53Z" />
      <svg:path fill="#333" d="M0 0h512v85H0z" />
      <svg:path fill="#d80027" d="M0 171h512v85l-256 31L0 256Z" />
      <svg:path fill="#333" d="M0 256h512v85H0z" />
      <svg:path fill="#d80027" d="M0 427h512v85H0z" />
      <svg:circle cx="256" cy="256" r="85.3" fill="#eee" />
      <svg:path
        fill="#333"
        d="m287 260-31-13 8-26a17 17 0 0 0-5-16l8-8a28 28 0 0 0-19-8 28 28 0 0 0-20 8l8 8a17 17 0 0 0-5 12l1 5-12 12h21s-9 13-14 24c-4 11 0 25 12 30l6 2 11 10v12l-11 11h22v-23l10-10h21a22 22 0 0 0-11-30z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUgFlagIcon implements OnInit {
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
