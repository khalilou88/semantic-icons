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
  selector: 'svg[si-now-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>NOW</title>
    <svg:path
      d="M8.8009 11.9974c0-.974.7878-1.7634 1.7596-1.7634.9718 0 1.7596.7895 1.7596 1.7634 0 .9738-.7878 1.7634-1.7596 1.7634-.9718 0-1.7596-.7896-1.7596-1.7634zm13.0277-2.896l-1.2166 2.4524-.7878-2.3188-.0015-.0003c-.1566-.4505-.5822-.7737-1.0829-.7737-.399 0-.7505.2054-.956.517-.5255.8015-1.0497 1.6094-1.5735 2.414l-.2785-1.956c-.0963-.6296-.6807-1.0587-1.3048-.9624-.6249.096-1.0538.6778-.958 1.304l.0488.328c-.6427-1.0749-1.8162-1.7945-3.1575-1.7945-1.353 0-2.5352.7324-3.174 1.823l.07-.3434c.1223-.6008-.2645-1.1873-.864-1.31-.5993-.1223-1.1848.265-1.307.8659l-.4763 2.3382-1.752-2.7177c-.198-.3042-.5399-.5053-.9284-.5053-.5317 0-.976.3765-1.084.879l-1.0217 5.012c-.1223.6007.257 1.1846.8575 1.3121.0747.0159.1556.0235.2291.024.5139.0036.9763-.3579 1.0844-.892l.4763-2.3383c.5924.9217 1.1845 1.844 1.779 2.7641.196.2777.5281.4662.9018.4662.5462 0 1.0002-.398 1.0915-.9219l.469-2.302c.2292 1.815 1.7755 3.2187 3.6488 3.2187 1.7257 0 3.1736-1.191 3.5705-2.7972l.2613 1.759c.0736.579.5474 1.0371 1.1411 1.0371.4272 0 .7756-.2445.9972-.5841l1.8844-2.8942.905 2.6645c.1622.4752.5808.8138 1.0961.8138.4788 0 .855-.288 1.0609-.7155l2.402-4.845c.2834-.568.0528-1.2551-.5123-1.5403-.5647-.285-1.2558-.0524-1.5379.5196Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNowIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
