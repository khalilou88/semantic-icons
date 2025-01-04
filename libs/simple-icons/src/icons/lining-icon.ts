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
  selector: 'svg[si-lining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Li-Ning</svg:title>
    <svg:path
      d="M8.926 8.815c-.261-.004-.696.011-1.422.084-1.937.194-2.398.828-2.398.828L0 15.177h1.017c4.279-4.664 8.291-6.278 8.291-6.278s.052-.075-.382-.084Zm2.332 1.571c-1.71-.008-3.181.092-3.803.366-1.422.625-3.838 2.271-6.035 4.425 0 0 .864.115 1.902-.48 0 0 3.416-2.586 6.165-2.07 2.75.516 5.169 1.829 5.169 1.829s1.751 1 3.39.438c1.64-.563 5.954-2.898 5.954-2.898s-3.266-.776-6.265-1.182c-1.687-.229-4.279-.418-6.477-.428Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLiningIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
