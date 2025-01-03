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
  selector: 'svg[si-gdal-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>GDAL</title>
    <svg:path
      d="M14.32642 13.62652q.0173-.01611.03381-.0332l-.03424.03357ZM14.09705 13.85192c-.00366-.01709-.00659-.032-.008-.04266l.00476.04688ZM13.804 9.19l-.003.001h.025l-.022-.001M15.153 19.24066l.18909.70178a1.2597 1.2597 0 0 0-.01013-.49133.54159.54159 0 0 0-.17896-.21045ZM13.042 19.65h.493l-.246-1.015-.247 1.015M9.87977 21.60888a3.79211 3.79211 0 0 0 .71356-2.41742 3.147 3.147 0 0 0-1.02142-2.71429 2.65021 2.65021 0 0 0-1.59338-.44354H6.23994v6.47876h1.73858a2.30043 2.30043 0 0 0 1.90125-.90351Zm-.45984-1.99127a3.05194 3.05194 0 0 1-.39929 1.14139 1.31157 1.31157 0 0 1-1.12762.56927h-.54761v-4.10696h.54071a1.34787 1.34787 0 0 1 1.138.53156 2.34662 2.34662 0 0 1 .40558 1.45685 2.60466 2.60466 0 0 1-.00977.40789ZM16.03614 22.519v.29352h-.30042c.01422.01556.02765.03088.04285.04651a7.85132 7.85132 0 0 1-.8775.119c.05566-.06921.06915-.13-.10828-.13843.004-.01056.01245-.01709.01715-.027h-.52716l-.05554-.22943-.29358-1.21136H12.661l-.29047 1.21069-.05518.2301H10.4867l.10474-.37988 1.78656-6.47881.06079-.2204h.35962a.46174.46174 0 0 0-.111-.094c-.166-.07837-.25952.03418-.43475.01135a2.56431 2.56431 0 0 1-.51556-.24365.93778.93778 0 0 1-.56879-.54657 1.99741 1.99741 0 0 0-.40472-.559c-.16864-.20514-.22144-.38-.48138-.43457-.03052-.00659.06366.21533.07336.23315a5.19238 5.19238 0 0 0 .34454.4826c.1651.23267.09467.27637-.07318.05133-.19214-.25739-.41492-.51337-.58142-.786-.063-.103-.0509-.16962-.15472-.2674-.1004-.09454-.23169-.14056-.33276-.23047a1.17538 1.17538 0 0 1-.38824-.839 11.4318 11.4318 0 0 0-2.14563 2.12183.43649.43649 0 0 1-.35748.18665.45038.45038 0 0 1-.16614-.03253.43647.43647 0 0 1-.26447-.474l.5791-3.56317a8.43654 8.43654 0 0 0-.8754 7.30994v-2.32655h2.03875c1.32983 0 2.915.59991 2.915 3.458a4.09848 4.09848 0 0 1-.77826 2.60345 2.65178 2.65178 0 0 1-.7995.67523 8.75084 8.75084 0 0 0 9.3446.34235H16.115ZM5.72462 6.43475a.33025.33025 0 0 0 .10327.23016c.01727.01654.04523.01416.06573.02667a.316.316 0 0 0 .16388.06642l.006-.00171.00293.0011a.33287.33287 0 0 0 .16479-.04932l.70483-.43481.815.589-1.21869 7.49919a.13764.13764 0 0 0 .08337.14868.14377.14377 0 0 0 .051.00952.13623.13623 0 0 0 .11145-.05841 13.86614 13.86614 0 0 1 8.12085-4.905.13707.13707 0 0 0 .10828-.12317.13567.13567 0 0 0-.08917-.13745L7.95673 6.7409l-.16143-.99756.6864-.42334a.36654.36654 0 0 0-.0167-.57538l-.96722-.52148a.69958.69958 0 0 0-.09662-.27826l-.31372-.50854.28864-.178.2887.84869 3.32935-2.22754v-.00004l-.16229-.477L10.35481 0l-.00006.00006V0L9.402.63745 7.02546 2.22753l.27686.8139-.33209.20483-.42126-.683a.71267.71267 0 0 0-.97839-.23193l-.73474.45325A.71241.71241 0 0 0 4.604 3.763l.42133.683-.3006.1853-.29315-.86194-.00006.00006v-.00008L2.76685 4.88311 1.10218 5.99688l.63928 1.87946 1.99475-1.3346 1.3346-.89294-.2724-.8006.172-.10614.172-.106.31372.50854a.69144.69144 0 0 0 .23749.22571Zm2.2724.61017 6.39117 2.3457a14.42212 14.42212 0 0 0-7.50433 4.5036ZM7.88612 17.52142h-.2406v3.497l-.00037-.00042v.01h.00037v.00006H7.893a1.00689 1.00689 0 0 0 .884-.44446 2.33078 2.33078 0 0 0 .35248-1.3739 2.0705 2.0705 0 0 0-.34418-1.2749 1.05461 1.05461 0 0 0-.89918-.41338ZM15.06068 9.04589c.0116-.08856-.04041-.1001-.16583-.18481a1.52 1.52 0 0 0-.46069-.28589c-.20569-.04053-.286.01477-.32788.10284l.91339.33521c.01726.00623.02495.02447.04101.03265ZM11.05128 8.92217a3.59931 3.59931 0 0 1 .6134.00812c.08173.00989.35529.10052.42944.05914a.25037.25037 0 0 0 .05035-.10254l-.42877-.15747a.57211.57211 0 0 1-.38153.0545c-.21741-.02942-.44623-.10071-.63464.08734.10413.06174.38965.30201.35175.05091ZM9.09272 11.48962a.857.857 0 0 0-.05988-.073c-.02881-.04517-.10114-.15674-.10529-.16388a1.38356 1.38356 0 0 0-.27789-.37915c-.0752-.064-.2699-.21344-.45312-.33862a7.78108 7.78108 0 0 1 2.7077-2.10339l-1.244-.45648a8.76509 8.76509 0 0 0-1.73781 1.39971l-.58362 3.591a14.66961 14.66961 0 0 1 1.75391-1.47619ZM14.26783 6.65765a8.798 8.798 0 0 0-3.57068.76929l1.75214.643a.59106.59106 0 0 1 .22546-.24921h-.02765a7.81472 7.81472 0 0 1 2.67945-.09573c-.11993.062-.03131.10406-.11859.16748a3.28251 3.28251 0 0 1-.66132.29852c.25232-.00067.86292.23334.98047-.11578l-.24408-.037a2.15371 2.15371 0 0 1 .49963-.23889 7.80564 7.80564 0 0 1 4.12256 2.24591c-.00781-.00018-.0155-.00043-.02307-.00018a1.24316 1.24316 0 0 0-.757.17523.96716.96716 0 0 1-.28906.18988c-.11151.03094-.232.00378-.34265.04083-.39935.13367-.336.9776-.86224.8501-.24719-.05988-.42139-.348-.54584-.53619-.10956-.16559-.30908-.30243-.17432-.50964-.06152.0155-.12708-.0022-.18756.00916.08423-.18256.367-.16663.414-.26.11719-.23383-.32251-.2583-.447-.29071.15-.15778.226.0531.37415.01727.14233-.03455-.0752-.21948-.16046-.2403-.0307-.00745-.53192.1366-.24176-.11951q-.53723-.33774-1.07428-.67572c-.06036.25067.47662.393.652.48126-.02716.10352-.19037.25421-.31525.21008-.11768-.04163-.06995-.234-.24762-.21466-.12677.291.26825.20593.305.38428.04169.20306-.14935.117-.22284.11346-.01752-.00092-.15448-.14069-.16187-.03485-.00885.12567.21844.07672.23444.20367a.90278.90278 0 0 1-.59637-.21387.416.416 0 0 1-.27655.22565l-.023.00555a1.35584 1.35584 0 0 0 .1947.0553c.1488.01794.2334.22137.31451.30469.05383.05524.15027.17249.24438.15985.14941-.02026.08685-.14911.17352-.2085.23248-.15912.29376.057.38641.27307a.93987.93987 0 0 0 .32483.40857c.072.06067.38782.277.358.41028-.02026.08978-.381.22607-.47742.25616-.35254.11017-1.014-.18036-1.085.37128.13678-.05023.526-.36383.64258-.21521.05322.06744-.04218.16565-.01978.2326.06671.20081.22357.1308.38818.09839a.27866.27866 0 0 1-.03485.01831c.22491-.11407.20154-.09027.30481-.27521a1.31278 1.31278 0 0 1 .13123-.24988c.16351-.14844.1886-.04626.29.06824.02649.03021.27686.38586.18781.368a1.0612 1.0612 0 0 0-.8125.10718 2.21242 2.21242 0 0 1-.437.27338c-.03973.01428-.33484.04187-.29987-.00769.05084-.07239.22607-.1203.29517-.19849-.19159-.07782-.35144.094-.502.19458-.15973.07458-.19684.21356-.33295.33545-.05939.053-.17163.06213-.23.13208-.05652.06781-.06354.17444-.11719.239-.0376.045-.13391.01782-.17322.08569-.05115.08881.04675.17126.02533.23523-.03925.116-.26288.21442-.34912.29822a1.31213 1.31213 0 0 0-.22937.2254 2.45806 2.45806 0 0 1 .10138.5744c-.08978.26367-.26428-.14343-.335-.24854-.2431-.36133-.729-.11951-1.061-.08954a.72775.72775 0 0 0-.57843 1.023.51569.51569 0 0 0 .57965.24451c.21594-.04364.2807-.34149.48395-.34692.37354-.00983.00824.36108-.024.49725-.02991.126.04651.1377.178.169.09717.02289.23474-.041.319.01367a.09664.09664 0 0 1 .02887.04474h.4184l.05981.22211.11975.44446a.36922.36922 0 0 1 .06036.00073c.32281.08124.1687-.02423.45221-.19312.19135-.11377.22272.02136.35352.02191.08905.00037.14557-.12622.29437-.08942.12134.03027.16919.12262.31409.14386.05817.00848.1181-.02008.17389-.0155v-.535h1.70575v1.79755a.56866.56866 0 0 0 .1073-.07654h.00018a.56432.56432 0 0 1-.10748.07666v-.00012c-.04993.02826-.09778.04535-.09778.011 0 .02271.0509.057.09778.08661v.00006c.02344.01483.05023.03156.06055.03876.09381-.30066.248-.10718.43341-.03278a3.68275 3.68275 0 0 0 .52014.10632 1.41968 1.41968 0 0 1 .56354.24384c.12732.13855.03937.36365-.055.50159-.12329.18066-.30914.25018-.38611.46283a3.3724 3.3724 0 0 0-.04987.52557c-.04694.25293-.08453.16431-.24963.3186-.139.13-.00232.1073-.19147.19019-.19.08325-.35724.05853-.48877.26416a.34342.34342 0 0 0 .01318-.03943 1.69423 1.69423 0 0 0-.1095.285.65412.65412 0 0 1-.06049.0766v.45813h1.81726v1.2027a8.60156 8.60156 0 0 0 3.49837-6.9019 8.731 8.731 0 0 0-8.78961-8.67135ZM13.20747 8.034c.16559-.05945.638-.00409.69623-.15771a4.13028 4.13028 0 0 0-1.02838.227.82393.82393 0 0 0-.11877.07947l.24976.09161c.05626-.13155.03563-.18093.20116-.24037ZM14.44044 10.84155c.23077-.16809.17877-.17834.09576-.44623a1.69841 1.69841 0 0 1-.103-.4187 14.04165 14.04165 0 0 0-1.64868.50958c.19977.11017.46649.18182.615.24823.13184.0589.51715.13953.58893.23792.09625.1322-.08295.2561.118.349a.251.251 0 0 0 .25183-.02563c.08984-.09991-.0365-.12244-.058-.23779-.04179-.22212.02694-.13386.14016-.21638ZM12.66737 16.03363l-1.78656 6.47876h1.19788l.17279-.7204.17285-.7204h1.74542l.34918 1.4408h1.20465l-1.74548-6.47876Zm-.00684 3.91644.53387-2.19495a3.18756 3.18756 0 0 0 .08557-.5658h.02734c.0014.02423.00824.04779.01013.072a3.646 3.646 0 0 0 .072.511l.26355 1.08887.26349 1.08893ZM3.19733 19.98663h.98224v1.26514a1.15779 1.15779 0 0 1-.62976.14948 1.22144 1.22144 0 0 1-1.049-.54761 2.63419 2.63419 0 0 1-.38844-1.54464 2.59979 2.59979 0 0 1 .433-1.57434 1.33094 1.33094 0 0 1 1.12091-.58978 2.22557 2.22557 0 0 1 1.38947.43347v-1.369a3.16046 3.16046 0 0 0-1.37579-.28412 2.38651 2.38651 0 0 0-1.985.96179 3.94868 3.94868 0 0 0-.74616 2.48926 3.7552 3.7552 0 0 0 .6828 2.3844 2.2512 2.2512 0 0 0 1.867.86469 2.86845 2.86845 0 0 0 1.78656-.54645v-3.25819H3.19733ZM17.442 16.034h-1.106v6.478h2.923v-1.184h-1.817Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGdalIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
