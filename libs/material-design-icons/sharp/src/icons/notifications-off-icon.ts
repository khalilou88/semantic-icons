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
  selector: 'svg[si-notifications-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18c-.24.06-.47.15-.69.23L18 13.1V11zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.73 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNotificationsOffIcon implements OnInit {
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
