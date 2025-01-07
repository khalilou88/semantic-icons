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
  selector: 'svg[si-museum-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 20h12V9H6v11zm2-9h2l2 3 2-3h2v7h-2v-4l-2 3-2-3v4H8v-7z"
      opacity=".3"
    />
    <svg:path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z" />
    <svg:path d="m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMuseumIcon implements OnInit {
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
