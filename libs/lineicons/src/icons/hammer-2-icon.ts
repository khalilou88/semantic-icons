import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-hammer-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.3744 3.99973L13.276 3.40701C13.2129 3.02736 12.8845 2.74902 12.4996 2.74902C12.1151 2.74902 11.7869 3.02695 11.7235 3.40625L11.6243 3.99973H6.66406C6.24985 3.99973 5.91406 4.33552 5.91406 4.74973V8.93333C5.91406 9.34754 6.24985 9.68333 6.66406 9.68333H10.374L9.8357 19.6281C9.76595 20.9167 10.792 21.9997 12.0824 21.9997H12.9156C14.2061 21.9997 15.2321 20.9167 15.1623 19.6281L14.6241 9.68333H18.3349C18.7492 9.68333 19.0849 9.34754 19.0849 8.93333V8.74973C19.0849 6.12638 16.9583 3.99973 14.335 3.99973H13.3744ZM13.1219 9.68333L13.6645 19.7092C13.6878 20.1387 13.3458 20.4997 12.9156 20.4997H12.0824C11.6523 20.4997 11.3103 20.1387 11.3335 19.7092L11.8762 9.68333H13.1219ZM17.5358 8.18333H7.41406V5.49973H14.335C15.9367 5.49973 17.2678 6.65842 17.5358 8.18333Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHammer2Icon implements OnInit {
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