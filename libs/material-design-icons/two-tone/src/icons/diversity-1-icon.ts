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
  selector: 'svg[si-diversity-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="4" cy="14" r="2" />
    <svg:path
      d="M1.22 17.58A2.01 2.01 0 0 0 0 19.43V21h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58z"
    />
    <svg:circle cx="20" cy="14" r="2" />
    <svg:path
      d="M22.78 17.58A6.95 6.95 0 0 0 20 17c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V21H24v-1.57c0-.81-.48-1.53-1.22-1.85zm-6.54-.93c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 0 0 6 19.39V21h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM8.07 19a.96.96 0 0 1 .49-.52c1.1-.49 2.26-.73 3.43-.73 1.18 0 2.33.25 3.43.73.23.1.4.29.49.52H8.07zM9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"
    />
    <svg:path
      d="M2.48 10.86C2.17 10.1 2 9.36 2 8.6 2 6.02 4.02 4 6.6 4c2.68 0 3.82 1.74 5.4 3.59C13.57 5.76 14.7 4 17.4 4 19.98 4 22 6.02 22 8.6c0 .76-.17 1.5-.48 2.26.65.31 1.18.82 1.53 1.44.6-1.2.95-2.42.95-3.7C24 4.9 21.1 2 17.4 2c-2.09 0-4.09.97-5.4 2.51C10.69 2.97 8.69 2 6.6 2 2.9 2 0 4.9 0 8.6c0 1.28.35 2.5.96 3.7.35-.62.88-1.13 1.52-1.44z"
    />
    <svg:path
      d="M17.4 4c-2.68 0-3.82 1.74-5.4 3.59C10.44 5.75 9.3 4 6.6 4 4.02 4 2 6.02 2 8.6c0 .76.17 1.5.48 2.26.46-.22.97-.36 1.52-.36 1.93 0 3.5 1.57 3.5 3.5 0 .45-.09.87-.24 1.26.97-.42 1.96-.69 2.98-.84A2.987 2.987 0 0 1 9 12c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1-.49 1.87-1.24 2.42 1.02.15 2.02.43 2.98.85-.15-.39-.24-.82-.24-1.26 0-1.93 1.57-3.5 3.5-3.5.55 0 1.06.14 1.52.36.31-.77.48-1.51.48-2.27C22 6.02 19.98 4 17.4 4zM8.07 19.02h7.85a.96.96 0 0 0-.49-.52c-1.1-.49-2.26-.73-3.43-.73-1.18 0-2.33.25-3.43.73-.23.1-.4.29-.5.52z"
      opacity=".3"
    />
    <svg:circle cx="12" cy="12" r="1" opacity=".3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDiversity1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
