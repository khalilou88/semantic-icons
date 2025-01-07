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
  selector: 'svg[si-settings-input-svideo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    />
    <svg:circle cx="7.5" cy="11.5" r="1.5" />
    <svg:circle cx="16.5" cy="11.5" r="1.5" />
    <svg:circle cx="9" cy="16" r="1.5" />
    <svg:circle cx="15" cy="16" r="1.5" />
    <svg:path
      d="M15 7.5c0-.83-.67-1.5-1.5-1.5h-3C9.67 6 9 6.67 9 7.5S9.67 9 10.5 9h3c.83 0 1.5-.67 1.5-1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSettingsInputSvideoIcon implements OnInit {
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
