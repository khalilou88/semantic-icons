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
  selector: 'svg[si-clubs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 2a5 5 0 0 0 -4.488 2.797l-.103 .225a4.998 4.998 0 0 0 -.334 2.837l.027 .14a5 5 0 0 0 -3.091 9.009l.198 .14a4.998 4.998 0 0 0 4.42 .58l.174 -.066l-.773 3.095a1 1 0 0 0 .97 1.243h6l.113 -.006a1 1 0 0 0 .857 -1.237l-.774 -3.095l.174 .065a5 5 0 1 0 1.527 -9.727l.028 -.14a4.997 4.997 0 0 0 -4.925 -5.86z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClubsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
