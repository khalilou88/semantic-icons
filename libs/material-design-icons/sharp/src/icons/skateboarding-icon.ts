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
  selector: 'svg[si-skateboarding-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm3.49-3.5a.72.72 0 0 0-.59.3c-.55.73-1.42 1.2-2.4 1.2H16v-6l-4.32-2.67 1.8-2.89A6.507 6.507 0 0 0 19 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C14.16 5.64 13.61 5 12.7 5H7L4.5 9l1.7 1.06L8.1 7h2.35l-2.89 4.63 1.62 5.03-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12a.749.749 0 1 0-1.2.9c.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75zM14 20.5H8.6l2.9-3.5-1-3.3 3.5 2.2v4.6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSkateboardingIcon implements OnInit {
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
