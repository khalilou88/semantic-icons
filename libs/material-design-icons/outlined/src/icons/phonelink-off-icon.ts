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
  selector: 'svg[si-phonelink-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 6V4H7.39l2 2zm2 13V9c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93zM2.06 1.51.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.41-1.41L2.06 1.51zM4 17V6.27L14.73 17H4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPhonelinkOffIcon implements OnInit {
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
