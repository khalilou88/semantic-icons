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
  selector: 'svg[si-kit-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Kit</title>
    <svg:path
      d="m3.5 11.633-2.434 2.408V8.687a.53.53 0 0 0-.533-.527.53.53 0 0 0-.533.527v6.624a.528.528 0 0 0 .532.526.533.533 0 0 0 .377-.153l2.974-2.939 2.974 2.94a.535.535 0 0 0 .754 0 .522.522 0 0 0 0-.746l-2.974-2.938L7.61 9.06a.522.522 0 0 0 0-.745.538.538 0 0 0-.753 0l-3.344 3.307c-.003 0-.005.003-.007.005l-.007.006v-.001zm8.826 4.206a.53.53 0 0 1-.533-.526V8.688a.53.53 0 0 1 .533-.528.53.53 0 0 1 .533.528v6.624a.53.53 0 0 1-.533.526v.001zm7.257-6.624v6.098c0 .29.238.526.532.526a.53.53 0 0 0 .533-.526V9.215h2.818A.53.53 0 0 0 24 8.688a.53.53 0 0 0-.533-.527h-6.702a.53.53 0 0 0-.533.527.53.53 0 0 0 .533.527h2.819-.001z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKitIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}