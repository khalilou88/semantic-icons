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
  selector: 'svg[si-account-tree-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 11h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1H9.01V5a2 2 0 0 0-2-2H4c-1.1 0-2 .9-2 2v4a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V8h2v7.01c0 1.65 1.34 2.99 2.99 2.99H15v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1h-1.01c-.54 0-.99-.45-.99-.99V8h2v1c0 1.1.9 2 2 2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAccountTreeIcon implements OnInit {
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
