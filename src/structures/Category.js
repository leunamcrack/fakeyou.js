class Category {
    constructor(client, data) {
        this.client = client;
        this.__patch(data);
    }
    __patch(data) {
        this.token = data.category_token;
        this.type = data.model_type;
        this.title = data.name;
        this.name = data.name_for_dropdown;
        this.superCategoryToken = data.maybe_super_category_token;
        this.createdAt = new Date(data.created_at);
        this.updatedAt = new Date(data.updated_at);
        this.featured = {
            canHaveModels: data.can_directly_have_models,
            canHaveSubcategories: data.can_have_subcategories,
            canOnlyMods: data.can_only_mods_apply
        }
    }

    get superCategory() {
        return Boolean(this.superCategoryToken) ? this.client.categories.cache.get(this.superCategoryToken) : null;
    }
    get subCategories() {
        return this.client.categories.cache.filter(c => c.superCategoryToken == this.token) ?? null;
    }
    get models() {
        return this.client.models.cache.filter(m => m.categoryTokens.find(t => t == this.token || t.category_token == this.token));
    }
    get createdTimestamp() {
        return this.createdAt.getTime();
    }
    get updatedTimestamp() {
        return this.updatedAt.getTime();
    }

    isSuperCategory() {
        return Boolean(!this.featured.canHaveModels && this.featured.canHaveSubcategories);
    }
    isSubCategory() {
        return Boolean(this.superCategoryToken && (this.featured.canHaveModels && this.featured.canHaveSubcategories));
    };
}

module.exports = Category;