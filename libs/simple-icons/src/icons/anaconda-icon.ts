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
  selector: 'svg[si-anaconda-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Anaconda</svg:title>
    <svg:path
      d="M12.045.033a12.181 12.182 0 00-1.361.078 17.512 17.513 0 011.813 1.433l.48.438-.465.45a15.047 15.048 0 00-1.126 1.205l-.178.215a8.527 8.527 0 01.86-.05 8.154 8.155 0 11-4.286 15.149 15.764 15.765 0 01-1.841.106h-.86a21.847 21.848 0 00.264 2.866 11.966 11.967 0 106.7-21.89zM8.17.678a12.181 12.182 0 00-2.624 1.275 15.506 15.507 0 011.813.43A18.551 18.552 0 018.17.678zM9.423.75a16.237 16.238 0 00-.995 1.998 16.15 16.152 0 011.605.66 6.98 6.98 0 01.43-.509c.234-.286.472-.559.716-.817A15.047 15.048 0 009.423.75zM4.68 2.949a14.969 14.97 0 000 2.336c.587-.065 1.196-.1 1.812-.107a16.617 16.617 0 01.48-1.748 16.48 16.481 0 00-2.292-.481zM3.62 3.5A11.938 11.938 0 001.762 5.88a17.004 17.004 0 011.877-.444A17.39 17.391 0 013.62 3.5zm4.406.287c-.143.437-.265.888-.38 1.347a8.255 8.255 0 011.67-.803c-.423-.2-.845-.38-1.29-.544zM6.3 6.216a14.051 14.052 0 00-1.555.108c.064.523.157 1.038.272 1.554a8.39 8.391 0 011.283-1.662zm-2.55.137a15.313 15.313 0 00-2.602.716h-.078v.079a17.104 17.105 0 001.267 2.544l.043.071.072-.049a16.309 16.31 0 011.734-1.083l.057-.035V8.54a16.867 16.868 0 01-.408-2.094v-.092zM.644 8.095l-.063.2A11.844 11.845 0 000 11.655v.209l.143-.152a17.706 17.707 0 011.584-1.447l.057-.043-.043-.064a16.18 16.18 0 01-1.025-1.87zm3.77 1.253l-.18.1c-.465.273-.93.573-1.375.889l-.065.05.05.064c.309.437.645.867.996 1.276l.137.165v-.208a8.176 8.176 0 01.364-2.15zM2.2 10.853l-.072.05a16.574 16.574 0 00-1.813 1.734l-.058.058.066.057a15.449 15.45 0 001.991 1.483l.072.05.043-.08a16.738 16.74 0 011.053-1.64v-.05l-.043-.05a16.99 16.99 0 01-1.19-1.54zm1.855 2.071l-.121.172a15.363 15.363 0 00-.917 1.433l-.043.072.071.043a16.61 16.61 0 001.562.766l.193.086-.086-.193a8.04 8.04 0 01-.66-2.172zm-3.976.48v.2a11.758 11.759 0 00.946 3.326l.078.186.072-.194a16.215 16.216 0 01.845-2l.057-.063-.064-.043a17.197 17.198 0 01-1.776-1.284zm2.543 1.805l-.035.08a15.764 15.765 0 00-.983 2.479v.08h.086a16.15 16.152 0 002.688.5l.072.007v-.086a17.562 17.563 0 01.164-2.056v-.065H4.55a16.266 16.266 0 01-1.849-.896zm2.544 1.169v.114a17.254 17.255 0 00-.151 1.828v.078h.931c.287 0 .624.014.946 0h.209l-.166-.129a8.011 8.011 0 01-1.64-1.834zm-3.29 2.1l.115.172a11.988 11.988 0 002.502 2.737l.157.129v-.201a22.578 22.58 0 01-.2-2.336v-.071h-.072a16.23 16.23 0 01-2.3-.387z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAnacondaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '44A833');
  }
}
