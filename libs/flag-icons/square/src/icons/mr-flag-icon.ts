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
  selector: 'svg[si-mr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#cd2a3e" d="M0 0h512v512H0z" />
    <svg:path fill="#006233" d="M0 76.8h512v358.4H0z" />
    <svg:path
      class="mr-st1"
      fill="#ffc400"
      d="M416 164.9a160 160 0 0 1-320 0 165.2 165.2 0 0 0-5.4 41.8A165.4 165.4 0 1 0 416 165z"
    />
    <svg:path
      fill="#ffc400"
      d="m256 100-14.4 44.3h-46.5l37.6 27.3-14.3 44.2 37.6-27.3 37.6 27.3-14.4-44.2 37.7-27.3h-46.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
