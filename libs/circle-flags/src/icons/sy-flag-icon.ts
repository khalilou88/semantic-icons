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
  selector: 'svg[si-sy-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <svg:path fill="#d80027" d="M0 0h512v167H0z" />
      <svg:path fill="#333" d="M0 345h512v167H0z" />
      <svg:path
        fill="#6da544"
        d="m153 194.8 13.8 42.5h44.7l-36.2 26.3 13.8 42.5-36.1-26.3-36.2 26.3 13.8-42.5-36.2-26.3h44.7zm206 0 13.9 42.5h44.7l-36.2 26.3 13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSyFlagIcon implements OnInit {
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
