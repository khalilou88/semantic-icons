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
  selector: 'svg[si-kick-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 1.99976H11.0001V3.99974H13.0001V1.99976H21V9.99969H19V13.9996H21V21.9997H13.0001V19.9998H11.0001V21.9997H3V1.99976ZM13.0001 17.9998H15.0001V19.9997H19V15.9996H17V13.9997H15V9.99967H17V7.99969H19V3.99976H15.0001V5.99974H13.0001V7.99972H9.0001V3.99976H5V19.9997H9.0001V15.9998H13.0001V17.9998Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKickLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
