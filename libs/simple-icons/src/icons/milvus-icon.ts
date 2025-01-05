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
  selector: 'svg[si-milvus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Milvus</svg:title>
    <svg:path
      d="M15.536 11.997a4.005 4.005 0 0 1-4.015 4.018c-2.36-.005-4.05-1.954-4.01-4.08a4.013 4.013 0 0 1 8.025.061zm8.463-.04a.823.823 0 0 1-.25.616q-1.122 1.128-2.248 2.25c-.082.083-.165.1-.25.054-.091-.048-.124-.121-.098-.242a12.764 12.764 0 0 0 .25-1.626 12.153 12.153 0 0 0 .028-1.49 11.56 11.56 0 0 0-.27-2.114.255.255 0 0 1 .017-.213.194.194 0 0 1 .273-.052.628.628 0 0 1 .086.075l2.174 2.174c.171.17.29.366.289.567zM11.226 20c-1.89-.002-3.488-.565-4.926-1.611a8.317 8.317 0 0 1-.952-.816q-1.125-1.112-2.253-2.221l-1.931-1.899c-.291-.285-.583-.57-.873-.857-.393-.39-.387-.83.012-1.217.296-.288.59-.579.885-.868q1.433-1.41 2.867-2.818c.532-.522 1.057-1.051 1.604-1.555a7.996 7.996 0 0 1 3.786-1.95A7.668 7.668 0 0 1 11.135 4c1.89.015 3.612.546 5.113 1.723a7.987 7.987 0 0 1 2.282 2.77 7.567 7.567 0 0 1 .76 2.556c.255 2.404-.414 4.518-2.046 6.312a7.772 7.772 0 0 1-3.927 2.366 8.995 8.995 0 0 1-2.091.274zm.364-2.137a5.819 5.819 0 0 0 .605-.036 5.35 5.35 0 0 0 .38-.05c1.525-.28 2.76-1.051 3.704-2.263.92-1.178 1.28-2.542 1.168-4.028a5.626 5.626 0 0 0-.631-2.168c-.627-1.213-1.596-2.067-2.817-2.646-1.096-.519-2.248-.649-3.443-.464A5.814 5.814 0 0 0 7.33 7.8c-.858.83-1.707 1.669-2.56 2.504-.426.419-.85.841-1.28 1.257-.274.266-.286.588-.013.857q.804.793 1.61 1.583c.722.709 1.44 1.42 2.165 2.126 1.184 1.153 2.604 1.737 4.339 1.738z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMilvusIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '00A1EA');
  }
}
