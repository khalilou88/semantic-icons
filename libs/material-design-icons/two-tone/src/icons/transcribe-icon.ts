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
  selector: 'svg[si-transcribe-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="9" cy="9" r="2" opacity=".3" />
    <svg:path
      d="M14.48 17.34C13.29 16.73 11.37 16 9 16c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88z"
      opacity=".3"
    />
    <svg:path
      d="M17.93 2c-3.9 3.89-3.91 9.95 0 14l1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 19H3v-.78c0-.38.2-.72.52-.88C4.71 16.73 6.63 16 9 16c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V19z"
    />
    <svg:path
      d="m22.92 7.06-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69a3.317 3.317 0 0 1 0-3.89z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTranscribeIcon implements OnInit {
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
