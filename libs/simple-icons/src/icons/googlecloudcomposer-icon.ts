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
  selector: 'svg[si-googlecloudcomposer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Google Cloud Composer</svg:title>
    <svg:path
      d="M9.636 4.752h-6.42V0h17.556v4.728h-6.36v6.396H9.636V4.752zm-6.42 1.692h4.74v6.36h6.408V24H9.636v-6.42h-6.42V6.444zm12.84-.012h4.728V24h-4.728V6.432zM7.92 24H3.216v-4.728H7.92V24z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGooglecloudcomposerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#4285F4');
  }
}
