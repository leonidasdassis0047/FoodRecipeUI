export type RecipeItem = {
  id: number;
  name: string;
  image: any;
  duration: string;
  serving: number;
  isBookmark: boolean;
  category: string;
  author: {
    profilePic: any;
    name: string;
  };
  ingredients: {
    id: number;
    icon: any;
    description: string;
    quantity: string;
  }[];
  viewers: {
    id: number;
    profilePic: any;
  }[];
};
