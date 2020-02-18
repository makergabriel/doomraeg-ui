export class Sentence {
    id: string;
    parsedText?: string;

    submissionId: string;
    commentId: string;

    fullComment?: string;

    // TODO word object with pos_tag?
    verbWords?: string[];

    // TODO type enum
    type?: string;

    item?: string;
}

export class Word {
    id: string;
    value: string;

    type?: string;
    itemName?: boolean;
    selected?: boolean;
}