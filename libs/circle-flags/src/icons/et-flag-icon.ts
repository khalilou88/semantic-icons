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
  selector: 'svg[si-et-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="m0 345 255.7-31L512 345v167H0z" />
      <svg:path fill="#ffda44" d="m0 167 258-40.7L512 167v178H0z" />
      <svg:path fill="#6da544" d="M0 0h512v167H0z" />
      <svg:circle cx="256" cy="256" r="122.4" fill="#0052b4" />
      <svg:g fill="#ffda44">
        <svg:path
          d="m256 161.2 22 68h71.7l-58 42 22.3 68.3-58-42.3-58 42.2 22.2-68.1-58-42H234z"
        />
        <svg:path
          d="m344.1 273-70-22.9 43.2-59.6-18-13L256 237l-43.3-59.7-18 13.1 43.3 59.7-70.1 22.7 6.9 21.2 70-22.8V345h22.3v-73.7l70.1 22.8z"
        />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEtFlagIcon implements OnInit {
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
