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
  selector: 'svg[si-solar-panel-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4L8.3 307.4C.4 347 30.6 384 71 384l217 0 0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64 217 0c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0L122.2 0zM260.9 64l118.2 0 10.4 104-139 0L260.9 64zM202.3 168l-100.8 0L122.2 64l90.4 0L202.3 168zM91.8 216l105.6 0L187.1 320 71 320 91.8 216zm153.9 0l148.6 0 10.4 104-169.4 0 10.4-104zm196.8 0l105.6 0L569 320l-116 0L442.5 216zm96-48l-100.8 0L427.3 64l90.4 0 31.4-6.3L517.8 64l20.8 104z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSolarPanelIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 512');
  }
}
