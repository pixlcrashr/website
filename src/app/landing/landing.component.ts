import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutContentComponent } from '../layout-content/layout-content.component';
import { LayoutMenuListItemComponent } from '../layout-menu-list-item/layout-menu-list-item.component';
import { LayoutMenuListComponent } from '../layout-menu-list/layout-menu-list.component';
import { LayoutMenuComponent } from '../layout-menu/layout-menu.component';
import { LayoutTitleContainerComponent } from '../layout-title-container/layout-title-container.component';
import { LayoutTitleComponent } from '../layout-title/layout-title.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    LayoutContentComponent,
    LayoutMenuComponent,
    LayoutMenuListComponent,
    LayoutMenuListItemComponent,
    LayoutTitleComponent,
    LayoutTitleContainerComponent,
    RouterLink
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
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
          prefix: '',
          title: 'email public key',
          href: '/assets/vin@centheins.de.asc'
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
