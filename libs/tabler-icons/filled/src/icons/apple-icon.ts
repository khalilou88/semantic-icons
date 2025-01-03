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
  selector: 'svg[si-apple-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007c-.693 0 -1.33 .694 -1.691 1.552a5.1 5.1 0 0 1 1.982 -.544l.265 -.008c2.982 0 5.444 3.053 5.444 6.32c0 3.547 -.606 5.862 -2.423 8.578c-1.692 2.251 -4.092 2.753 -6.41 1.234a.31 .31 0 0 0 -.317 -.01c-2.335 1.528 -4.735 1.027 -6.46 -1.27c-1.783 -2.668 -2.39 -4.984 -2.39 -8.532l.004 -.222c.108 -3.181 2.526 -6.098 5.44 -6.098c.94 0 1.852 .291 2.688 .792c.419 -1.95 1.818 -3.792 3.868 -3.792m-7.034 6.154c-1.36 .858 -1.966 2.06 -1.966 3.846a1 1 0 0 0 2 0c0 -1.125 .28 -1.678 1.034 -2.154a1 1 0 1 0 -1.068 -1.692"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppleIcon implements OnInit {
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
