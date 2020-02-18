export interface AuthorFlairRichtext {
    e: string;
    t: string;
}

export interface Gildings {
}

export interface Data2 {
    total_awards_received: number;
    approved_at_utc?: any;
    edited: boolean;
    mod_reason_by?: any;
    banned_by?: any;
    author_flair_type: string;
    removal_reason?: any;
    link_id: string;
    author_flair_template_id: string;
    likes?: any;
    replies: string;
    user_reports: any[];
    saved: boolean;
    id: string;
    banned_at_utc?: any;
    mod_reason_title?: any;
    gilded: number;
    archived: boolean;
    no_follow: boolean;
    author: string;
    can_mod_post: boolean;
    created_utc: number;
    send_replies: boolean;
    parent_id: string;
    score: number;
    author_fullname: string;
    approved_by?: any;
    mod_note?: any;
    all_awardings: any[];
    subreddit_id: string;
    body: string;
    awarders: any[];
    author_flair_css_class?: any;
    name: string;
    author_patreon_flair: boolean;
    downs: number;
    author_flair_richtext: AuthorFlairRichtext[];
    is_submitter: boolean;
    body_html: string;
    gildings: Gildings;
    collapsed_reason?: any;
    distinguished?: any;
    associated_award?: any;
    stickied: boolean;
    author_premium: boolean;
    can_gild: boolean;
    subreddit: string;
    author_flair_text_color: string;
    score_hidden: boolean;
    permalink: string;
    num_reports?: any;
    locked: boolean;
    report_reasons?: any;
    created: number;
    author_flair_text: string;
    collapsed: boolean;
    subreddit_name_prefixed: string;
    controversiality: number;
    author_flair_background_color?: any;
    collapsed_because_crowd_control?: any;
    mod_reports: any[];
    subreddit_type: string;
    ups: number;
}

export interface Child {
    kind: string;
    data: Data2;
}

export interface Data {
    modhash: string;
    dist: number;
    children: Child[];
    after?: any;
    before?: any;
}

export interface CommentInfo {
    kind: string;
    data: Data;
}