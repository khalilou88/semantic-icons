import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-al-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="red" d="M0 0h512v512H0z" />
    <svg:path
      id="al-a"
      fill="#000001"
      d="M204.9 99.5c-5 0-13.2 1.6-13 5.4-14-2.3-15.4 3.4-14.6 8.5 1.4-2 3-3.1 4.2-3.3 1.9-.3 3.8.3 5.8 1.5a23 23 0 0 1 5 4.4c-4.8 1.1-8.6.4-12.4-.3a17.6 17.6 0 0 1-6.1-2.5c-1.6-1.1-2.1-2.1-4.6-4.7-2.9-3-6-2.1-5 2.5 2.2 4.3 6 6.3 10.7 7 2.2.4 5.6 1.2 9.4 1.2 3.8 0 8.1-.5 10.5 0-1.4.8-3 2.4-6.2 3-3.2.6-8-2-11-2.6.4 2.5 3.5 4.8 9.7 6 10.2 2.2 18.7 4 24.3 7 5.6 3 9.1 6.8 11.6 9.8 5 6 5.3 10.5 5.6 11.5 1 9.5-2.2 14.8-8.4 16.4-3 .8-8.5-.7-10.5-3-2-2.4-4-6.4-3.4-12.7.5-2.5 3.4-9 1-10.3a291.6 291.6 0 0 0-34.4-16c-2.7-1.1-5 2.5-5.8 4A53.5 53.5 0 0 1 129 107c-4.6-8.1-12.1 0-10.9 7.7 2.1 8.6 8.6 14.8 16.5 19.2 8 4.5 18.1 8.8 28.3 8.6 5.5 1 5.5 8.2-1.1 9.5-13 0-23.2-.2-32.9-9.6-7.4-6.7-11.5 1.3-9.4 5.8 3.6 14 23.6 18 43.8 13.4 7.8-1.3 3.1 7 .9 7.2-8.4 6-23.5 12-36.8-.1-6.1-4.7-10.2-.7-8 6 6 17.5 28.5 13.8 44 5.2 4-2.2 7.6 3 2.7 6.9-19.2 13.4-28.9 13.6-37.6 8.4-10.8-4.3-11.8 7.8-5.3 11.8 7.2 4.4 25.4 1 38.9-7.4 5.7-4.2 6 2.4 2.3 5-15.9 13.8-22.2 17.5-38.8 15.2-8.2-.6-8 9.5-1.6 13.5 8.8 5.4 26.1-3.6 39.5-14.7 5.6-3 6.6 2 3.8 7.8a57.4 57.4 0 0 1-23.3 19.2 29.1 29.1 0 0 1-19.5.7c-6.2-2.2-7 4.2-3.6 10 2 3.5 10.6 4.7 19.7 1.4 9.2-3.2 19-10.8 25.7-19.8 6-5.1 5.2 1.8 2.5 6.7-13.5 21.3-25.9 29.2-42.1 27.9-7.3-1.2-8.9 4.4-4.3 9.6 8 6.7 18.2 6.4 27-.2a751 751 0 0 0 30.8-32.6c5.5-4.4 7.3 0 5.7 9-1.5 5.1-5.2 10.5-15.3 14.5-7 4-1.8 9.4 3.4 9.5 2.9 0 8.7-3.3 13-8.3 5.9-6.5 6.2-11 9.5-21.1 3-5 8.4-2.7 8.4 2.5-2.6 10.2-4.8 12-10 16.2-5.1 4.7 3.4 6.3 6.3 4.4 8.3-5.6 11.3-12.8 14.1-19.4 2-4.8 7.8-2.5 5.1 5.3-6.4 18.5-17 25.8-35.5 29.6-1.9.3-3 1.4-2.4 3.6l7.5 7.5c-11.5 3.3-20.8 5.2-32.2 8.5L142 300.6c-1.5-3.4-2.2-8.7-10.4-5-5.7-2.6-8.2-1.6-11.4 1 4.5.1 6.5 1.3 8.3 3.4 2.3 6 7.6 6.6 13 5 3.5 2.9 5.4 5.2 9 8.2l-17.8-.6c-6.3-6.7-11.3-6.3-15.8-1-3.5.5-5 .5-7.3 4.7 3.7-1.5 6-2 7.7-.3 6.6 3.9 11 3 14.3 0l18.7 1.1c-2.3 2-5.6 3.1-8 5.2-9.7-2.8-14.7 1-16.4 8.8a18.2 18.2 0 0 0-1.4 10c1-3.2 2.5-5.9 5.3-7.6 8.6 2.2 11.8-1.3 12.3-6.5 4.2-3.4 10.5-4.1 14.6-7.6 4.9 1.6 7.2 2.6 12.1 4.1 1.7 5.3 5.7 7.4 12 6 7.7.3 6.3 3.4 7 5.9 2-3.6 2-7-2.8-10.3-1.7-4.6-5.5-6.7-10.4-4-4.7-1.3-5.9-3.2-10.5-4.6 11.7-3.7 20-4.5 31.8-8.3 3 2.8 5.2 4.8 8.2 7.2 1.6 1 3 1.2 4 0 7.3-10.6 10.6-20 17.4-27 2.6-2.9 6-6.8 9.6-7.8 1.8-.4 4-.2 5.5 1.4 1.4 1.6 2.6 4.4 2 8.7-.6 6.2-2 8.2-3.8 11.8-1.7 3.7-3.9 6-6 8.8-4.4 5.7-10.1 9-13.5 11.2-6.8 4.4-9.7 2.5-15 2.2-6.7.8-8.5 4.1-3 8.7a21 21 0 0 0 13.7 2.3c3.3-.6 7-4.8 9.8-7 3-3.6 8.1.6 4.7 4.7-6.3 7.5-12.6 12.4-20.3 12.3-8.2 1-6.7 5.7-1.3 7.9 9.8 4 18.6-3.5 23-8.5 3.5-3.7 6-3.9 5.3 2-3.4 10.5-8.1 14.6-15.7 15.1-6.2-.5-6.3 4.2-1.7 7.5 10.3 7 17.7-5 21.2-12.4 2.5-6.6 6.3-3.5 6.7 2 0 7.3-3.2 13.2-12 20.7 6.7 10.7 14.5 21.7 21.3 32.5l20.5-228.2-20.5-36c-2.1-2-9.3-10.5-11.2-11.7-.7-.7-1.1-1.2-.1-1.6 1-.4 3.2-.8 4.8-1-4.4-4.4-8-5.8-16.3-8.2 2-.8 4-.3 9.9-.6a32.3 32.3 0 0 0-14.4-11c4.5-3 5.3-3.3 9.8-7-7.7-.6-14.3-2-20.8-4a41 41 0 0 0-12.8-3.7m.7 9c4 0 6.6 1.4 6.6 3 0 1.7-2.5 3.1-6.6 3.1-4 0-6.6-1.5-6.6-3.2 0-1.7 2.6-3 6.6-3z"
    />
    <svg:use
      xlink:href="#al-a"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 512 0)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
