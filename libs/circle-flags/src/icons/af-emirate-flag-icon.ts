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
  selector: 'svg[si-af-emirate-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0Z" />
      <svg:path
        fill="#333"
        d="M131 189v78c0 12-10 22-22 22v34c30 0 55-25 55-56v-78zm50 0v45a39 39 0 0 0 39 39 39 39 0 0 0 22-7 39 39 0 0 0 22 7l5-1a22 22 0 0 1-21 17v34c30 0 55-25 55-56v-78h-33v45a6 6 0 0 1-11 0v-45h-34v45a6 6 0 0 1-11 0v-45zm139 0v78h33v-78zm50 0v78c0 12-10 22-22 22v34c31 0 56-25 56-56v-78ZM181 289v34h50v-34z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAfEmirateFlagIcon implements OnInit {
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
