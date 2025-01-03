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
  selector: 'svg[si-lineageos-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>LineageOS</title>
    <svg:path
      d="M21.64526 12.05735a2.40391 2.40391 0 0 0-1.80293.7993l-.13823-.0541a17.80096 17.80096 0 0 0-2.86666-.8594 4.80782 4.80782 0 0 0-9.61565 0h-.13221a17.74687 17.74687 0 0 0-2.7645.83537l-.13822.05409a2.40391 2.40391 0 1 0 .5589 1.06974 16.599 16.599 0 0 1 2.5782-.77526 4.80782 4.80782 0 0 0 9.35722 0 16.55693 16.55693 0 0 1 2.5782.76925 2.40391 2.40391 0 1 0 2.38588-1.839zM2.41397 15.6632a1.20196 1.20196 0 1 1 1.20196-1.20195 1.20196 1.20196 0 0 1-1.20196 1.20195zm9.61565 0a3.60587 3.60587 0 1 1 3.60586-3.60586 3.60587 3.60587 0 0 1-3.60586 3.60586zm9.61564 0a1.20196 1.20196 0 1 1 1.20196-1.20195 1.20196 1.20196 0 0 1-1.20196 1.20195zm-7.81271-3.60586a1.80293 1.80293 0 1 1-1.80293-1.80294 1.80293 1.80293 0 0 1 1.80293 1.80294z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLineageosIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}