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
  selector: 'svg[si-ameba-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Ameba</title>
    <svg:path
      d="M10.575 9.815c0-.653.624-1.161 1.429-1.161s1.429.508 1.429 1.16c0 .653-.624 1.162-1.429 1.162s-1.429-.509-1.429-1.161zM16.107 0c-.303.008-.603.155-.875.467-.397.46-1.111 1.268-1.6 1.748-.641.624-1.056.765-1.626.765-.57 0-.978-.132-1.629-.765-.488-.47-1.212-1.287-1.6-1.748-.435-.49-.94-.566-1.42-.336-.398.192-.624.585-.652 1.2a55.63 55.63 0 0 0-.002 1.423c.004.73.007 1.534-.008 2.014-.027.96-.099 1.543-.496 2.378-.335.71-.876 1.91-.931 3.512a19.72 19.72 0 0 0 .08 2.516c.052.634.098 1.202.054 1.9-.072 1.113-.48 1.66-1.066 2.065l-.078.052c-.728.503-1.133.783-1.36 1.358-.163.423-.163 1.026.317 1.285.307.164.678.136 1.058-.027.075-.032.15-.069.225-.104.22-.106.436-.21.652-.195.226.01.407.143.434.527.036.403.208.567.488.567.226 0 .435-.163.598-.604l.084-.242c.123-.361.217-.64.44-.64.29.01.351.334.37.794.027.662-.207 1.172-.67 1.623-.532.518-.93 1.009-.785 1.65.1.453.57.75 1.31.788.76.029 1.99.038 2.84.02.797-.02 1.258-.385 1.348-.874.057-.29.002-.482-.052-.666-.048-.164-.096-.32-.057-.533.045-.25.263-.356.498-.356s.46.106.496.356c.034.208-.01.362-.058.523-.054.187-.112.381-.05.676.1.48.552.844 1.348.873.85.02 2.08.01 2.83-.03.742-.037 1.212-.335 1.311-.786.145-.643-.251-1.124-.785-1.65-.46-.453-.697-.96-.67-1.622.018-.46.09-.787.371-.797.225-.008.32.275.443.645.026.076.052.156.082.238.162.441.37.606.596.606.28 0 .452-.175.488-.569.036-.393.217-.517.434-.527.216-.014.432.09.652.195.075.036.152.072.227.104.389.163.749.19 1.057.027.498-.26.499-.863.336-1.285-.232-.587-.642-.867-1.409-1.39l-.03-.02c-.589-.403-.995-.952-1.067-2.065-.044-.699.002-1.266.054-1.9.056-.682.118-1.44.08-2.514-.054-1.593-.594-2.803-.93-3.513-.397-.825-.47-1.42-.497-2.38a71.47 71.47 0 0 1-.006-2.013c.003-.597.005-1.142-.004-1.414-.018-.605-.254-.997-.643-1.2a1.147 1.147 0 0 0-.545-.13Zm-7.6 7.08h.032c.335 0 .615.287.615.652 0 .355-.27.653-.615.653a.63.63 0 0 1-.613-.653c0-.343.254-.634.582-.652zm6.929 0h.033c.334 0 .613.287.613.652 0 .355-.27.653-.613.653a.63.63 0 0 1-.615-.653c0-.343.253-.634.582-.652zm-3.442 1.246c1.447 0 2.488.346 3.483 1.248.687.624 1.14 1.862.597 2.783-.262.47-.769.846-1.375.903-.805.077-1.302-.23-1.619-.604-.307-.356-.633-.691-1.094-.691-.46 0-.786.334-1.093.69-.317.374-.824.682-1.62.605a1.803 1.803 0 0 1-1.375-.903c-.515-.93-.071-2.169.616-2.783 1.004-.902 2.033-1.248 3.48-1.248Zm.01 6.278c1.574 0 2.867 1.363 2.867 3.042 0 1.68-1.284 3.043-2.867 3.043-1.582 0-2.867-1.363-2.867-3.043 0-1.68 1.285-3.042 2.867-3.042z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAmebaIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
