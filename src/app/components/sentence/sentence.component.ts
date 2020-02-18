import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CommentInfo } from './comment-info';
import { Sentence, Word } from './sentence';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss'],
})
export class SentenceComponent implements OnInit {

  @Input() sentence: Sentence;

  commentUrl: string = 'https://www.reddit.com/api/info.json?id=t1_';

  commentInfo?: CommentInfo;
  commentBodyHtml: string;

  parsedWords: Word[];

  get selectedItemName(): string {
    return this.parsedWords.filter(w => w.selected).map(w => w.value).join(' ');
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    if (this.sentence.commentId) {
      this.getCommentInfo(this.sentence.commentId).subscribe((data: CommentInfo) => {
        console.log(data);
        this.commentInfo = data;
        this.commentBodyHtml = this.getCommentBodyHtml();
      });

      this.parsedWords = this.getParsedWords();
    }
  }

  getParsedWords(): Word[] {
    const wordStrs = this.sentence?.parsedText?.split(' ');
    return wordStrs.map((item, index) => {
      return {
        id: index + '',
        value: item,
      };
    });
  }

  wordSelected(event: { target: Element; }) {
    const elementId: string = (event.target as Element).id;
    this.parsedWords[elementId].selected = !this.parsedWords[elementId].selected;
  }

  getCommentBodyHtml() {
    const bodyHtml = this.commentInfo?.data?.children?.[0].data.body_html;

    return new DOMParser().parseFromString(bodyHtml, "text/html").documentElement.textContent;
  }


  // GET heroes whose name contains search Terms 
  getCommentInfo(commentId: string) {
    return this.httpClient.get(
      this.commentUrl + commentId,
      { responseType: 'json' }
    );
  }
}
