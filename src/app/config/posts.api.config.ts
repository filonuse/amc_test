class PostsApiConfig {
  public getAll(requestData) {
    return '/' + requestData;
  }
  public get add() {
    return '/posts';
  }
}

export const POSTS_API = new PostsApiConfig();
