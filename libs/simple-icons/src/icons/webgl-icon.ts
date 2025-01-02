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
  selector: 'svg[si-webgl-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>WebGL</title>
    <svg:path
      d="M3.489 10.164c-.565.548-.885 1.172-.885 1.835 0 2.167 3.415 3.921 7.631 3.921 2.339 0 4.437-.484 5.837-1.335-1.533 1.426-4.265 2.43-7.385 2.43C3.89 17.015 0 14.769 0 11.999s3.89-5.014 8.689-5.014c3.131.002 5.872 1.009 7.398 2.444-1.399-.856-3.504-1.351-5.852-1.351-2.506 0-4.73.621-6.121 1.579l.785 3.395.971-3.481h.737l.971 3.481.805-3.481h.805L7.953 14.11h-.717l-.991-3.566L5.24 14.11h-.714zm19.839 3.48h-.162v.424h-.142v-.424h-.164v-.122h.468zm.064-.122h.209l.095.364.096-.364H24v.546h-.133v-.415h-.002l-.113.415h-.109l-.115-.415h-.003v.415h-.133zm-5.699.515c-.2.084-.399.126-.601.126-.319 0-.608-.055-.863-.166q-.3825-.1665-.645-.459c-.175-.195-.311-.424-.404-.688-.093-.263-.14-.547-.14-.851 0-.313.047-.601.14-.869.093-.269.226-.502.402-.699.175-.2.39-.355.645-.468s.541-.171.863-.171c.215 0 .421.034.621.098.199.064.381.16.543.284s.295.279.399.463.169.395.193.632h-.874c-.055-.233-.159-.408-.315-.525-.155-.118-.343-.176-.567-.176-.207 0-.382.04-.526.12s-.262.187-.35.322a1.41 1.41 0 0 0-.196.459c-.039.171-.062.348-.062.532 0 .175.02.346.062.512.04.167.107.315.196.448.088.133.206.24.35.32s.319.119.526.119c.303 0 .539-.077.705-.23s.262-.375.29-.668h-.922v-.689h1.75v2.255h-.584l-.093-.472c-.162.21-.344.357-.543.441m2.708-4.14v3.395h2.033v.774h-2.949V9.897zm-9.204 1.585c.109.151.191.337.251.557.053.21.08.452.08.716v.047H9.372c.011.41.164.876.807.876.45 0 .703-.344.719-.537l.002-.042h.592l-.007.051c-.008.075-.051.222-.135.377-.049.086-.104.166-.166.239a1.3 1.3 0 0 1-.248.218c-.071.046-.158.1-.287.139-.148.047-.326.069-.543.069-.415 0-.763-.151-1.007-.434a1.43 1.43 0 0 1-.266-.482c-.06-.182-.091-.386-.091-.601 0-.485.12-.896.348-1.186.125-.158.278-.28.457-.362.191-.086.41-.131.654-.131.218 0 .413.043.581.127.165.082.304.202.415.359m-1.064.047c-.402 0-.741.357-.765.785h1.543c-.046-.528-.302-.785-.778-.785m4.373.388c.058.182.086.381.084.588 0 .19-.022.385-.064.563-.049.206-.122.39-.22.545-.11.178-.252.318-.419.415-.186.109-.408.164-.654.164-.228 0-.426-.057-.585-.173a.89.89 0 0 1-.198-.193v.282h-.561V9.983h.59v1.393c.093-.111.202-.2.324-.262.146-.078.313-.118.497-.12.199 0 .383.04.547.118.158.075.295.184.408.324.109.135.193.297.251.481m-.53.67c0-.2-.013-.459-.111-.672-.12-.26-.335-.384-.654-.384-.3 0-.506.135-.628.417-.084.195-.126.452-.126.785 0 .696.412.942.765.942.244 0 .435-.102.565-.303.125-.191.189-.462.189-.785"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiWebglIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
