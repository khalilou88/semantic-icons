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
  selector: 'svg[si-checkmark-done-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="none"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-miterlimit="10"
      stroke-width="44"
      d="M465 127L241 384l-92-92M140 385l-93-93M363 127L236 273"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCheckmarkDoneSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
