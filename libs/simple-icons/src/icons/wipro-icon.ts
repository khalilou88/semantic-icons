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
  selector: 'svg[si-wipro-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wipro</svg:title>
    <svg:path
      d="M15.5415 12.0352c0-.8754-.69-1.5851-1.541-1.5851-.8513 0-1.5415.7097-1.5415 1.585 0 .8757.6902 1.5854 1.5416 1.5854.851 0 1.541-.7097 1.541-1.5853zm-1.541.837c-.4373 0-.7927-.3755-.7927-.837 0-.4611.3554-.8366.7928-.8366.437 0 .7923.3755.7923.8366 0 .4615-.3554.837-.7923.837zm-9.5842-2.2084l-.9272 2.8733c-.0148.046-.0665.0835-.1152.0835h-.084c-.0484 0-.1064-.0352-.1287-.078l-.95-1.8242-.9496 1.8243c-.0225.0427-.0803.0779-.1289.0779h-.0842c-.0483 0-.1002-.0374-.115-.0835L.006 10.6638c-.0222-.0693.019-.126.0915-.126h.5677c.0483 0 .1002.0379.115.084l.4688 1.452.8047-1.5458c.0223-.0428.0804-.0779.1289-.0779H2.24c.0485 0 .1063.0351.1289.0779l.805 1.5458.4685-1.452c.0148-.0461.0667-.084.1152-.084h.5672c.0727 0 .1138.0567.0915.126zm1.368 2.7367a.1323.1323 0 01-.1321.1322h-.5726a.1321.1321 0 01-.132-.1322v-2.7304c0-.0729.059-.1322.132-.1322h.5726a.1323.1323 0 01.1322.1322v2.7304zm.7409-2.7305v4.3155c0 .0733.059.1322.1321.1322h.5725a.1318.1318 0 00.132-.1322v-1.497c.2426.085.5106.132.7927.132.8024 0 1.4531-.7097 1.4531-1.5853 0-.8754-.6507-1.5851-1.4531-1.5851-.394 0-.751.171-1.0127.4487l-.0002-.0004-.1018-.2777c-.0167-.0453-.07-.0829-.1183-.0829h-.2642a.1321.1321 0 00-.1321.1322zm.8365.9c.1376-.2239.3713-.3714.6373-.3714.4235 0 .7667.3746.7667.8366 0 .4622-.3432.837-.7667.837-.2396 0-.4599-.063-.6373-.1694V11.57zm3.5755 1.9627h-.5723a.1321.1321 0 01-.1321-.1321V10.67c0-.0729.059-.1322.1321-.1322h.2642c.0483 0 .1016.0376.1183.0829l.1018.2777s.3195-.4483.87-.4483c.5507 0 .6172.1897.5712.2947-.0463.1047-.1714.3878-.197.4454-.0254.058-.0903.099-.1772.0657-.087-.0335-.5128-.1723-.8469.2329v1.9118a.1323.1323 0 01-.1321.1321zm4.6893-10.3422a.704.704 0 01.8628-.4977.7043.7043 0 11-.3647 1.3607.7046.7046 0 01-.498-.863zm1.8466 2.7892a.5286.5286 0 01.1935.722.528.528 0 01-.7218.193.5281.5281 0 01-.1935-.7215.5281.5281 0 01.7218-.1935zm.664 10.9686a.5727.5727 0 010-.8099.5722.5722 0 01.8096 0 .5727.5727 0 010 .81.573.573 0 01-.8095 0zm-2.4577-7.377a.2423.2423 0 01-.4196-.2423.2422.2422 0 11.4196.2422zm-.4196 5.1001a.2423.2423 0 01.4196-.2422.2425.2425 0 01-.0888.331.2426.2426 0 01-.3308-.0888zm3.7296-2.6713a.517.517 0 11-.5169-.5169.517.517 0 01.517.5169zM17.816 3.8893a.7485.7485 0 111.2962.749.7485.7485 0 01-1.2962-.749zm-5.43 10.5742a.154.154 0 11.2666.154.154.154 0 01-.2666-.154zm2.8037-8.7912a.4842.4842 0 11.9354.2502.4843.4843 0 01-.593.3428.4844.4844 0 01-.3424-.593zM13.993 7.8486a.308.308 0 110-.6162.308.308 0 110 .6162zm0 1.0129a.1982.1982 0 11.0002.3962.1982.1982 0 01-.0002-.3962zm0-2.84a.4404.4404 0 110-.881.4404.4404 0 010 .881zm-1.6072 3.5154a.154.154 0 11.2102.0564.1537.1537 0 01-.2102-.0564zm1.6072 5.602a.1982.1982 0 11-.0001-.3963.1982.1982 0 010 .3964zm0 1.0127a.3081.3081 0 010 .6165.3081.3081 0 110-.6165zm3.4944-2.1381a.4399.4399 0 01.6014-.161.44.44 0 01.161.6013.4402.4402 0 01-.7624-.4403zm-3.4944 3.9655a.4404.4404 0 11-.0002.8808.4404.4404 0 01.0002-.8808zm9.5772-8.5426c.1383.5164-.168 1.0476-.6848 1.186-.5165.1383-1.0478-.1684-1.1861-.6849-.1386-.5164.1682-1.0475.6847-1.186.5165-.1384 1.0476.168 1.1862.6849zm-6.694 6.0018a.3963.3963 0 01.5602-.5607.396.396 0 010 .5602.3958.3958 0 01-.5602.0005zm.9736-4.4694a.484.484 0 01.3424-.5928.4841.4841 0 11.2507.9353.484.484 0 01-.593-.3425zm1.4076-2.7157a.6165.6165 0 01.6166 1.0676.6165.6165 0 01-.6166-1.0676zm-.3108-.3913a.5722.5722 0 01-.8095 0 .5725.5725 0 010-.8097.5722.5722 0 01.8095 0 .5725.5725 0 010 .8097zm-1.0968 5.1692a.4842.4842 0 01.9355.2509.4842.4842 0 11-.9355-.251zm-3.0186-5.4263a.3303.3303 0 01.4041-.2336.3303.3303 0 01-.1706.6381.3303.3303 0 01-.2335-.4045zm6.4676-.835c.4213-.2434.96-.0992 1.2031.3218a.8806.8806 0 11-1.5254.8808c-.2429-.421-.0987-.9596.3223-1.2027zm-3.049 2.777a.4401.4401 0 11-.7624.4402.4401.4401 0 11.7624-.4402zm1.3227.9608a.6606.6606 0 01.4667-.8089.6605.6605 0 01.342 1.2758.6605.6605 0 01-.8087-.467zm0 2.9854a.6603.6603 0 111.2756.3416.6602.6602 0 11-1.2756-.3416zm.8594-.7354a.7574.7574 0 11-.0002-1.5146.7574.7574 0 01.0002 1.5146zm-.6756-6.5149a.7921.7921 0 010-1.1207c.3095-.3095.8115-.31 1.1209 0a.7926.7926 0 01-1.1209 1.1207zm-3.2223 2.068a.3522.3522 0 11-.61-.3523.3522.3522 0 01.61.3522zm-.6387 5.5862a.2642.2642 0 01.3738-.0004.2646.2646 0 010 .3738.2638.2638 0 01-.3738 0 .2637.2637 0 010-.3734zm0-4.1666a.2642.2642 0 01.3738-.0004.2642.2642 0 11-.3738.0004zm.5146 3.9917a.2868.2868 0 01-.105-.391.2862.2862 0 01.3912-.1046.2863.2863 0 01-.2862.4956zm-.486 2.3203a.352.352 0 01.129-.4811.352.352 0 01.4811.1288.352.352 0 01-.1289.4811.3521.3521 0 01-.4811-.1288zm.877-5.659a.286.286 0 01-.1048.3909.2867.2867 0 01-.3911-.1049.2862.2862 0 01.4958-.286zm-.2485.9334a.3082.3082 0 11.5955-.1596.3082.3082 0 01-.5955.1596zm0 1.3668a.3083.3083 0 11.5953.1602.3083.3083 0 01-.5953-.1602zm.4008-.3467a.3366.3366 0 11.0001-.6731.3366.3366 0 01-.0001.6731zm.4832-3.7744a.3963.3963 0 11-.5602.5608.3963.3963 0 01.5602-.5608zm-7.416 11.4507a.573.573 0 01-.782.2096.5726.5726 0 01.5725-.9916.5725.5725 0 01.2096.782zM14.814 8.945a.2202.2202 0 11-.114.4253.2202.2202 0 01.114-.4254zm-2.5387 11.8366a.6164.6164 0 11-1.1908-.3189.6164.6164 0 011.1908.319zm2.5387-5.726a.2203.2203 0 01-.1138-.4255.22.22 0 11.1138.4254zm-.1604 5.8739a.6603.6603 0 01-.6604.6602.6603.6603 0 01-.6606-.6602c0-.3649.2959-.6608.6606-.6608.3647 0 .6604.296.6604.6608zm-1.4693-5.9217a.1767.1767 0 01-.1247-.2158.1766.1766 0 01.216-.1245.1761.1761 0 01-.0913.3403zm-.0712 1.3712a.2863.2863 0 11-.5526-.1478.2863.2863 0 01.5526.1478zm-2.795-2.2726a.2202.2202 0 01-.3812.2202.2195.2195 0 01.0805-.3005.2198.2198 0 01.3007.0803zm1.6704 1.8817a.2642.2642 0 11-.4578-.2638.2642.2642 0 01.4578.2638zm.0148-1.8253a.1321.1321 0 11-.1869-.1869.1328.1328 0 01.187 0 .1325.1325 0 010 .187zm-.9966.81a.242.242 0 11-.3423.342.2418.2418 0 010-.342.2417.2417 0 01.3423 0zm.0783 2.7563a.3518.3518 0 01-.4811.1289.3522.3522 0 11.4811-.1289zm9.7924.0285a.7926.7926 0 010 1.121c-.3094.3097-.8114.3093-1.121 0-.3097-.3094-.3095-.8114 0-1.121a.793.793 0 011.121 0zm-1.6198-2.0103a.6169.6169 0 01-.2255-.8423.6168.6168 0 01.842-.2255.6165.6165 0 01-.6166 1.0678zm3.2445 1.1612c-.243.4214-.7818.5656-1.203.3223-.4211-.243-.5653-.7816-.3224-1.2026.2437-.4211.782-.5655 1.203-.3224.4213.2433.5657.7816.3224 1.2027zm-7.2666-.2796a.33.33 0 11-.1706-.638.3301.3301 0 01.1706.638zM24 12c0 .584-.4735 1.058-1.058 1.058-.5843 0-1.0578-.474-1.0578-1.058 0-.5842.4735-1.0579 1.0579-1.0579S24 11.4159 24 12.0001zm-.4297 2.564c-.1386.5164-.6697.8233-1.1862.685-.5165-.1387-.8233-.6698-.6847-1.1862.1383-.5169.6696-.8234 1.1861-.685.5169.1386.8231.6697.6848 1.1861zm-6.583 5.881a.7044.7044 0 11-1.3608.3643.7042.7042 0 01.4981-.8625.7043.7043 0 01.8628.4981zm2.1248-1.0825a.748.748 0 01-.274 1.0221.7482.7482 0 01-1.0222-.2738.748.748 0 01.2738-1.0224.7484.7484 0 011.0224.274zm-3.9225-1.0344a.4843.4843 0 11.9355-.2507.4843.4843 0 01-.9355.2507zm2.2835-.3077a.5284.5284 0 11-.5284-.9153.5284.5284 0 01.5284.9153zm-4.761.2798a.3963.3963 0 01-.7655-.205.396.396 0 01.4853-.2803.3964.3964 0 01.2802.4853zm-.8958-8.2762a.132.132 0 11.1868-.1869.132.132 0 01-.1868.1869zm.0754-1.651a.2643.2643 0 01-.2643-.4576.2642.2642 0 01.2643.4576zm-.8072-4.8355a.6164.6164 0 111.1905-.3188.6164.6164 0 01-1.1905.3188zm-.847 6.0555a.22.22 0 11-.2201.3812.2195.2195 0 01-.0806-.3004.22.22 0 01.3006-.0808zm.7691-.908a.2423.2423 0 01-.3423.3426.2423.2423 0 01.3423-.3426zm-.5319-2.0617a.3524.3524 0 01.6102-.352.3522.3522 0 01-.6102.352zm2.8578-3.5523c0-.3648.2959-.6608.6606-.6608.3647 0 .6604.296.6604.6608a.6606.6606 0 01-.6604.6607.6608.6608 0 01-.6606-.6607zm-.1483 5.9215a.1761.1761 0 11.091.3404.1761.1761 0 01-.091-.3404zm-.9575-3.5729a.3964.3964 0 01.2053.7657.3962.3962 0 01-.4854-.2802.3966.3966 0 01.28-.4855zm.5358 1.9992a.2863.2863 0 11.148.553.2863.2863 0 01-.148-.553zM9.0292 4.5596a.5724.5724 0 01.2094-.7818.5725.5725 0 01.5724.9914.572.572 0 01-.7818-.2096zm-.37 10.5048a.2643.2643 0 11-.458.264.2643.2643 0 01.458-.264zM4.9193 9.4585a.462.462 0 01.566-.3267.462.462 0 01.327.5658.4621.4621 0 01-.5661.3271.4624.4624 0 01-.327-.5662zm.9001-2.1691a.4843.4843 0 11.1772.6616.4845.4845 0 01-.1772-.6616zm2.2292 10.6412a.528.528 0 010 .7472.5286.5286 0 01-.7473 0 .5285.5285 0 010-.7472.5282.5282 0 01.7473 0zM6.676 16.2091a.4842.4842 0 11-.8386.4845.4842.4842 0 01.8386-.4845zm.6255-10.1393a.5285.5285 0 010-.7472.5286.5286 0 01.7473 0 .528.528 0 010 .7472.5282.5282 0 01-.7473 0zM9.6679 7.689a.3086.3086 0 01-.436 0 .3085.3085 0 010-.4362.3086.3086 0 01.436 0 .3085.3085 0 010 .4362zm0 8.6225a.3082.3082 0 11-.4359.4359.3082.3082 0 01.4359-.436zM8.2015 8.6719a.2642.2642 0 11.4574.2642.2642.2642 0 01-.4574-.2642z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWiproIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
