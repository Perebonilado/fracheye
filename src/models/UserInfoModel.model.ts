export interface UserInfoModel {
  id: string;
  isVerified: boolean;
  name: string;
  username: string;
  industries?: string[];
  country?: string;
  bio: string;
  languages: string[];
  contentType?: string;
  accounts?: {
    platform: string;
    username: string;
    views: number;
    likes: number;
    followers: number;
  }[];

  packages: {
    title: string;
    contentType: string;
    packageType: string;
    price: number;
    services: string[];
  }[];
}
