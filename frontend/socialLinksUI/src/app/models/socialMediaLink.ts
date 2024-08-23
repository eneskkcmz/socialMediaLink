export interface SocialMediaLink {
    _id: number;
    linkAdress: string;
    linkAdressName: string;
    linkAdressDescription: string;
}

export interface SocialMediaLinkDetailResponse {
    message:string;
    data:SocialMediaLink
}

export interface SocialMediaLinkResponse {
    message: string;
    data: SocialMediaLink[];
}

//burada interface ile modelleme gerçekleştirilmiştir. Response için model oluşturulup kullanılacaktır.