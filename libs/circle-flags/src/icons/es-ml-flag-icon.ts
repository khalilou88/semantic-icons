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
  selector: 'svg[si-es-ml-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#338af3" d="M0 0h512v512H0z" />
      <svg:path fill="#acabb1" d="M122.4 278.3h267.2v33.4H122.4z" />
      <svg:path
        fill="#ffda44"
        d="m167 178 89 11.2 89-11.1v-53.4l-35.6 17.8L256 89l-53.4 53.5-35.6-17.8z"
      />
      <svg:path
        fill="#eee"
        d="M144.7 345h-33.4v-61.2l11.1-16.7-11.1-16.7v-39h33.4zm256 0h-33.4V211.6h33.4v39l-11.1 17 11.1 16.3z"
      />
      <svg:path fill="#acabb1" d="M111.3 250.4h289.4v33.4H111.3z" />
      <svg:path
        fill="#eee"
        d="M256 389.6c-49.1 0-89-40-89-89V178h178v122.4a89 89 0 0 1-89 89z"
      />
      <svg:path
        fill="#0052b4"
        d="M256 356.2a55.7 55.7 0 0 1-55.6-55.7v-89h111.2v89a55.7 55.7 0 0 1-55.6 55.7z"
      />
      <svg:path
        fill="#d80027"
        d="M167 178h33.4v33.5H167zm144.7 0H345v33.5h-33.4zm0 72.4H345v33.4h-33.4zm-144.7 0h33.3v33.4H167zm72.3-72.3h33.4v33.4h-33.4zM256 356c-5.8 0-11.4-.8-16.7-2.5V388a89.4 89.4 0 0 0 33.4 0v-34.4a55.5 55.5 0 0 1-16.7 2.6zm-54.9-46.5-26.7 26.6a89.3 89.3 0 0 0 19.4 28l23.6-23.7a55.5 55.5 0 0 1-16.3-31zm136.5 26.6-26.7-26.6a55.6 55.6 0 0 1-16.3 31l23.6 23.5a89.4 89.4 0 0 0 19.4-27.9z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEsMlFlagIcon implements OnInit {
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