export class Post{
    userId!:number;
    id!:number;
    title!:string;
    body!:string
}
export class PostResponse{
    data!:Post[];
}