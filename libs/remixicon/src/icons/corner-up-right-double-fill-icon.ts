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
  selector: 'svg[si-corner-up-right-double-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.99969 19.0001 3.99983 10.0002 9.58588 10.0002V4.58588L16.0001 11.0001 9.58588 17.4143V12.0002L5.9998 12.0002 5.99969 19.0001 3.99969 19.0001ZM13.8363 6.05023 15.2505 4.63601 21.6145 11 15.2505 17.3639 13.8363 15.9497 18.7861 11 13.8363 6.05023Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCornerUpRightDoubleFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
