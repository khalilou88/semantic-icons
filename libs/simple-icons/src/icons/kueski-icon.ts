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
  selector: 'svg[si-kueski-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kueski</svg:title>
    <svg:path
      d="M19.403 7.989h-4.142c.029-1.022.506-1.33 1.48-1.95l2.294-1.47a2.161 2.161 0 0 0 1.048-1.776V.609c0-.62-.45-.787-1.038-.407l-3.043 1.962c-1.088.706-1.72 1.493-2.007 2.463-.194-1.02-.982-1.976-1.977-2.478L9.007.643C8.416.357 7.966.43 7.96 1.046L7.954 3.23a1.88 1.88 0 0 0 1.038 1.668l2.263 1.12c.933.47 1.47.648 1.491 1.97H4.592a.67.67 0 0 0-.674.667v2.665a.679.679 0 0 0 .2.472.67.67 0 0 0 .474.193h14.811a.67.67 0 0 0 .678-.665V8.655a.663.663 0 0 0-.2-.474.67.67 0 0 0-.478-.192zm0 0h-4.142c.029-1.022.506-1.33 1.48-1.95l2.294-1.47a2.161 2.161 0 0 0 1.048-1.776V.609c0-.62-.45-.787-1.038-.407l-3.043 1.962c-1.088.706-1.72 1.493-2.007 2.463-.194-1.02-.982-1.976-1.977-2.478L9.007.643C8.416.357 7.966.43 7.96 1.046L7.954 3.23a1.88 1.88 0 0 0 1.038 1.668l2.263 1.12c.933.47 1.47.648 1.491 1.97H4.592a.67.67 0 0 0-.674.667v2.665a.679.679 0 0 0 .2.472.67.67 0 0 0 .474.193h14.811a.67.67 0 0 0 .678-.665V8.655a.663.663 0 0 0-.2-.474.67.67 0 0 0-.478-.192zm-.007 5.903c0 .343-.657 6.288-.968 9.195-.09.857-.955.913-1.188.913H7.244c-1.04 0-1.411-.456-1.512-1-.106-.572-.658-6.161-.934-8.108l-.096-.967c0-.482.339-.896.81-.896h13.021a.867.867 0 0 1 .8.537.854.854 0 0 1 .063.332z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKueskiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
