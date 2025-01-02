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
  selector: 'svg[si-shieldsdotio-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Shields.io</title>
    <svg:path
      d="M3.084 13.11a.93.93 0 01-.187-.548l.347-.03c.013.254.183.5.434.572.295.108.65.096.916-.08.18-.137.226-.446.04-.597-.19-.16-.447-.182-.676-.25-.284-.068-.596-.137-.802-.36a.686.686 0 01.036-.903c.247-.256.633-.309.972-.275.298.03.613.162.758.44.051.11.132.272.08.377-.109.02-.22.018-.33.03-.01-.253-.21-.494-.468-.514-.23-.038-.488-.03-.69.098-.17.12-.224.407-.046.544.155.123.359.146.543.2.322.075.679.135.92.382.243.265.23.708-.01.971-.244.281-.643.36-.998.329-.314-.018-.645-.124-.839-.386zm2.827.343v-.746c.006-.217-.018-.438.032-.652.065-.288.415-.433.68-.336.167.054.24.235.243.398.004.446 0 .891.001 1.337h.341v-.907c-.006-.245.021-.493-.04-.732-.058-.247-.307-.394-.547-.413a.787.787 0 00-.71.271v-.996h-.34v2.777h.34zm2.161-2.776h-.341v.392h.341v-.392zm0 .765h-.341v2.012h.341v-2.012zm.451 1.382c-.102-.401-.049-.883.255-1.186.373-.364 1.054-.318 1.362.108.166.224.203.517.19.789h-1.5c-.016.35.276.727.649.686a.56.56 0 00.49-.415l.353.043c-.085.42-.527.7-.943.653-.392-.008-.78-.282-.856-.678zm.327-.57h1.123c.016-.336-.317-.657-.657-.57a.584.584 0 00-.466.57zm2.235-1.577h-.34v2.777h.34v-2.777zm1.835 2.777zm-1.403-.736c-.062-.335-.015-.7.168-.99.226-.328.723-.442 1.056-.211.051.028.124.139.157.123v-.963h.338v2.776h-.316V13.2c-.171.296-.579.371-.877.236-.288-.124-.481-.413-.526-.718zm.325-.268c-.009.272.078.589.339.721a.496.496 0 00.665-.259c.109-.242.09-.518.047-.773-.052-.237-.248-.461-.504-.461a.513.513 0 00-.497.385c-.04.125-.048.257-.05.387zm2.14.942c.16.082.344.107.522.108.256-.004.535-.08.692-.297.161-.209.156-.544-.048-.723-.181-.135-.41-.176-.623-.238-.136-.05-.29-.057-.411-.142-.104-.062-.114-.213-.038-.301.11-.118.286-.129.437-.12.187-.007.372.137.387.328l.333-.046a.748.748 0 00-.102-.289c-.12-.178-.346-.247-.55-.269-.252-.023-.536.011-.727.194a.526.526 0 00.012.762c.185.136.418.18.635.24.13.043.276.054.386.141.114.093.079.274-.02.365-.134.118-.33.129-.499.103-.209-.014-.377-.203-.392-.408l-.337.054v-.001c.03.217.15.429.344.539zm7.102-2.284c-.46-.341-1.219-.134-1.405.417a1.861 1.861 0 00-.082.582c-.046.518.35 1.072.894 1.085.46.027.916-.322.97-.788.095-.452.016-1.005-.377-1.296zM24 9.938v4.122c0 .575-.337 1.072-.823 1.308a.963.963 0 01-.51.146h-6.138l-.041.002c-.02 0-.041 0-.062-.002H1.455A1.456 1.456 0 010 14.06V9.938c0-.802.652-1.454 1.455-1.454H22.667c.187 0 .362.054.51.146.486.236.823.733.823 1.308zm-7.03-.484H1.455a.485.485 0 00-.485.484v4.122c0 .267.217.484.485.484H16.48a.485.485 0 00.489-.445V9.454zm1.714 1.223h-.368v2.777h.368v-2.777zm3.022.642c-.273-.594-1.04-.83-1.633-.618-.572.19-.888.823-.855 1.4 0 .272.07.543.204.78.396.718 1.518.836 2.07.236.443-.474.489-1.227.214-1.798z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiShieldsdotioIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
