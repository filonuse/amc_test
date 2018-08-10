class ItemApiConfig {
  public getById(type, id) {
    return '/' + type + '/' + id;
  }

  public edit(type, id) {
    return '/' + type + '/' + id;
  }
}

export const ITEM_API = new ItemApiConfig();
