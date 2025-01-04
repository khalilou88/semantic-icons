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
  selector: 'svg[si-concourse-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Concourse</svg:title>
    <svg:path
      d="M23.9679 11.2451c-.041-.4858-.1227-.9615-.2353-1.4372-.0511-.243-.133-.4758-.1943-.7187l-.1125-.334-.0614-.162-.0716-.1821c-.1739-.4454-.3887-.8705-.6342-1.2855a9.801 9.801 0 00-1.5752-2.0345l-.092-.091-.041-.0507-.0716-.0607c-.0614-.0607-.1227-.1113-.1841-.172-.0614-.0507-.1228-.1114-.1739-.162-.0716-.0608-.133-.1114-.2046-.162l-.1636-.1316-.0819-.0607-.0204-.0202-.0512-.0405-.0102-.0101-.041-.0304c-.1022-.0709-.1943-.1316-.2863-.1923-.1637-.1114-.2864-.2025-.3785-.2632.1023-.3846.1841-.7794.2455-1.1741.1023-.5972.5217-1.832-.3375-2.1863-.8081-.334-1.8617 1.1842-1.8617 1.1842-2.1173 2.4394-3.396 5.4759-3.6823 8.6744.5319.1113 1.0433.3441 1.4729.6781h.0102C16.1838 9.7876 17.084 8.6135 17.8 7.3382c.6854.425 1.2889.9716 1.7696 1.6194l.0716.0911.0716.1114.1432.2226c.0819.1417.174.2733.2455.4252.3171.587.5421 1.2146.6751 1.8623.0614.3037.1023.6074.1228.9211a5.7575 5.7575 0 010 .8401c-.0103.2328-.041.4758-.0819.7086a4.6387 4.6387 0 01-.1125.5465c-.0818.2936-.133.4656-.133.4656s.0716-.162.1944-.4453c.0511-.1417.1227-.324.1841-.5365.0716-.2328.133-.4757.1739-.7085.0511-.2834.092-.577.1125-.8705a7.8611 7.8611 0 000-.9818c-.0204-.3542-.0716-.7085-.1432-1.0526a9.0875 9.0875 0 00-.3069-1.0628c-.0613-.172-.1432-.3543-.225-.5264l-.1125-.2328-.0614-.1214-.0307-.1316c-.1739-.3239-.3784-.6275-.6035-.921-.3887-.5163-.849-.9718-1.3604-1.3766.1534-.3442.3069-.6984.4296-1.0628l.0614.0304.3069.1619.0409.0202.0102.0102c.041.0303-.0614-.0405-.0511-.0304l.0204.0101.0818.0506.174.1114.092.0607.0511.0304.0205.0202h.0102c.0103.0101-.0511-.0405-.0307-.0202l.0103.01c.0613.0507.1227.0912.1943.1418l.2046.1518.0307.0203c-.041-.0304-.0103-.0102-.0205-.0203h.0102l.0103.0101.0511.0405.1023.081a8.8213 8.8213 0 012.2401 2.743l.0716.1417.0716.162.1534.3137c.0819.2025.174.4049.2353.6174.2966.8401.4705 1.7309.5012 2.6216.0102.2125.0102.425.0102.6376 0 .2126-.0204.415-.0306.6073-.0307.3745-.0921.739-.174 1.1134-.0715.3138-.1534.6175-.2557.9211-.0818.2733-.184.5061-.2557.6984-.0818.1923-.1534.334-.1943.4352-.0512.1013-.0716.1519-.0716.1519s.0307-.0506.092-.1417c.0512-.0911.1432-.2328.2455-.415.092-.1822.2148-.4049.3274-.668.133-.2936.2557-.5972.3477-.911.1228-.3644.2148-.7389.2967-1.1235.0409-.2025.0818-.415.1023-.6276a6.8334 6.8334 0 00.0613-.6579c.0307-.4555.0307-.921-.0102-1.3867zm-12.7946.6992a15.3453 15.3453 0 00-4.4414-.625c.0404-.8037.2428-1.5875.5868-2.3118l.0506-.0992.0607-.119.1214-.2283c.0809-.1389.1517-.2778.2529-.4068.3642-.5456.8094-1.0318 1.3152-1.4485.2327-.1984.4856-.377.7487-.5358.2327-.1488.4856-.2778.7385-.3968a7.5772 7.5772 0 01.6576-.268c.2024-.0793.3845-.119.5261-.1587.2934-.0694.4755-.1091.4755-.1091s-.172.01-.4856.0496c-.1517.0198-.344.0397-.5564.0893a8.1925 8.1925 0 00-.7082.1786c-.2732.0893-.5464.1885-.8195.3076-.3035.129-.5868.2877-.86.4563-.3035.1886-.5868.387-.86.6152-.2832.2381-.5462.4861-.789.764-.1215.129-.2429.2877-.3643.4365l-.1517.2083-.0708.1092-.081.119c-.1922.2977-.3743.6152-.516.9426a6.974 6.974 0 00-.5665 1.8454v.0298c-.3642.0297-.7284.0793-1.0927.1389v-.1885-.3969c.0102-.0496-.01.0694-.01.0595V10.972c0-.0298.01-.0596.01-.0993.0102-.0694.0102-.129.0203-.1984 0-.0397.01-.0694.01-.1091v-.0894c0-.0098-.01.0695-.01.0298v-.0099c.01-.0694.0202-.1488.0303-.2282.0101-.0793.0203-.1587.0405-.238v-.0299c-.0101.0497 0 .01-.0101.0199v-.0298l.01-.0595.0203-.129c.253-1.141.7082-2.2323 1.3658-3.1947l.091-.129.1013-.139.2124-.2777c.1417-.1588.2732-.3373.435-.496.597-.645 1.295-1.2105 2.064-1.657a5.9648 5.9648 0 01.5564-.2976c.182-.0993.3743-.1786.5463-.258.344-.1488.698-.2679 1.0522-.377.3035-.0893.6171-.1588.9308-.2183.2832-.0595.526-.0794.7284-.1091.2023-.0199.3642-.0298.4755-.0397h.1619l-.172-.01c-.1113 0-.2732-.0099-.4755-.0099-.2024.01-.4553 0-.7487.0298-.3237.0298-.6475.0695-.9611.129-.3845.0694-.7588.1587-1.123.2778a8.6512 8.6512 0 00-.597.2083c-.2023.0695-.4046.1588-.607.258-.4249.1984-.8296.4167-1.2241.6647-.4047.258-.7892.5557-1.1534.8731-.182.1489-.3642.3374-.5362.506l-.2327.258-.1214.129-.1214.1488c-.3035.3572-.5868.7441-.8296 1.141-.4451.7143-.7992 1.4882-1.042 2.2919l-.0405.119-.0202.0596-.0203.0893-.0607.238c-.0202.0794-.0405.1489-.0607.2283-.0202.0893-.0303.1686-.0506.248-.01.0695-.0303.139-.0404.1984-.0102.0298-.0102.0596-.0203.0993v.0298l-.01.0594v.0596c-.0102.119-.0203.2282-.0406.3373-.0303.3076-.0505.506-.0607.5953-.354.0893-.7082.1984-1.0521.3175 0 0-1.8515.4266-1.7503 1.3196.1012.8433 1.9223 1.012 1.9223 1.012 3.1464.635 6.4142.2877 9.3482-.9922-.1518-.516-.1923-1.0517-.1012-1.5775zm4.411 1.938c-.3645.4088-.81.7255-1.3162.9299v.0102c.3848 1.4816.982 2.8916 1.7718 4.1995-.6986.3678-1.4478.613-2.2274.7152l-.1113.0102-.1317.0103-.2632.0204c-.162 0-.324.0102-.486 0-.6682-.0102-1.3262-.1226-1.954-.3372-.2936-.092-.5872-.2146-.8605-.3474-.2531-.1226-.4961-.2554-.729-.4087-.2025-.1328-.3948-.2657-.577-.419-.1722-.1328-.3038-.2656-.4253-.3678-.2227-.2145-.3442-.3474-.3442-.3474s.1012.143.2936.3883c.1012.1226.2227.2657.3746.419.1721.1839.3442.3473.5366.5108.2227.1942.4556.3679.6986.5313.2733.184.5568.3474.8504.4905.3139.1533.648.286.982.3985.3544.1124.7088.1941 1.0733.2554.1822.0307.3746.0511.567.0716l.2631.0204.1317.0102h.1518c.3645 0 .729-.0204 1.0935-.0715.6175-.0818 1.225-.2452 1.8122-.4802.2227.3065.4556.6028.6986.8889-.0101.0102-.0203.0102-.0304.0204l-.2936.184-.0405.0204-.0101.0102c-.0506.0204.0607-.0306.0506-.0204h-.0101l-.0203.0102c-.0303.0102-.0607.0306-.091.0409l-.1823.092-.1013.051-.0506.0307-.0202.0102h-.0102c-.01 0 .0608-.0307.0304-.0102l-.0101.0102-.2126.092c-.0709.0306-.1519.0612-.2228.1021l-.0303.0102c.0506-.0204.0101 0 .0202-.0102h-.0101l-.0101.0102-.0608.0205-.1215.051a8.7816 8.7816 0 01-3.4827.5927l-.1519-.0102-.1721-.0102-.3544-.0307c-.2126-.0307-.4353-.051-.658-.1022-.8809-.1635-1.7313-.4496-2.5311-.8685-.1924-.1022-.3746-.2043-.5569-.3065-.1822-.1022-.3442-.2248-.5163-.3372-.3037-.2146-.6075-.4496-.8808-.6948-.243-.2146-.4657-.4394-.6784-.6744-.2024-.2043-.3442-.4087-.4758-.5722-.1316-.1635-.2126-.2963-.2835-.3883l-.1012-.143s.0303.051.081.143c.0607.092.1316.2453.243.419.1113.1737.243.3882.4252.6233.1923.2656.405.521.6176.756.2632.2862.5365.562.8302.8073.162.1328.324.2759.496.3985.1722.1328.3544.2656.5468.3882a11.06 11.06 0 001.225.6846c.4455.2044.901.378 1.3668.511.2328.0714.486.1225.729.1838l.3442.0613.172.0307.1924.0307c.4759.0613.9517.092 1.4276.092.8605-.0103 1.711-.133 2.5412-.3577l.1215-.0307.0607-.0204.0911-.0307c.081-.0306.162-.051.2329-.0817l.2227-.0715.243-.092c.0709-.0306.1316-.051.1924-.0715.0304-.0102.0607-.0204.0911-.0409l.0203-.0102h.01l.0608-.0306.0101-.0103.0405-.0204.3038-.1533c.162-.0817.2835-.143.3847-.1839.2632.2555.5265.5007.81.7255 0 0 1.3262 1.3794 2.0552.8174.6884-.5313-.1013-2.207-.1013-2.207-1.0529-3.0245-3.0474-5.6811-5.6797-7.5407zm-.0549-1.4117a1.8824 1.8824 0 01-1.8823 1.8823 1.8824 1.8824 0 01-1.8824-1.8823 1.8824 1.8824 0 011.8824-1.8824 1.8824 1.8824 0 011.8823 1.8824Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiConcourseIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
