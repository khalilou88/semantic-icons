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
  selector: 'svg[si-zw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#6da544" d="M31.4 0H512v512H31.4z" />
      <svg:path
        fill="#ffda44"
        d="M57.8 73.3H512v73.3l-65.1 110 65.1 110v73.3H57.8z"
      />
      <svg:path
        fill="#d80027"
        d="M132 146.6h380v73.3l-27 36 27 37.3v73.3H132z"
      />
      <svg:path fill="#eee" d="M0 0v512l279.8-256z" />
      <svg:path
        fill="#d80027"
        d="m103 189.2 16.5 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6h53.6z"
      />
      <svg:path
        fill="#ffda44"
        d="m148.5 260.2-43.2-15.3-3.4-31a16.7 16.7 0 1 0-32.5 7.6l-12 12.1h21.5c0 22.4-16.7 22.4-16.7 44.7l9.2 22.2h55.7l9.3-22.2a22.2 22.2 0 0 0 1.7-6.6c8-3.2 10.4-11.5 10.4-11.5z"
      />
      <svg:path
        fill="#333"
        d="m31.4 0 220 220H512v73.2H250.2L31.4 512H0l256-256L0 0z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiZwFlagIcon implements OnInit {
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
