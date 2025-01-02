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
  selector: 'svg[si-ki-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <mask id="a"><svg:circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512l-.1 234.8-254.7 260.9L.3 234.8z" />
      <svg:path
        fill="#ffda44"
        d="m345 238-36.3 17.2 19.3 35.2-39.5-7.5-5 39.9-27.5-29.4-27.5 29.4-5-40-39.5 7.6 19.3-35.2L167 238l36.3-17.1-19.3-35.3 39.5 7.6 5-40 27.5 29.4 27.5-29.3 5 39.9 39.5-7.6-19.3 35.3zM322.8 83.6h-50.1a16.7 16.7 0 0 0-33.4 0h-50c0 9.2 8 16.7 17.2 16.7h-.6c0 9.2 7.5 16.7 16.7 16.7 0 9.2 7.5 16.7 16.7 16.7h33.4c9.2 0 16.7-7.5 16.7-16.7 9.2 0 16.7-7.5 16.7-16.7h-.6c9.3 0 17.3-7.5 17.3-16.7z"
      />
      <svg:path
        fill="#eee"
        d="M85.3 234.8c-21.3 0-21.3 19.5-42.7 19.5-21.2 0-21.3-19.3-42.3-19.5v34.3l12.3 18.2L.3 303.4V336l12.8 18.2L.3 370.3v32.4l39.1 49.4 441.2 3 31.3-52.4v-32.4l-8.2-16.4 8.2-17.9v-32.6l-10.3-14 10.3-20.3v-34.3c-21.2 0-21.2 19.5-42.5 19.5s-21.4-19.5-42.7-19.5c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.3 0-21.3 19.5-42.6 19.5s-21.4-19.5-42.7-19.5z"
      />
      <svg:path
        fill="#0052b4"
        d="M85.3 269.1c-21.3 0-21.3 19.5-42.7 19.5-21.2 0-21.3-19.3-42.3-19.5v34.3c21 .2 21.1 19.5 42.3 19.5 21.4 0 21.4-19.5 42.7-19.5 21.3 0 21.3 19.5 42.7 19.5 21.4 0 21.3-19.5 42.6-19.5 21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.3 0 21.3 19.5 42.6 19.5 21.4 0 21.4-19.5 42.7-19.5 21.3 0 21.3 19.5 42.7 19.5 21.4 0 21.3-19.4 42.5-19.5v-34.3c-21.2 0-21.2 19.5-42.5 19.5s-21.4-19.5-42.7-19.5c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.3 0-21.3 19.5-42.6 19.5s-21.4-19.5-42.7-19.5zm0 66.9C64 336 64 355.5 42.6 355.5c-21.2 0-21.3-19.3-42.3-19.5v34.3c21 .2 21.1 19.5 42.3 19.5 21.4 0 21.4-19.5 42.7-19.5 21.3 0 21.3 19.5 42.7 19.5 21.4 0 21.3-19.5 42.6-19.5 21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.4 0 21.4 19.5 42.7 19.5 21.3 0 21.3-19.5 42.7-19.5 21.3 0 21.3 19.5 42.6 19.5 21.4 0 21.4-19.5 42.7-19.5 21.3 0 21.3 19.5 42.7 19.5 21.4 0 21.3-19.4 42.5-19.5V336c-21.2 0-21.2 19.5-42.5 19.5S448 336 426.7 336c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.3 0-21.3 19.5-42.6 19.5S106.6 336 85.3 336zm0 66.7c-21.3 0-21.3 19.5-42.7 19.5-21.2 0-21.3-19.3-42.3-19.5L0 512h512l-.1-109.3c-21.2 0-21.2 19.5-42.5 19.5s-21.4-19.5-42.7-19.5c-21.3 0-21.3 19.5-42.7 19.5-21.3 0-21.3-19.5-42.6-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.4 0-21.4 19.5-42.7 19.5-21.3 0-21.3-19.5-42.7-19.5-21.3 0-21.3 19.5-42.6 19.5s-21.4-19.5-42.7-19.5z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKiFlagIcon implements OnInit {
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
