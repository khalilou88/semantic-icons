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
  selector: 'svg[si-install-desktop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.83 9 16 10.17zM4 17h16v-3.17l-3 3L9.17 9 13 5.17V5H4z"
      opacity=".3"
    />
    <svg:path
      d="M20 17H4V5h9V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-5.17l-2 2V17z"
    />
    <svg:path d="M18 10.17V3h-2v7.17l-2.59-2.58L12 9l5 5 5-5-1.41-1.41z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInstallDesktopIcon implements OnInit {
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
