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
  selector: 'svg[si-trash-bin-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="none"
      d="M337.46 240L312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z"
    />
    <svg:path
      fill="none"
      d="M337.46 240L312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z"
    />
    <svg:path
      d="M64 160l29.74 282.51A24 24 0 00117.61 464h276.78a24 24 0 0023.87-21.49L448 160zm248 217.46l-56-56-56 56L174.54 352l56-56-56-56L200 214.54l56 56 56-56L337.46 240l-56 56 56 56z"
    />
    <svg:rect x="32" y="48" width="448" height="80" rx="12" ry="12" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTrashBinSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
