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
  selector: 'svg[si-es-ar-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path
        fill="#ffda44"
        d="M0 0v57l32 29-32 28v57l32 29-32 28v57l32 28-32 28v57l32 29-32 28v57h512v-57l-32-28 32-29v-57l-32-28 32-28v-57l-32-28 32-29v-57l-32-28 32-29V0H0z"
      />
      <svg:path
        fill="#d80027"
        d="M0 57h512v57H0Zm0 114h512v57H0Zm0 114h512v56H0Zm0 113h512v57H0Z"
      />
      <svg:path
        fill="#ff9811"
        d="M96 128v160l96 96c53 0 96-43 96-96l-48-48 48-48v-64h-28v32h-27v-32h-27v32h-28v-32h-27v32h-28v-32z"
      />
      <svg:path fill="#0052b4" d="M192 192h96v96h-96z" />
      <svg:path fill="#eee" d="M192 288v96a96 96 0 0 1-96-96Z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEsArFlagIcon implements OnInit {
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
