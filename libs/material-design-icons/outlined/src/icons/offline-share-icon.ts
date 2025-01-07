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
  selector: 'svg[si-offline-share-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M6 5H4v16c0 1.1.9 2 2 2h10v-2H6V5z" />
    <svg:path
      d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16h-8v-1h8v1zm0-3h-8V6h8v8zm0-10h-8V3h8v1z"
    />
    <svg:path
      d="M12.5 10.25h1.63l-.69.69L14.5 12 17 9.5 14.5 7l-1.06 1.06.69.69H12c-.55 0-1 .45-1 1V12h1.5v-1.75z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOfflineShareIcon implements OnInit {
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
