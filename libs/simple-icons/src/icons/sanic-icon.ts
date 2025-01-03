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
  selector: 'svg[si-sanic-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Sanic</title>
    <svg:path
      d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm-.703 6.676c.584-.01.694-.037 1.379-.037.758 0 .758.064 1.507.064.548 0 .767-.027 1.114-.036.064 0 .137 0 .219.018a.511.511 0 0 1 .237.11.84.84 0 0 1 .265.52c.01.11 0 .22-.027.329a.836.836 0 0 1-.365.493c-.037.018-.083.027-.12.037-.1.009-.255.018-.383.027-.246 0-.475-.01-.94-.01-.758 0-.758.056-1.507.056H11.15c-.183-.01-.274.009-.411-.046a.69.69 0 0 1-.22-.21.62.62 0 0 1-.1-.292c-.027-.676.119-1.014.877-1.023zM5.516 8.21c.256-.466.703-.776 1.169-1.032.447-.274.922-.466 1.48-.466.365 0 .447-.027.73-.036.256.018.301.018.438.128.146.146.265.32.302.538a.817.817 0 0 1-.183.63c-.356.311-.667.183-1.288.183-.42 0-.758.256-1.04.53-.275.283-.466.62-.466 1.041 0 .42.118.831.392 1.114.283.274.694.466 1.114.466.75 0 .75-.11 1.507-.11.75 0 .75-.018 1.498-.018.758 0 .758.137 1.507.137.246 0 .511-.1.721.082a.842.842 0 0 1 .302.54c.009.118 0 .227-.028.337-.146.447-.155.548-.995.557-.75 0-.75-.146-1.507-.146-.749 0-.749.119-1.498.119-.758 0-.758-.12-1.507-.12-.557 0-1.04-.109-1.497-.364-.466-.274-.895-.594-1.17-1.06-.255-.447-.337-.995-.337-1.534.009-.539.1-1.068.356-1.516zm3.251 8.557a.817.817 0 0 1-.155.292.703.703 0 0 1-.256.21c-.2.092-.575.055-.886.064-.73 0-.776-.036-1.516-.036a.778.778 0 0 1-.776-.786c.01-.41.393-.748.804-.748.721 0 .758-.037 1.48-.037.693.018.83-.027 1.04.146a.842.842 0 0 1 .302.539c.009.128-.01.247-.037.356zm9.516-.95c-.274.466-.648.804-1.114 1.078-.448.256-.94.41-1.48.41-.757 0-.757.065-1.506.065-.758 0-.758-.028-1.507-.028-.75 0-.75.037-1.507.037-.877-.027-1.507.137-1.598-.621a.746.746 0 0 1 .045-.347c.037-.11.1-.22.174-.31a.834.834 0 0 1 .274-.229c.347-.146.712-.091 1.114-.091.758 0 .758.064 1.507.064.758 0 .758.027 1.507.027.749 0 .749.037 1.507.037.42 0 .858-.192 1.123-.466.274-.283.365-.703.365-1.142 0-.42-.192-.748-.475-1.022-.274-.284-.593-.503-1.023-.503-.547.019-.913.073-1.114-.2a.62.62 0 0 1-.1-.293.746.746 0 0 1 .046-.347c.036-.11.1-.22.173-.31a.834.834 0 0 1 .274-.229c.183-.091.402-.055.73-.055.54 0 1.097.019 1.553.274.466.256.749.758 1.005 1.224.255.439.557.923.557 1.47-.01.558-.265 1.06-.53 1.507zm-.164-7.643c-.484 0-.393.009-.557.009-.32.009-.594.009-.758-.265a.695.695 0 0 1-.092-.274c-.009-.11 0-.229.037-.338.036-.11.073-.21.137-.329.137-.219.256-.283.484-.32.137-.036.502-.045.767-.027.438 0 .721.42.703.859a.698.698 0 0 1-.721.684z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSanicIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}