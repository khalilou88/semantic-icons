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
  selector: 'svg[si-mail-open-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M471.05 168.36L263.24 65.69a16.37 16.37 0 00-14.48 0L41 168.36a16 16 0 00-9 14.31V432a16.09 16.09 0 0016.19 16h415.62A16.09 16.09 0 00480 432V182.67a16 16 0 00-8.95-14.31zM256 97.89l173 85.44-175.7 86.78-173-85.44z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMailOpenSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
