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
  selector: 'svg[si-linode-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M366.036,186.867l-59.5,36.871-.838,36.871-29.329-19.273-39.384,24.3c2.238,55.211,2.483,59.271,2.51,59.5l-97.2,65.359L127.214,285.748l108.1-62.01L195.09,197.761l-75.417,38.547L98.723,93.015,227.771,43.574,136.432,0,10.737,39.385,38.39,174.3l41.9,32.681L48.445,222.062,69.394,323.457,98.723,351.11,77.774,363.679l16.76,78.769L160.733,512c-10.8-74.842-11.658-78.641-11.725-78.773l77.925-55.3c16.759-12.57,15.083-10.894,15.083-10.894l.838,24.3,33.519,28.491-.838-77.093,46.927-33.519,26.815-18.435-2.514,36.033,25.139,17.6,6.7-74.579,58.657-43.575Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLinodeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 448 512');
  }
}
