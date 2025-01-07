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
  selector: 'svg[si-model-training-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2v.5c0 .55.45 1 1 1s1-.45 1-1v-.5zm6-6.5c0 1.39-.41 2.69-1.12 3.78a1 1 0 0 0 .14 1.24c.44.44 1.2.38 1.54-.15A8.9 8.9 0 0 0 21 13c0-2.36-.91-4.51-2.4-6.12-.39-.42-1.05-.43-1.45-.03-.38.38-.38.99-.02 1.39A6.97 6.97 0 0 1 19 13zm-3.35-8.35-2.79-2.79a.501.501 0 0 0-.86.35V4a9 9 0 0 0-7.56 13.88c.34.53 1.1.59 1.54.15.33-.33.39-.84.14-1.23-1.39-2.15-1.64-5.1.13-8C7.45 6.85 9.71 5.81 12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiModelTrainingIcon implements OnInit {
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
