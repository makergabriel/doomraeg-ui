import { Component } from '@angular/core';
import { Sentence } from '../components/sentence/sentence';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sentence: Sentence = {
    id: '123',
    submissionId: 'at995v',
    parsedText: 'leave the wind shirt at home too, wear your rain jacket.',
    commentId: 'egzmff7',
    // commentUrl: 'https://www.reddit.com/r/Ultralight/comments/at995v/first_time_solo_lady_hiker_at_point_reyes_ca/egzmff7?utm_source=share&utm_medium=web2x',
    verbWords: ['leave']
  }

  constructor() {

  }

}

