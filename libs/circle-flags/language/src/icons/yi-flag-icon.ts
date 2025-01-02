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
  selector: 'svg[si-yi-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 0h512v56l-25 32 25 34v268l-26 36 26 30v56H0v-56l25-34-25-32V122l27-33L0 56z"
      />
      <svg:path fill="#333" d="M0 390v66h512v-66z" />
      <svg:circle cx="256" cy="186" r="104" fill="#333" />
      <svg:circle cx="256" cy="186" r="84" fill="#eee" />
      <svg:circle cx="256" cy="186" r="64" fill="#333" />
      <svg:circle cx="256" cy="186" r="44" fill="#eee" />
      <svg:path fill="#333" d="m246 319-49 11v14h118v-14l-49-11z" />
      <svg:path fill="#eee" d="M148 78h216v108H148z" />
      <svg:path
        fill="#333"
        d="M246 180h20v150h-20zm87-8h34l-7 15h-20zm-40 0h34l-7 15h-20zm-108 0h34l-7 15h-20zm-40 0h34l-7 15h-20z"
      />
      <svg:path fill="#333" d="M239 172h34l-7 15h-20zM0 56v66h512V56z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiYiFlagIcon implements OnInit {
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
