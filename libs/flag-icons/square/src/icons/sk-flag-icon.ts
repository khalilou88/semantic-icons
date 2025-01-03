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
  selector: 'svg[si-sk-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#ee1c25" d="M0 0h512v512H0z" />
    <svg:path fill="#0b4ea2" d="M0 0h512v341.3H0z" />
    <svg:path fill="#fff" d="M0 0h512v170.7H0z" />
    <svg:path
      fill="#fff"
      d="M203.2 395.5c-45.9-22-111.5-66-111.5-152.8s4.1-126.2 4.1-126.2h214.8s4.2 39.4 4.2 126.2S249 373.4 203.2 395.5"
    />
    <svg:path
      fill="#ee1c25"
      d="M203.2 384c-42.1-20.3-102.3-60.5-102.3-140.2s3.8-115.8 3.8-115.8h197s3.8 36.2 3.8 115.8-60.2 120-102.3 140.2"
    />
    <svg:path
      fill="#fff"
      d="M212.2 223c11.4.2 33.7.6 53.5-6 0 0-.6 7-.6 15.3s.6 15.3.6 15.3a172 172 0 0 0-53.5-6v44h-18v-44a172 172 0 0 0-53.5 6s.6-7 .6-15.3-.6-15.3-.6-15.3c19.9 6.6 42.1 6.2 53.5 6v-27.7a128 128 0 0 0-42.3 6.1s.5-7 .5-15.3-.5-15.4-.5-15.4c17 5.7 31.9 6.2 42.2 6-.5-17.4-5.6-39.4-5.6-39.4s10.5.8 14.7.8c4.2 0 14.7-.8 14.7-.8s-5.1 22-5.7 39.5a126 126 0 0 0 42.3-6s-.5 7-.5 15.3.5 15.3.5 15.3c-17-5.7-31.9-6.1-42.3-6z"
    />
    <svg:path
      fill="#0b4ea2"
      d="M203.2 280.8c-21.2 0-32.6 29.4-32.6 29.4s-6.3-14-23.6-14c-11.7 0-20.3 10.5-25.8 20.2 21.3 33.8 55.3 54.7 82 67.6 26.7-12.9 60.7-33.8 82-67.7-5.5-9.6-14.1-20-25.8-20-17.3 0-23.6 14-23.6 14s-11.4-29.5-32.6-29.5"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSkFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
