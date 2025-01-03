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
  selector: 'svg[si-us-mo-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="m0 170 256-64 256 64v172l-256 64L0 342Z" />
      <svg:path fill="#d80027" d="M0 0h512v170H0Z" />
      <svg:path fill="#0052b4" d="M0 342h512v170H0Z" />
      <svg:circle cx="256" cy="256" r="160" fill="#0052b4" />
      <svg:circle cx="256" cy="256" r="104" fill="#eee" />
      <svg:path
        fill="#eee"
        d="m240 148.4 41.6-30h-51.2l41.6 30-16-48.8zM363.6 240l30 41.6v-51.2l-30 41.6 48.8-16zM272 363.6l-41.6 30h51.2l-41.6-30 16 48.8zM148.4 272l-30-41.6v51.2l30-41.6-48.8 16zm147.5-117.2 51.1-5.2-44.4-25.6 21.1 46.8 10.5-50.3zm61.3 141.1 5.2 51.1 25.6-44.4-46.8 21.1 50.2 10.5zm-141.1 61.3-51.1 5.2 44.4 25.6-21.1-46.8-10.5 50.2zm-61.3-141.1-5.2-51.1-25.6 44.4 46.8-21.1-50.2-10.5Zm186.4-27.8 46.8 21.1-25.6-44.4-5.2 51.1 34.3-38.3zm-17.5 152.9L302.6 388l44.4-25.6-51.1-5.2 38.3 34.2zm-152.9-17.5L124 302.6l25.6 44.4 5.2-51.1-34.3 38.3zm17.5-152.9 21.1-46.8-44.4 25.6 51.1 5.2-38.3-34.2z"
      />
      <svg:path
        fill="#338af3"
        d="M256 168a88 88 0 0 0-74.9 42H331a88 88 0 0 0-75-42z"
      />
      <svg:circle cx="256" cy="280" r="56" fill="#ff9811" />
      <svg:path
        fill="#eee"
        d="M288 280a32 32 0 0 1-32 32l-16-32 16-32a32 32 0 0 1 32 32z"
      />
      <svg:path fill="#0052b4" d="M256 248a32 32 0 0 0-32 32l16 16 16-16z" />
      <svg:path fill="#d80027" d="M256 312a32 32 0 0 1-32-32h32z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUsMoFlagIcon implements OnInit {
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
