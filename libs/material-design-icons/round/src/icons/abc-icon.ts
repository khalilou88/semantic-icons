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
  selector: 'svg[si-abc-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.25 15c-.41 0-.75-.34-.75-.75v-.75h-2v.75c0 .41-.34.75-.75.75S3 14.66 3 14.25V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75zm-.75-4.5h-2V12h2v-1.5zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM11 10.5v.75h2v-.75h-2zm2 2.25h-2v.75h2v-.75zm8-2.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.71-.5H17.5v3h2.04c.1-.29.38-.5.71-.5.41 0 .75.34.75.75V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v.25z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAbcIcon implements OnInit {
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
