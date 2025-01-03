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
  selector: 'svg[si-nl-fr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 0v51.7l32 103.4H0v103.5L32 362H0v150h150v-32l103.4 32h103.5v-32l103.4 32H512v-51.7l-32-103.4h32V253.4L480 150h32V0H362v32L258.6 0H155.1v32L51.7 0H0z"
      />
      <svg:path
        fill="#0052b4"
        d="M51.7 0 512 460.3V356.9L155.1 0H51.7zm206.9 0L512 253.4V150L362 0H258.6zM0 51.8v103.4L356.8 512h103.4L0 51.8zm0 206.9v103.4L149.9 512h103.5L0 258.7z"
      />
      <svg:path
        fill="#d80027"
        d="M261.6 222.2a18 18 0 0 0-25.5 0 18 18 0 0 0-.6.6 38 38 0 0 0 53.7 53.7 18 18 0 0 0 .6-.6 18 18 0 0 0 0-25.5 18 18 0 0 0-25.4 0 2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8 18 18 0 0 0 0-25.4zm-100-100a18 18 0 0 0-25.5 0 18 18 0 0 0-.6.6 38 38 0 0 0 53.7 53.7 18 18 0 0 0 .6-.6 18 18 0 0 0 0-25.5 18 18 0 0 0-25.4 0 2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8 18 18 0 0 0 0-25.4zm200 200a18 18 0 0 0-25.5 0 18 18 0 0 0-.6.6 38 38 0 0 0 53.7 53.7 18 18 0 0 0 .6-.6 18 18 0 0 0 0-25.5 18 18 0 0 0-25.4 0 2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8 18 18 0 0 0 0-25.4zm-254-45.9a18 18 0 0 0-25.5 0 18 18 0 0 0-.6.5 38 38 0 0 0 53.7 53.8 18 18 0 0 0 .6-.6 18 18 0 0 0 0-25.5 18 18 0 0 0-25.4 0 2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.9 18 18 0 0 0 0-25.3zm100 100a18 18 0 0 0-25.5 0 18 18 0 0 0-.6.6 38 38 0 0 0 53.7 53.7 18 18 0 0 0 .6-.6 18 18 0 0 0 0-25.5 18 18 0 0 0-25.4 0 2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8 18 18 0 0 0 0-25.4zm207-207a18 18 0 0 0-25.5 0 18 18 0 0 0-.6.5 38 38 0 0 0 53.7 53.8 18 18 0 0 0 .6-.6 18 18 0 0 0 0-25.5 18 18 0 0 0-25.4 0 2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.9 18 18 0 0 0 0-25.3zm-100-100a18 18 0 0 0-25.5 0 18 18 0 0 0-.6.6 38 38 0 0 0 53.7 53.7 18 18 0 0 0 .6-.6 18 18 0 0 0 0-25.6 18 18 0 0 0-25.4 0 2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8 18 18 0 0 0 0-25.3z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNlFrFlagIcon implements OnInit {
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