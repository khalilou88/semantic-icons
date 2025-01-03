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
  selector: 'svg[si-ck-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#006" d="M0 0h512v512H0z" />
    <svg:path
      fill="#fff"
      fill-rule="evenodd"
      d="m344.8 250.1 5.7-18.3-15.4-11.7 19.4-.2 6.5-18.1 6.3 18.1 19.4.6-15.6 11.4 5.6 18.4-15.9-11m29.7 14.4 11.4-15.3-10.6-16.3 18.4 6.4 12-14.8V233l18 7.1-18.4 5.5-.9 19.2-11.3-15.8m-108 16.5-.8-19.2-18.4-5.7 18.2-7v-19.1l12 14.9 18.4-6.2-10.8 16.1 11.4 15.4-18.6-5m-43.6 45-8-17.4-19.2 2 14-13.5-7.2-17.7 16.7 9 14.6-13-3.7 19.1 16.3 9.7-19 2.8m-19.2 61-14.6-12.1-16.5 10 7-18.3-14-12.8 18.9.9 7.7-18 4.7 18.8 18.9 1.7-16 10.8m3.5 66.3-18.2-5.3-11 16-.8-19.7-18-6 17.7-6.9v-19.7l11.7 15.5 18-6.1-10.5 16.3m32.4 55.9-18.7 2.6-3.8 19.1L244 428l-18.8 1.8 13.5-13.5-7.9-18 16.9 9.3 14-13-3 19.3m49.4 41.7-16.7 9 3 19.3-14.1-13.6-17 8.3 8-17.4-13.5-14.1 19 2.8 8.7-17 3.7 19m59.1 10-9 16.8 12.8 14.5-19.1-3.6-9.8 16.4-2.7-19-18.9-4.4 17.4-8.2-1.9-19 13.5 13.9m63-14.4-.7 19.2 18 7-18.6 5.6-1.3 19.1-11-15.7-18.8 4.9 11.9-15.4-10.3-16.1 18.3 6.2m59.8-223.2 13.1 13.9 17.5-8.1-9 17.4L475 284l-18.7-3-9.8 17-2.5-19.3-18.6-4 17.2-8.7m37.6 23.1 6 18.3 19.1.3-15.5 11.7L495 338l-15.6-11-16 11.1 6-18.5-15.2-11.6 19.3-.5m21.4 36.5-2.2 19 17.3 8.6-19 4-3 19-9.5-16.7-19.1 3.2 13-14.3-8.8-17 17.7 7.9m3.2 43.7-8.5 17.1 13.3 14-19.1-2.8-9.3 16.7-3.3-18.9-19-3.7 17-8.8-2.5-19 14 13.5m-10.9 43-16.1 10 4.1 19-14.8-12.6-16.5 9.4 7-18-14.4-13.2 19.1 1.6 7.7-17.6 4.9 19"
    />
    <svg:path fill="#006" d="M0-.5h256v256H0z" />
    <svg:path
      fill="#fff"
      d="M256-.5v32l-95 96 95 93.5v34.5h-33.5l-95.5-94-93 94H0v-34L93 128 0 36.5v-37h31l96 94 93-94z"
    />
    <svg:path
      fill="#c8102e"
      d="m92 161.5 5.5 17-76.5 77H0V254zm62-6 27 4 75 73.5v22.5zM256-.5l-96 98-2-22 75-76zM0 0l96.5 94.5-29.5-4L0 24z"
    />
    <svg:path fill="#fff" d="M88-.5v256h80V-.5zm-88 88v80h256v-80z" />
    <svg:path fill="#c8102e" d="M0 103.5v48h256v-48zM104-.5v256h48V-.5z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCkFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
