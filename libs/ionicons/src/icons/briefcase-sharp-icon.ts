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
  selector: 'svg[si-briefcase-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M336 288H176v-32H16v196a12 12 0 0012 12h456a12 12 0 0012-12V256H336zM496 124a12 12 0 00-12-12H384V56a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v100h480zm-152-12H168V88h176z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBriefcaseSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
