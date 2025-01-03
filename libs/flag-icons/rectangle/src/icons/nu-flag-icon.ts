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
  selector: 'svg[si-nu-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fedd00" d="M0 0h640v480H0z" />
    <svg:path fill="#012169" d="M0 0h320v240H0z" />
    <svg:path
      fill="#fff"
      d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
    />
    <svg:path
      fill="#c8102e"
      d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
    />
    <svg:path fill="#fff" d="M120.5 0v240h80V0zM0 80v80h320V80z" />
    <svg:path fill="#c8102e" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" />
    <svg:circle cx="160" cy="120" r="40.8" fill="#012169" />
    <svg:path
      fill="#fedd00"
      d="m160 79.2 24 73.8-62.8-45.6h77.6L136 153M66.7 98.3l14 43.4L43.9 115h45.7l-37 26.8m200.7-43.5 14.1 43.4-36.9-26.8h45.7l-37 26.8M160 178.3l14.1 43.4-37-26.8h45.7l-37 26.8M160 18.3l14.1 43.4-37-26.8h45.7l-37 26.8"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNuFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}