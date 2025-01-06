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
  selector: 'svg[si-blaze-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 9C19.6667 10.0606 20 11.3939 20 13C20 16 16.5 17 15 22C14.3333 21.4254 14 20.5921 14 19.5C14 16.0181 19 14.2101 19 9ZM14.5 5C15.1667 6.23841 15.5 7.57175 15.5 9C15.5 14 9.5 15 11.5 22C9.83333 20.8392 9 19.1726 9 17C9 13.675 14.5 11 14.5 5ZM10 1C10.6667 2.33333 11 3.83333 11 5.5C11 11.5 2 13 8 22C5.5 21.5 3.5 19 3.5 16C3.5 9.5 10 8.5 10 1Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBlazeLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
