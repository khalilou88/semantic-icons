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
  selector: 'svg[si-settings-applications-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="12" r="2" />
    <svg:path
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-3.25 9c0 .22-.03.42-.06.63l.84.73c.18.16.22.42.1.63l-.59 1.02c-.12.21-.37.3-.59.22l-1.06-.36c-.32.27-.68.48-1.08.63l-.22 1.09c-.05.23-.25.4-.49.4h-1.18c-.24 0-.44-.17-.49-.4l-.22-1.09c-.4-.15-.76-.36-1.08-.63l-1.06.36a.496.496 0 0 1-.59-.22l-.59-1.02a.503.503 0 0 1 .1-.63l.84-.73c-.05-.21-.08-.41-.08-.63s.03-.42.06-.63l-.84-.73a.503.503 0 0 1-.1-.63l.59-1.02c.12-.21.37-.3.59-.22l1.06.36c.32-.27.68-.48 1.08-.63l.22-1.09c.06-.24.26-.41.5-.41h1.18c.24 0 .44.17.49.4l.22 1.09c.4.15.76.36 1.08.63l1.06-.36c.23-.08.47.02.59.22l.59 1.02c.12.21.08.47-.1.63l-.84.73c.04.22.07.42.07.64z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSettingsApplicationsIcon implements OnInit {
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
