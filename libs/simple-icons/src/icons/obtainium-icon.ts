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
  selector: 'svg[si-obtainium-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Obtainium</svg:title>
    <svg:path
      d="M16.85.97c-.269.004-.77.17-2.751.899-.668.245-1.291.48-1.758.658a40 40 0 0 0-.737.292 1 1 0 0 0-.083.04.526.526 0 0 0-.218.6c.026.092.143.429.308.89a262 262 0 0 0 1.383 3.781q.081.211.104.259a.6.6 0 0 0 .168.226c.07.05.162.07.288.06.252-.02.656-.154 1.395-.415.745-.263 1.112-.394 1.31-.44a.4.4 0 0 1 .188-.018c.037.01.062.03.103.063.058.048.082.073.09.11a.6.6 0 0 1-.031.206c-.03.121-.198.582-.43 1.197a192 192 0 0 1-1.663 4.227 41 41 0 0 1-.38.897l-.028.058-.014.023-.08.09a.14.14 0 0 1-.077.041c-.063.013-.175-.012-.4-.113-.45-.202-1.349-.702-3.246-1.75-.68-.373-1.31-.727-1.782-.996a41 41 0 0 1-.74-.433l-.073-.05c-.086-.079-.117-.163-.104-.243s.074-.16.185-.224c.044-.026.217-.1.451-.193.234-.092.53-.205.835-.315s.599-.222.829-.312l.289-.117q.113-.048.153-.07a.5.5 0 0 0 .191-.172.45.45 0 0 0 .044-.278c-.023-.238-.147-.604-.385-1.247-.207-.56-.583-1.588-.836-2.283-.126-.347-.253-.69-.357-.962a11 11 0 0 0-.216-.542.65.65 0 0 0-.266-.303.5.5 0 0 0-.369-.042q-.053.013-.278.092A280 280 0 0 0 3.371 5.8q-.108.041-.176.069-.065.025-.086.036c-.206.107-.41.354-.537.644-.03.067-.191.482-.433 1.104s-.562 1.45-.902 2.333a131 131 0 0 0-.943 2.501q-.15.418-.222.648a1.3 1.3 0 0 0-.072.297c0 .157.04.279.196.416s.423.296.886.55c.407.225 2.627 1.455 4.932 2.735 8.284 4.598 10.051 5.577 10.356 5.738l.043.023v-.008c.16.082.29.138.397.143.118.005.215-.04.315-.128a.2.2 0 0 0 .036-.048q.02-.035.048-.093.057-.116.154-.345c.13-.307.32-.777.589-1.456a903 903 0 0 0 2.687-6.944c.924-2.405 1.763-4.61 2.372-6.224a272 272 0 0 0 .919-2.474q.034-.097.05-.15.01-.027.014-.044c.003-.011.006-.015.006-.028 0-.123-.061-.248-.174-.37a2 2 0 0 0-.488-.362C20.29 2.678 18.755 1.83 17.94 1.401a8 8 0 0 0-.784-.376.7.7 0 0 0-.306-.055"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiObtainiumIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'D2BCFD');
  }
}
