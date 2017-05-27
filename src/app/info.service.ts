import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Info } from './info';

const HS_API_KEY = 'PHAlPHeCasmshMGkZwsEdGaLMAiQp1BV8ECjsnCpoi7ekvH4Ay';
const HS_API_HEADER = 'X-Mashape-Key';

@Injectable()
export class InfoService {

  constructor() {
  }


  get getInfo(): Info {
    return {
    'patch': '8.0.4.18792',
    'classes': [
        'Death Knight',
        'Druid',
        'Hunter',
        'Mage',
        'Paladin',
        'Priest',
        'Rogue',
        'Shaman',
        'Warlock',
        'Warrior',
        'Dream',
        'Neutral'
    ],
    'sets': [
        'Basic',
        'Classic',
        'Promo',
        'Hall of Fame',
        'Naxxramas',
        'Goblins vs Gnomes',
        'Blackrock Mountain',
        'The Grand Tournament',
        'The League of Explorers',
        'Whispers of the Old Gods',
        'One Night in Karazhan',
        'Mean Streets of Gadgetzan',
        'Journey to Un\'Goro',
        'Tavern Brawl',
        'Hero Skins',
        'Missions',
        'Credits',
        'System',
        'Debug'
    ],
    'standard': [
        'Basic',
        'Classic',
        'Whispers of the Old Gods',
        'One Night in Karazhan',
        'Mean Streets of Gadgetzan',
        'Journey to Un\'Goro'
    ],
    'wild': [
        'Basic',
        'Classic',
        'Hall of Fame',
        'Promo',
        'Naxxramas',
        'Goblins vs Gnomes',
        'Blackrock Mountain',
        'The Grand Tournament',
        'The League of Explorers',
        'Whispers of the Old Gods',
        'One Night in Karazhan',
        'Mean Streets of Gadgetzan',
        'Journey to Un\'Goro'
    ],
    'types': [
        'Hero',
        'Minion',
        'Spell',
        'Enchantment',
        'Weapon',
        'Hero Power'
    ],
    'factions': [
        'Horde',
        'Alliance',
        'Neutral'
    ],
    'qualities': [
        'Free',
        'Common',
        'Rare',
        'Epic',
        'Legendary'
    ],
    'races': [
        'Demon',
        'Dragon',
        'Elemental',
        'Mech',
        'Murloc',
        'Beast',
        'Pirate',
        'Totem'
    ],
    'locales': [
        'deDE',
        'enGB',
        'enUS',
        'esES',
        'esMX',
        'frFR',
        'itIT',
        'koKR',
        'plPL',
        'ptBR',
        'ruRU',
        'zhCN',
        'zhTW',
        'jaJP',
        'thTH'
      ]
    };
  }

}
