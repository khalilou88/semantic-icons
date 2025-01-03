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
  selector: 'svg[si-ni-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#338af3"
        d="M0 0h512v144.7l-41.4 111.7L512 367.3V512H0V367.3l41.5-107.9L0 144.7z"
      />
      <svg:path fill="#eee" d="M0 144.7h512v222.6H0z" />
      <svg:path
        fill="#ffda44"
        d="M256 178a78 78 0 1 0 0 156 78 78 0 0 0 0-156zm0 122.5a44.5 44.5 0 1 1 0-89 44.5 44.5 0 0 1 0 89z"
      />
      <svg:path
        fill="#0052b4"
        d="M294.6 267.1 256 256l-38.6 11.1-12.8 22.3h102.8z"
      />
      <svg:path fill="#338af3" d="M256 200.3 230.3 245l25.7 11 25.7-11.1z" />
      <svg:path fill="#6da544" d="M217.4 267.1h77.2L281.7 245h-51.4z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNiFlagIcon implements OnInit {
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
