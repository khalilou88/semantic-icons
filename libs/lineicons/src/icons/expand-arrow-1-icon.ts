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
  selector: 'svg[si-expand-arrow-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.78217 3.46967C3.62191 3.62993 3.54934 3.84466 3.56445 4.05426V8C3.56445 8.41421 3.90024 8.75 4.31445 8.75C4.72867 8.75 5.06445 8.41421 5.06445 8V5.81261L11.2528 12.001L5.06445 18.1893V16C5.06445 15.5858 4.72867 15.25 4.31445 15.25C3.90024 15.25 3.56445 15.5858 3.56445 16V20C3.56445 20.4142 3.90024 20.75 4.31445 20.75H8.31409C8.72831 20.75 9.06409 20.4142 9.06409 20C9.06409 19.5858 8.72831 19.25 8.31409 19.25H6.12511L12.3135 13.0616L18.5018 19.25H16.3134C15.8992 19.25 15.5634 19.5858 15.5634 20C15.5634 20.4142 15.8992 20.75 16.3134 20.75H20.313C20.5119 20.75 20.7027 20.671 20.8433 20.5303C20.984 20.3897 21.063 20.1989 21.063 20L21.063 16C21.063 15.5858 20.7272 15.25 20.313 15.25C19.8988 15.25 19.563 15.5858 19.563 16L19.563 18.1898L13.3741 12.001L19.563 5.81212L19.563 8C19.563 8.41422 19.8988 8.75 20.313 8.75C20.7272 8.75 21.063 8.41421 21.063 8L21.063 4.04697C21.0759 3.83969 21.0032 3.62807 20.8448 3.46967C20.6982 3.32306 20.506 3.24983 20.3138 3.25C20.3135 3.25 20.3141 3.25 20.3138 3.25L16.3134 3.25C15.8991 3.25 15.5634 3.58579 15.5634 4C15.5634 4.41421 15.8991 4.75 16.3134 4.75H18.5038L12.3135 10.9403L6.12316 4.75H8.31409C8.7283 4.75 9.06409 4.41421 9.06409 4C9.06409 3.58579 8.7283 3.25 8.31409 3.25H4.31342C4.12117 3.24977 3.92885 3.32299 3.78217 3.46967Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExpandArrow1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
