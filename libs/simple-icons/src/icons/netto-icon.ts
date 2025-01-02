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
  selector: 'svg[si-netto-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Netto</title>
    <svg:path
      d="M1.878 6.859a.708.708 0 0 0-.434.157.638.638 0 0 0-.228.397L.01 13.625a.633.633 0 0 0 .12.506.62.62 0 0 0 .47.217h20.24v.012c.18 0 .373-.012.553-.036a2.735 2.735 0 0 0 1.084-.35 2.66 2.66 0 0 0 .843-.794c.144-.217.265-.446.361-.686.096-.23.168-.47.217-.723.048-.24.084-.481.096-.734.012-.241 0-.494-.012-.747a2.32 2.32 0 0 0-.145-.602 1.554 1.554 0 0 0-.313-.505 2.07 2.07 0 0 0-.47-.374 2.123 2.123 0 0 0-.565-.216 5.148 5.148 0 0 0-.458-.085 6.125 6.125 0 0 0-.47-.024h-.192a4.234 4.234 0 0 0-.41.049c-.131.024-.264.048-.384.084a1.997 1.997 0 0 0-.374.143c-.12.06-.228.12-.337.194a3.082 3.082 0 0 0-.313.24c-.06.06-.132.12-.18.192l.024-.107a.633.633 0 0 0-.12-.507.62.62 0 0 0-.47-.216h-.602l.096-.53a.633.633 0 0 0-.12-.505.62.62 0 0 0-.47-.217h-.963a.708.708 0 0 0-.433.157.638.638 0 0 0-.23.397l-.133.699h-1.08l.095-.53a.633.633 0 0 0-.12-.506.62.62 0 0 0-.47-.217h-.963a.707.707 0 0 0-.433.157.639.639 0 0 0-.23.397l-.132.699h-.313a.707.707 0 0 0-.433.156.638.638 0 0 0-.229.397l-.036.205a1.803 1.803 0 0 0-.518-.481 2.168 2.168 0 0 0-.674-.253 3.455 3.455 0 0 0-.807-.085c-.096 0-.18 0-.277.011a3.202 3.202 0 0 0-.819.146 2.114 2.114 0 0 0-.385.143c-.12.06-.24.12-.348.194a2.98 2.98 0 0 0-.326.252 8.369 8.368 0 0 0-.29.3 3.58 3.58 0 0 0-.24.35c-.024.037-.036.073-.06.109 0 0 0 .012-.012 0-.012 0 0-.012 0-.012l.47-2.409a.633.633 0 0 0-.12-.505.62.62 0 0 0-.47-.216H5.658a.707.707 0 0 0-.433.157.638.638 0 0 0-.23.396l-.408 2.13-.494-2.141a.502.502 0 0 0-.096-.217.633.633 0 0 0-.145-.168.707.707 0 0 0-.433-.157zm-.012.458h1.469c.108 0 .217.084.24.192l.952 4.118c0 .011.024.011.024 0l.806-4.119a.243.243 0 0 1 .23-.192h1.07c.12 0 .18.084.17.192l-1.193 6.128a.243.243 0 0 1-.228.194H3.9a.257.257 0 0 1-.241-.194l-.94-4.056c0-.013-.022-.013-.022 0l-.795 4.056a.243.243 0 0 1-.23.194H.603c-.11 0-.18-.085-.158-.194L1.637 7.51a.243.243 0 0 1 .229-.192zm14.846.42h.963c.108 0 .18.085.157.194l-.205 1.035c0 .012 0 .012.012.012h1.132c.108 0 .18.084.156.193l-.132.674a.243.243 0 0 1-.23.192h-1.131c-.012 0-.012 0-.012.012l-.41 2.144c-.06.324.085.552.314.59.325.06.674.01.95 0 .013 0 .013.011.013.011l-.144.746c-.012.06-.036.109-.097.133-.132.072-.445.192-1.06.192-1.3 0-1.469-.95-1.3-1.842l.385-1.986c0-.013 0-.012-.012-.012h-1.963v.047c-.012 0-.012 0-.012.013l-.409 2.143c-.06.325.084.554.313.59.325.06.674.012.951 0 .012 0 .012.012.012.012l-.144.746c-.012.06-.036.11-.097.133-.132.072-.445.192-1.06.192-1.3 0-1.456-.95-1.3-1.842l.386-1.987c0-.012 0-.01-.012-.01h-.674c-.109 0-.18-.086-.157-.194l.132-.674a.243.243 0 0 1 .23-.193h.673c.012 0 .012 0 .012-.011l.205-1.048a.243.243 0 0 1 .23-.193h.962c.11 0 .18.085.157.194l-.205 1.035c0 .011 0 .011.012.011h1.964c.012 0 .012 0 .012-.012l.204-1.047a.243.243 0 0 1 .229-.193zm4.919 1.21c.25.003.508.037.752.09.674.157 1.095.614 1.155 1.3.073.917-.072 1.819-.577 2.602-.374.566-.94.879-1.602.95-.373.037-.758.049-1.132-.023-.915-.17-1.348-.734-1.348-1.818.024-.494.12-1.095.36-1.65.41-.938 1.157-1.396 2.144-1.444a2.91 2.91 0 0 1 .248-.007zm-12.086.008c.241-.004.49.016.725.07.818.145 1.252.77 1.155 1.674-.12.95-.77 1.276-1.54 1.312-.494.024-1.626.012-1.783.012 0 0-.011 0-.011.012-.025.47.096.855 1.035.867.855.013 1.24-.083 1.722-.216.012-.013.024 0 .024.011l-.169.844c-.012.071-.06.12-.132.143a5.77 5.77 0 0 1-2.12.23c-1.312-.084-1.745-.831-1.733-1.673a4.65 4.65 0 0 1 .36-1.758c.423-.987 1.205-1.457 2.228-1.517a3.14 3.14 0 0 1 .24-.01zM9.36 9.998a1.036 1.036 0 0 0-.884.472c-.157.24-.205.433-.23.554 0 0 .001.012.013.012h1.348c.314.012.47-.097.506-.373.048-.325-.12-.553-.397-.625a1.513 1.513 0 0 0-.356-.04zm12.043.05c-.372.007-.706.185-.85.628-.145.42-.23.879-.265 1.336-.05.506.24.759.794.747.35.012.638-.157.807-.53.217-.482.289-1 .289-1.517 0-.337-.145-.542-.397-.614a1.416 1.416 0 0 0-.378-.05zm-13.361 5.47c-.096 0-.144.072-.18.156l-.241.747-.253-.76c-.024-.071-.084-.131-.168-.131-.097 0-.157.06-.17.156l-.276 1.168a.334.334 0 0 0-.012.108c0 .097.084.169.18.169.12 0 .17-.096.193-.193l.145-.662.204.71c.024.073.073.157.157.157a.166.166 0 0 0 .157-.12c0-.012.012-.025.012-.037l.216-.71.157.662c.024.109.06.193.192.193a.208.208 0 0 0 .157-.193c0-.036-.012-.072-.024-.108l-.277-1.156c-.024-.084-.084-.156-.169-.156zm8.85.012a.19.19 0 0 0-.192.192c0 .109.084.18.193.18.096 0 .18-.083.18-.18 0-.108-.084-.192-.18-.192zm-1.517.012c-.133 0-.205.072-.205.204V16.9c0 .133.072.205.205.205h.35c.24 0 .433-.048.614-.23a.757.757 0 0 0 .24-.553.79.79 0 0 0-.47-.722c-.132-.06-.229-.06-.385-.06zm-4.443.012c-.096 0-.157.084-.157.168v1.24c0 .097.06.169.157.169.096 0 .156-.084.156-.17v-.3l.374.398c.048.048.084.084.144.084.096-.024.17-.096.17-.18 0-.06-.049-.11-.086-.145l-.325-.313.301-.217c.06-.036.11-.084.11-.156a.16.16 0 0 0-.158-.157c-.06 0-.096.036-.144.072l-.386.3v-.625c0-.096-.048-.168-.156-.168zm12.245.06c-.096 0-.156.072-.156.168v.204c-.096 0-.18.036-.18.145 0 .108.084.144.18.144v.674c0 .097.06.169.156.169.097 0 .157-.084.157-.17v-.673h.06c.084 0 .157-.06.157-.144 0-.097-.073-.145-.157-.145h-.06v-.205c0-.096-.06-.168-.157-.168zm-7.426.265c.256.008.467.163.467.445 0 .193-.12.373-.3.434a.667.667 0 0 1-.218.024h-.157v-.903zm1.888.072c-.205 0-.41.108-.41.337 0 .12.073.229.17.277.083.048.18.06.276.096.048.012.097.024.097.085 0 .048-.06.096-.11.096-.18 0-.192-.133-.336-.157-.084-.012-.17.049-.17.133 0 .204.302.3.47.3.24 0 .447-.132.447-.384.036-.23-.145-.301-.301-.338l-.157-.036c-.036-.012-.096-.024-.096-.072 0-.048.036-.084.084-.084.156-.012.18.084.313.084a.128.128 0 0 0 .108-.108c.012-.157-.253-.23-.385-.23zm1.144 0a.586.586 0 0 0-.578.578c0 .325.265.59.59.59.132.012.457-.096.457-.277a.16.16 0 0 0-.156-.157c-.108 0-.145.12-.301.12a.267.267 0 0 1-.265-.264c0-.156.12-.265.277-.265.144 0 .18.108.277.108a.16.16 0 0 0 .156-.156c0-.18-.313-.277-.457-.277zm-8.694.012a.143.143 0 0 0-.144.12.206.206 0 0 0-.013.085v.77c0 .097.06.169.157.169.096 0 .157-.085.157-.17v-.516c0-.05 0-.145.072-.145.06 0 .096.06.168.06.097.012.193-.072.193-.18 0-.11-.096-.193-.205-.193a.358.358 0 0 0-.24.096.156.156 0 0 0-.145-.096zm2.312 0a.586.586 0 0 0-.578.578c0 .313.265.59.59.59.06 0 .108-.012.168-.024.11-.024.277-.12.277-.253-.012-.084-.048-.12-.144-.12h-.024c-.012 0-.012 0-.024.012-.024.012-.036.024-.06.036a.195.195 0 0 1-.085.048c-.024.012-.06.012-.108.012H12.4a.34.34 0 0 1-.193-.084l-.012-.012.566-.253c.072-.036.12-.072.12-.145 0-.24-.277-.385-.48-.385zm1.107 0c-.313 0-.505.253-.505.542v.433c0 .097.06.169.156.169.097 0 .157-.085.157-.17v-.468c0-.11.072-.205.192-.205.073 0 .145.048.17.108a.404.404 0 0 1 .023.169v.396c0 .097.06.169.157.169.12.012.168-.072.168-.157v-.421a.534.534 0 0 0-.518-.566zm6.406 0a.591.591 0 0 0-.59.59c0 .325.277.566.59.566a.56.56 0 0 0 .578-.566.589.589 0 0 0-.578-.59zm2.336 0c-.313 0-.505.253-.505.542v.433c0 .097.06.169.156.169s.157-.085.157-.17v-.468c0-.11.072-.205.192-.205a.19.19 0 0 1 .169.108c.024.049.024.109.024.169v.396c0 .097.06.169.156.169.109.012.169-.072.169-.157v-.421a.534.534 0 0 0-.157-.41.522.522 0 0 0-.36-.156zm-13.136.012c-.325 0-.542.265-.542.578 0 .313.229.59.542.59.12 0 .23-.048.325-.132.024.072.072.12.156.12.11-.012.17-.084.17-.18v-.807c0-.097-.06-.17-.17-.17-.084 0-.132.037-.156.12a.454.454 0 0 0-.325-.12zm11.655 0c-.096 0-.156.084-.156.169v.42c0 .158.036.29.144.41a.522.522 0 0 0 .36.157c.314 0 .507-.253.507-.554v-.433c0-.097-.06-.17-.156-.17-.097 0-.157.085-.157.17v.456c0 .109-.072.205-.193.205a.189.189 0 0 1-.168-.11c-.024-.048-.024-.108-.024-.156v-.397c0-.096-.06-.168-.157-.168zm-3.876.012c-.097 0-.157.084-.157.169v.794c0 .097.06.169.157.169.096 0 .156-.084.156-.17v-.793c0-.097-.06-.17-.156-.17zm-4.468.24c.084 0 .144.037.18.097l.012.012-.517.217v-.024c0-.156.144-.301.325-.301zm-3.25.037a.287.287 0 0 1 .264.277c0 .145-.12.265-.265.265-.156 0-.265-.12-.265-.277 0-.144.12-.265.265-.265zm10.756.024c.143.005.248.13.248.265 0 .145-.12.265-.265.265-.144 0-.276-.108-.276-.253a.27.27 0 0 1 .264-.277h.03zm-5.496.036c-.096 0-.168.06-.168.157 0 .096.072.156.168.156h.313c.085 0 .17-.06.17-.156s-.073-.157-.17-.157z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNettoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
