import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineText3dComponent } from './inline-text3d/inline-text3d.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InlineText3dComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected menu: {
    title: string,
    items: {
      prefix?: string,
      suffix?: string,
      title: string,
      href: string
    }[]
  }[] = [
    {
      title: 'social media',
      items: [
        {
          prefix: '',
          title: 'github',
          href: 'https://github.com/pixlcrashr'
        }
      ]
    },
    {
      title: 'projects',
      items: [
        {
          prefix: '',
          title: 'stwhh-mensa',
          href: 'https://github.com/pixlcrashr/stwhh-mensa'
        },
        {
          prefix: '',
          title: 'improfans',
          href: 'https://impro.fans'
        },
        {
          prefix: '',
          title: 'arma3urlfetch',
          href: 'https://github.com/playnet-public/ArmA3URLFetch'
        },
        {
          prefix: '',
          title: 'steamtrader',
          href: 'https://github.com/eisengrind/steamtrader'
        }
      ]
    },
    {
      title: 'volunteer work',
      items: [
        {
          prefix: '2023 - now',
          title: 'asta university of technology hamburg',
          href: 'https://www.asta.tuhh.de',
          suffix: '(as treasurer)'
        },
        {
          prefix: '2024 - now',
          title: 'theater improrama gUG',
          suffix: '(as ceo)',
          href: 'https://improrama.de'
        }
      ]
    },
    {
      title: 'work',
      items: [
        {
          prefix: '2019 - 2022, 2023 - now',
          title: 'xion gmbh',
          href: 'https://www.xion-medical.com'
        }
      ]
    },
    {
      title: 'contact',
      items: [
        {
          prefix: 'email',
          title: 'vin (at) centheins (dot) de',
          href: ''
        },
        {
          prefix: 'discord',
          title: 'pixlcrashr',
          href: ''
        }
      ]
    }
  ];
}
