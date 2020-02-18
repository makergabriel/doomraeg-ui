import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })

export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string[], wholeString?: boolean): string {
    try {
      if (text && search) {
        text = text.toString(); // sometimes comes in as number
        if (wholeString) {
          text = text.replace(new RegExp(search[0], "gi"), (match) => `<mark>${match}</mark>`);
        } else {
          search.forEach((s: string) => {
            text = this.highlightString(s, text);
          });
        }
      }
    }
    catch (exception) {
      console.error('error in highlight:', exception);
    }
    return text;
  }

  highlightString(s: string, text: string): string {
    s = s.trim();
    if (s.length > 0) {
      let pattern = s.trim().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      pattern = pattern.split(' ').filter((t) => {
        return t.length > 0;
      }).join('|');

      text = text.replace(new RegExp(s, "gi"), (match) => `<mark>${match}</mark>`);
    }

    return text;
  }
}