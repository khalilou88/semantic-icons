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
  selector: 'svg[si-celery-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Celery</title>
    <svg:path
      d="M2.303 0A2.298 2.298 0 0 0 0 2.303v19.394A2.298 2.298 0 0 0 2.303 24h19.394A2.298 2.298 0 0 0 24 21.697V2.303A2.298 2.298 0 0 0 21.697 0zm8.177 3.072c4.098 0 7.028 1.438 7.68 1.764l-1.194 2.55c-2.442-1.057-4.993-1.41-5.672-1.41-1.574 0-2.17.922-2.17 1.763v8.494c0 .869.596 1.791 2.17 1.791.679 0 3.23-.38 5.672-1.41l1.194 2.496c-.435.271-3.637 1.818-7.68 1.818-1.112 0-4.64-.244-4.64-4.64V7.713c0-4.397 3.528-4.64 4.64-4.64z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCeleryIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
