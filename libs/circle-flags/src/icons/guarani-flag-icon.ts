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
  selector: 'svg[si-guarani-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <svg:path fill="#d80027" d="M0 0h512v167H0Z" />
      <svg:path fill="#0052b4" d="M0 345h512v167H0Z" />
      <svg:path
        fill="#333"
        d="M256 80A176 176 0 0 0 80 256a176 176 0 0 0 176 176 176 176 0 0 0 176-176A176 176 0 0 0 256 80Zm0 16a160 160 0 0 1 160 160 160 160 0 0 1-160 160A160 160 0 0 1 96 256 160 160 0 0 1 256 96Zm0 7a32 32 0 0 0-32 32 32 32 0 0 0 20 30v28a64 64 0 0 0-24 10l-20-20a32 32 0 0 0-7-35 32 32 0 0 0-23-10 32 32 0 0 0-22 10 32 32 0 0 0 0 45 32 32 0 0 0 35 7l20 20a64 64 0 0 0-10 24h-29a32 32 0 0 0-29-20 32 32 0 0 0-32 32 32 32 0 0 0 32 32 32 32 0 0 0 29-20h29a64 64 0 0 0 10 24l-20 20a32 32 0 0 0-35 7 32 32 0 0 0 0 45 32 32 0 0 0 45 0 32 32 0 0 0 7-35l20-20a64 64 0 0 0 24 10v28a32 32 0 0 0-20 30 32 32 0 0 0 32 32 32 32 0 0 0 32-32 32 32 0 0 0-20-30v-28a64 64 0 0 0 24-10l20 20a32 32 0 0 0 7 35 32 32 0 0 0 45 0 32 32 0 0 0 0-45 32 32 0 0 0-35-7l-20-20a64 64 0 0 0 10-24h28a32 32 0 0 0 30 20 32 32 0 0 0 32-32 32 32 0 0 0-32-32 32 32 0 0 0-30 20h-28a64 64 0 0 0-10-24l20-20a32 32 0 0 0 35-7 32 32 0 0 0 0-45 32 32 0 0 0-22-10 32 32 0 0 0-23 10 32 32 0 0 0-7 35l-20 20a64 64 0 0 0-24-10v-28a32 32 0 0 0 20-30 32 32 0 0 0-32-32Zm0 105a48 48 0 0 1 48 48 48 48 0 0 1-48 48 48 48 0 0 1-48-48 48 48 0 0 1 48-48zm0 16a32 32 0 0 0-32 32 32 32 0 0 0 32 32 32 32 0 0 0 32-32 32 32 0 0 0-32-32z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGuaraniFlagIcon implements OnInit {
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
