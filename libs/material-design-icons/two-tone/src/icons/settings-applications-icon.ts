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
    <svg:path
      d="M5 19h14V5H5v14zm2.5-7c0-.2.02-.39.04-.58l-1.27-.99a.306.306 0 0 1-.07-.39l1.2-2.07c.08-.13.23-.18.37-.13l1.49.6c.31-.25.66-.44 1.02-.6l.22-1.59a.31.31 0 0 1 .3-.25h2.4c.15 0 .27.11.3.25l.22 1.59c.37.15.7.35 1.01.59l1.49-.6c.14-.05.29 0 .37.13l1.2 2.07c.08.13.04.29-.07.39l-1.27.99c.03.2.04.39.04.59 0 .2-.02.39-.04.58l1.27.99c.11.09.15.26.07.39l-1.2 2.07c-.08.13-.23.18-.37.13l-1.49-.6c-.31.24-.65.44-1.01.59l-.22 1.59a.31.31 0 0 1-.3.26h-2.4a.31.31 0 0 1-.3-.25l-.22-1.59c-.37-.15-.7-.35-1.01-.59l-1.49.6c-.14.05-.29 0-.37-.13l-1.2-2.07c-.08-.13-.04-.29.07-.39l1.27-.99c-.03-.2-.05-.39-.05-.59z"
      opacity=".3"
    />
    <svg:path
      d="m6.21 13.97 1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07a.306.306 0 0 0-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59a.31.31 0 0 0-.3-.25h-2.4a.31.31 0 0 0-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59 0 .2.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39zM12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71zM19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14z"
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
