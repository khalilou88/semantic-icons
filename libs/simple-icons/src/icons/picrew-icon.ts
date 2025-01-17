import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-picrew-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Picrew</svg:title>
    <svg:path
      d="M2.22164 10.83105a.03738.03738 0 0 1 .03859-.03979.6029.6029 0 0 1 .44012.21584 1.03699 1.03699 0 0 1 .2098.61978.03497.03497 0 0 1-.041.03738c-.47266-.0627-.59204-.22066-.6475-.8332Zm-.1471 0a.03738.03738 0 0 0-.03859-.03979.6029.6029 0 0 0-.44011.21584 1.03699 1.03699 0 0 0-.2074.61978.03497.03497 0 0 0 .041.03738c.47026-.0627.58963-.22066.6451-.8332zm-.64752 1.00202a.03617.03617 0 0 0-.03858.03497 1.0394 1.0394 0 0 0 .2098.6246.6029.6029 0 0 0 .43771.21946.03738.03738 0 0 0 .03859-.0398c-.05547-.61254-.17484-.7717-.64752-.83923Zm.79462.84406a.03738.03738 0 0 0 .03859.03979.6029.6029 0 0 0 .44012-.21584 1.0394 1.0394 0 0 0 .2098-.63304.03617.03617 0 0 0-.041-.0386c-.47267.07115-.59204.23032-.6475.84286zm2.61658-1.84608a.03738.03738 0 0 0-.03858-.03979.6029.6029 0 0 0-.44012.21584 1.03699 1.03699 0 0 0-.2098.61978.03497.03497 0 0 0 .041.03738c.47266-.0627.59204-.22066.6475-.8332zm.79462.84406a.03497.03497 0 0 0 .041-.03738 1.03699 1.03699 0 0 0-.2098-.6246.6029.6029 0 0 0-.44012-.21584.03738.03738 0 0 0-.03859.03979c.05547.60652.17484.76448.64751.832zm-.6475 1.00322a.03738.03738 0 0 0 .03858.0398.6029.6029 0 0 0 .44011-.21584 1.0394 1.0394 0 0 0 .20981-.63425.03617.03617 0 0 0-.041-.0386c-.47267.07115-.59204.23032-.6475.84286zm-.79463-.84405a.03617.03617 0 0 0-.041.03858 1.0394 1.0394 0 0 0 .20981.6246.6029.6029 0 0 0 .44012.21463.03738.03738 0 0 0 .03858-.03979c-.05546-.61254-.17484-.7717-.6475-.83923Zm17.2212-.96464a.2894.2894 0 0 0-.2894.28939v.88023a.2894.2894 0 1 0 .57758 0v-.88023a.28819.28819 0 0 0-.28819-.29421zm-2.15115-.3943a.28819.28819 0 0 0-.28818.28819v1.2709a.2894.2894 0 1 0 .57757 0v-1.27572a.28819.28819 0 0 0-.28939-.28819Zm4.30108 0a.28819.28819 0 0 0-.28819.28819v1.2709a.2894.2894 0 1 0 .57758 0v-1.27572a.28819.28819 0 0 0-.2894-.28819Zm-5.15117 1.56754a.2906.2906 0 0 1-.28939.2894h-2.7456v.1061a.2894.2894 0 0 1-.57757 0 2.4116 2.4116 0 0 1 .04944-.45459c.26286-1.44695 2.01247-1.97388 3.06151-1.02975a1.4964 1.4964 0 0 1 .50162 1.0804zm-2.88426-.29542h2.25001a.99117.99117 0 0 0-.26045-.3762 1.3107 1.3107 0 0 0-.89108-.32196 1.21906 1.21906 0 0 0-1.09848.69816zm-5.2621-1.27694a2.04985 2.04985 0 0 0-1.80146 1.03578 1.34688 1.34688 0 0 0-.78256-.24116 1.36134 1.36134 0 0 0-.6644.17002 4.29625 4.29625 0 0 0-.79341-1.91119.6849.6849 0 0 1-.09767-.15072c.01326-.95861-1.15274-1.40476-1.8316-.72348a.93837.93837 0 0 0-.05186.05667.7488.7488 0 0 1-.13263-.00724 5.1174 5.1174 0 0 0-.57879-.02893 6.85616 6.85616 0 0 0-.709.03979C2.17462 7.94679.9218 8.37123.93506 9.36722a.6849.6849 0 0 1-.09767.15072 4.38428 4.38428 0 0 0-.83682 2.2476.2894.2894 0 0 0 .57637.05065 3.7838 3.7838 0 0 1 .72348-1.94736.8103.8103 0 0 0 .2086-.50161.43288.43288 0 0 1 .2689-.43168.50885.50885 0 0 1 .59927.13626c.15193.18569.3099.24116.63063.19292a4.73999 4.73999 0 0 1 .52211-.02532 4.73999 4.73999 0 0 1 .52211.02532c.33763.04944.49197-.01808.6427-.2074a.50885.50885 0 0 1 .5836-.12057.43288.43288 0 0 1 .2689.43167.8103.8103 0 0 0 .21583.50161 3.7838 3.7838 0 0 1 .72348 1.94737c.0205.19775 0 .37018.17484.47026a.2894.2894 0 0 0 .39912-.12058.75362.75362 0 0 1 1.25161.01085.2894.2894 0 0 0 .52814-.06873 1.44696 1.44696 0 0 1 1.42405-1.0611 1.4783 1.4783 0 0 1 1.25282.65715.2894.2894 0 1 0 .48232-.31953 2.04985 2.04985 0 0 0-1.73514-.9152zm13.72076 2.92767a1.40475 1.40475 0 0 1-1.27332.98876 1.63627 1.63627 0 0 1-1.29985-.54623c-.63184.72348-1.85934.7488-2.38989-.06752-.5221.37139-1.32637.61375-2.11255.61375-1.0599-.03497-1.5796-.38826-2.29825-.9562-.76448-.71141-1.8521-.14469-2.35492.73795v1.2058a.2894.2894 0 0 1-.57758 0v-1.53136a2.08603 2.08603 0 0 1-1.4144.54381 2.04985 2.04985 0 0 1-1.80146-1.03457 1.36737 1.36737 0 0 1-1.55066.0096c-.58601 1.09607-1.81593 1.72429-3.37623 1.72429-1.2287 0-2.25001-.38586-2.91561-1.08522v1.3722a.2894.2894 0 0 1-.57879 0v-2.29946a.29421.29421 0 0 1 .12058-.24116.2894.2894 0 0 1 .416.09646c.4582 1.02493 1.52775 1.57718 2.953 1.58321 1.42525.006 2.7034-.62942 2.9964-1.78096a.28577.28577 0 0 1 .14832-.1652.2906.2906 0 0 1 .3762.12059c.2484.44976 1.00926.44855 1.25765 0a.2906.2906 0 0 1 .49197-.0205.27613.27613 0 0 1 .03979.09043 1.48675 1.48675 0 0 0 2.84689 0 .2894.2894 0 0 1 .5619.006c.01326.03497.006.43047.0072.47508.4389-.42082 1.00201-.69936 1.5-.69936.92003-.03135 1.23474.56431 1.87743.92243a2.55388 2.55388 0 0 0 1.27574.3533c.85732 0 1.65194-.3111 2.0583-.7488a.2918.2918 0 0 1 .42082.16158c.24115.78497 1.38184.7898 1.75443-.01688a.28819.28819 0 0 1 .52332-.03135 1.0394 1.0394 0 0 0 1.01045.63545.832.832 0 0 0 .75845-.58722.28867.28867 0 0 1 .54984.17605zm-16.30599.41118a.28819.28819 0 0 0-.28818.2894v1.27452a.2894.2894 0 1 0 .57757 0v-1.27453a.28819.28819 0 0 0-.28939-.28939Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPicrewIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFBD16');
}
