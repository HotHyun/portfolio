export type Next_Page_Url = string;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export type LocalizedText = {
    ko: string;
    en: string;
};

export interface IProject {
    title: LocalizedText;
    slug: string;
    summary: LocalizedText;
    overview: LocalizedText;
    contributions: {
        ko: string[];
        en: string[];
    };
    outcome?: LocalizedText;
    period?: LocalizedText;
    status?: LocalizedText;
    techStack: string[];
    liveUrl?: string;
    links?: {
        label: LocalizedText;
        url: string;
    }[];
}
