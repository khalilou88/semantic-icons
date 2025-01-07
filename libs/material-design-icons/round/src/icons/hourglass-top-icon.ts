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
  selector: 'svg[si-hourglass-top-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8 2c-1.1 0-2 .9-2 2l.01 3.18c0 .53.21 1.03.58 1.41L10 12l-3.41 3.43c-.37.37-.58.88-.58 1.41L6 20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8zm8 14.91V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.09c0-.27.11-.52.29-.71L12 12.5l3.71 3.71c.18.18.29.44.29.7z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHourglassTopIcon implements OnInit {
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
