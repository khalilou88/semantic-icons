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
  selector: 'svg[si-corner-up-left-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.0001 10.0001L19.0003 19L17.0003 19L17.0002 12.0001L6.82833 12L10.7781 15.9498L9.36384 17.364L2.99988 11L9.36384 4.63605L10.7781 6.05026L6.82828 10L19.0001 10.0001Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCornerUpLeftLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
