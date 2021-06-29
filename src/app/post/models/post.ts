export class Post {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
}
export class PostResponse {
    data!: Post[] | null;
}
export class PosCreatedResponse {
    id?: number;
}
export class PostCreateRequest {
    title?: string;
    userId?: number;
    body?: string;
}
export class PostEditRequest {
    title?: string;
    userId?: number;
    body?: string;
}
export class PostEditResponse {
    id?: number;
    title?: string;
    body?: string;
    userId?: number;
}