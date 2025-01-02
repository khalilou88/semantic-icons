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
  selector: 'svg[si-amazonrds-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Amazon RDS</title>
    <svg:path
      d="M1.463.857 5.446 4.84l-.606.606L.857 1.463v3.251H0V.43A.43.43 0 0 1 .429 0h4.285v.857ZM24 .43v4.285h-.857v-3.25l-3.983 3.98-.606-.606L22.537.857h-3.251V0h4.285c.237 0 .429.192.429.429Zm-.857 18.857H24v4.285a.428.428 0 0 1-.429.429h-4.285v-.857h3.25l-3.982-3.983.606-.606 3.983 3.983Zm-.214-7.623c0-1.423-1.643-2.828-4.393-3.76l.274-.811c3.162 1.07 4.976 2.736 4.976 4.57 0 1.836-1.814 3.502-4.976 4.572l-.275-.812c2.751-.931 4.394-2.336 4.394-3.76Zm-21.834 0c0 1.363 1.538 2.73 4.113 3.66l-.291.806C1.944 15.057.238 13.43.238 11.664S1.944 8.27 4.917 7.197l.291.806c-2.575.93-4.113 2.297-4.113 3.66Zm4.35 7.497-3.982 3.983h3.251V24H.43a.428.428 0 0 1-.43-.429v-4.285h.857v3.25l3.983-3.982ZM12 8.265c-3.063 0-4.714-.79-4.714-1.114 0-.323 1.651-1.114 4.714-1.114 3.062 0 4.714.79 4.714 1.114 0 .323-1.652 1.114-4.714 1.114Zm.012 3.32c-2.932 0-4.726-.801-4.726-1.237V8.265c1.055.582 2.928.858 4.714.858 1.786 0 3.659-.276 4.714-.858v2.083c0 .436-1.785 1.237-4.702 1.237Zm0 3.272c-2.932 0-4.726-.8-4.726-1.237v-2.108c1.042.613 2.89.93 4.726.93 1.827 0 3.664-.317 4.702-.928v2.106c0 .437-1.785 1.237-4.702 1.237ZM12 17.793c-3.05 0-4.714-.82-4.714-1.24v-1.768c1.042.612 2.89.93 4.726.93 1.827 0 3.664-.317 4.702-.928v1.765c0 .422-1.664 1.241-4.714 1.241ZM12 5.18c-2.683 0-5.571.616-5.571 1.971v9.401c0 1.378 2.802 2.099 5.571 2.099 2.769 0 5.571-.721 5.571-2.099v-9.4c0-1.356-2.888-1.972-5.571-1.972Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAmazonrdsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
