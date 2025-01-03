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
  selector: 'svg[si-writedotas-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Write.as</title>
    <svg:path
      d="M12.812 5.139l2.179 7.509a168.085 168.085 0 01.666 2.459h.025c.054-.372.145-.772.273-1.204l.353-1.176 1.05-3.442.213-.671c.062-.199.126-.382.192-.551.068-.167.131-.327.194-.478.062-.151.132-.301.213-.451v-.028l-1.569.105V5.139h5.169V6.88c-.364 0-.682.119-.956.358a3.608 3.608 0 00-.711.85 6.325 6.325 0 00-.493.984 22.78 22.78 0 00-.286.758l-3.096 8.997h-2.884L11.47 13.02c-.053-.142-.12-.345-.199-.606a46.941 46.941 0 01-.247-.85c-.083-.307-.173-.623-.265-.95-.092-.328-.179-.638-.259-.931h-.026c-.053.381-.14.809-.26 1.283-.119.474-.243.937-.372 1.388-.128.451-.248.859-.358 1.223-.111.364-.194.62-.246.771l-1.501 4.479h-2.7L1.742 9.392a27.83 27.83 0 01-.472-1.39 3.995 3.995 0 01-.113-.418l-.094-.425L0 7.212V5.139h6.526V6.88c-.382.027-.65.141-.806.345-.155.204-.231.466-.231.784-.009.151.001.311.032.478a4.9 4.9 0 00.128.519l.916 3.322c.107.399.21.818.312 1.256.101.438.184.884.247 1.336h.026l.134-.598a39.977 39.977 0 01.331-1.429c.072-.278.155-.587.254-.922l1.993-6.832h2.95zM24 16.628a2.232 2.232 0 11-4.464 0 2.232 2.232 0 114.464 0"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWritedotasIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
