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
  selector: 'svg[si-atari-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Atari</svg:title>
    <svg:path
      d="M0 21.653s3.154-.355 5.612-2.384c2.339-1.93 3.185-3.592 3.77-5.476.584-1.885.671-6.419.671-7.764V2.346H8.598v1.365c-.024 2.041-.2 5.918-1.135 8.444C5.203 18.242 0 18.775 0 18.775zm24 0s-3.154-.355-5.61-2.384c-2.342-1.93-3.187-3.592-3.772-5.476-.583-1.885-.671-6.419-.671-7.764V2.346H15.4l.001 1.365c.024 2.041.202 5.918 1.138 8.444 2.258 6.087 7.46 6.62 7.46 6.62zM10.659 2.348h2.685v19.306H10.66Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAtariIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
