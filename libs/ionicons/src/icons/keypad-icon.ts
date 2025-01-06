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
  selector: 'svg[si-keypad-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 400a48 48 0 1048 48 48 48 0 00-48-48zM256 272a48 48 0 1048 48 48 48 0 00-48-48zM256 144a48 48 0 1048 48 48 48 0 00-48-48zM256 16a48 48 0 1048 48 48 48 0 00-48-48zM384 272a48 48 0 1048 48 48 48 0 00-48-48zM384 144a48 48 0 1048 48 48 48 0 00-48-48zM384 16a48 48 0 1048 48 48 48 0 00-48-48zM128 272a48 48 0 1048 48 48 48 0 00-48-48zM128 144a48 48 0 1048 48 48 48 0 00-48-48zM128 16a48 48 0 1048 48 48 48 0 00-48-48z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeypadIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
