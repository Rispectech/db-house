import { store } from "./index";
import { AddMerchant } from "./components";

export const Rest = "http://localhost:12001/rest";
// export const Rest = "http://165.22.213.2:12001/rest"

const post = async (url, payload, { errorMessage, jwt }) => {
  var appState = store.getState();
  let headers = { "Content-Type": "application/json" };
  if (appState?.user?.jwt) headers["Authorization"] = "Bearer " + appState.user.jwt;
  if (jwt) headers["Authorization"] = "Bearer " + jwt;
  console.log("post", payload, JSON.stringify(payload));
  return await fetch(Rest + url, {
    method: "post",
    headers,
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      if (res.status === 401) throw new Error("Unauthorized!");
      if (res.status !== 200) throw new Error(res.statusText);
      return res;
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const postImage = (url, payload, { errorMessage, jwt }) => {
  var appState = store.getState();
  let headers = {};
  if (appState?.user?.jwt) headers["Authorization"] = "Bearer " + appState.user.jwt;
  if (jwt) headers["Authorization"] = "Bearer " + jwt;
  return fetch(Rest + url, {
    method: "post",
    headers,
    body: payload,
  })
    .then(async (res) => {
      if (res.status === 401) throw new Error("Unauthorized!");
      if (res.status !== 200)
        throw new Error(errorMessage ? errorMessage : "Some Error Occured!");
      return res;
    })
    .then((res) => res.json());
};

const get = (url, { errorMessage, jwt }) => {
  var appState = store.getState();
  let headers = { "Content-Type": "application/json" };
  if (appState?.user?.jwt) headers["Authorization"] = "Bearer " + appState.user.jwt;
  if (jwt) headers["Authorization"] = "Bearer " + jwt;
  return fetch(Rest + url, {
    method: "get",
    headers,
  })
    .then(async (res) => {
      if (res.status === 401) throw new Error("Unauthorized!");
      if (res.status !== 200)
        throw new Error(errorMessage ? errorMessage : "Some Error Occured!");
      return res;
    })
    .then((res) => res.json());
};

const $delete = (url, { errorMessage, jwt }) => {
  var appState = store.getState();
  let headers = { "Content-Type": "application/json" };
  if (appState?.user?.jwt) headers["Authorization"] = "Bearer " + appState.user.jwt;
  if (jwt) headers["Authorization"] = "Bearer " + jwt;
  return fetch(Rest + url, {
    method: "delete",
    headers,
  })
    .then(async (res) => {
      if (res.status === 401) throw new Error("Unauthorized!");
      if (res.status !== 200)
        throw new Error(errorMessage ? errorMessage : "Some Error Occured!");
      return res;
    })
    .then((res) => res.json());
};

export let RestAdmin = {
  async login(email, password) {
    return await post(
      `/auth/adminlogin`,
      { email, password },
      { errorMessage: "Login Failed!" }
    );
  },
  async verifyAJwt(jwt) {
    return await post("/auth/verifyAJwt", { jwt });
  },

  async merchantLogin(email, password) {
    return await post(
      `/auth/merchantLogin`,
      { email, password },
      { errorMessage: "Login Failed!" }
    );
  },
  async merchantSignup(email, password) {
    return await post(
      "/auth/merchantsignup",
      { password, email },
      { errorMessage: "Unable to sign up Merchant!" }
    );
  },
  async getAllMerchants() {
    let result = await get("/merchants/admin/getAll", {
      errorMessage: "Unable to get Merchants",
    });
    return result.merchants;
  },
  async updateMerchant(merchant) {
    return await post(
      "/merchants/updateOne",
      { merchant },
      "Unable to update Merchant Details!"
    );
  },
  async deleteMerchant(merchantId) {
    return await $delete("/merchants/deleteOne/" + merchantId, { errorMessage: "" });
  },
  async newMerchantImages(formData) {
    return await postImage("/merchants/newMerchantImages", formData, {
      errorMessage: "Unable to upload merchant Images",
    });
  },

  async createCategory(category) {
    return await post(
      "/categories/createCategory",
      { category },
      { errorMessage: "Unable to create category" }
    );
  },
  async updateCategory(category) {
    return await post(
      "/categories/updateCategory",
      { category },
      { errorMessage: "Unable to update category" }
    );
  },
  async checkCategoryData(categoryId) {
    return await post(
      "/categories/checkCategoryData",
      { categoryId },
      { errorMessage: "Unable to update category" }
    );
  },
  async checkSubCategoryData(subCategoryId) {
    return await post(
      "/categories/checkSubCategoryData",
      { subCategoryId },
      { errorMessage: "Unable to update category" }
    );
  },
  async createCategoryImage(formData) {
    return await postImage("/categories/newCategoryImage", formData, {
      errorMessage: "Unable to create category Image",
    });
  },
  async getAllCategories() {
    return (
      await get("/categories/getAllCategories", {
        errorMessage: "Unable to get category list.",
      })
    )?.categories;
  },
  async createSubCategory(subCategory) {
    return await post(
      "/categories/createSubCategory",
      { subCategory },
      { errorMessage: "Unable to create category" }
    );
  },
  async createSubCategoryImage(subCategory) {
    return await postImage("/categories/newSubCategoryImage", subCategory, {
      errorMessage: "Unable to create category Image",
    });
  },
  async getAllCategoriesData() {
    return await get("/categories/getAllData", {
      errorMessage: "Unable to get subcategory list.",
    });
  },
  async getAllSubCategoryFormated() {
    let result = (
      await get("/categories/getAllData", { errorMessage: "Unable to get subcategory list." })
    ).data;
    if (!result) return [];
    let formatedSubCategory = [];
    result.map(({ category, subCategories }, index) => {
      subCategories.map((subCategory) => {
        formatedSubCategory.push({ ...subCategory, category });
      });
    });
    return formatedSubCategory;
  },
  async getAllSubCategoriesById(id) {
    let all = await this.getAllSubCategoryFormated();
    return all.filter((x) => x.categoryId.toString() === id.toString());
    //return (await get(`/categories/getAllSubCategories/${id}`,  {errorMessage: "Unable to get subcategory list."}));
  },
  async updateSubCategory(subCategory) {
    return await post(
      "/categories/updateSubCategory",
      { subCategory },
      { errorMessage: "Unable to update subCategory" }
    );
  },
  async deleteCategory(id) {
    return await $delete("/categories/deleteCategory/" + id, { errorMessage: "" });
  },
  async deleteSubCategory(id) {
    return await $delete("/categories/deleteSubCategory/" + id, { errorMessage: "" });
  },

  async getAllProducts() {
    let result = await get("/product/admin/getAll", {
      errorMessage: "Unable to get Products List!",
    });
    return result.products;
  },
  async updateProduct(product) {
    return await post(
      "/product/updateOne",
      { product },
      { errorMessage: "Unable to update Product Details!" }
    );
  },
  async newProductImages(body) {
    return await postImage("/product/newProductImages", body, {
      errorMessage: "Unable to upload merchant Images",
    });
  },

  async createColor(color) {
    return await post("/misc/createColor", color, { errorMessage: "Unable to create color" });
  },
  async createUnit(unit) {
    return await post("/misc/createUnit", unit, { errorMessage: "Unable to create unit" });
  },
  async getAllColors() {
    return await get("/misc/getAllColors", { errorMessage: "Unable to get colors list." });
  },
  async getAllUnits() {
    return await get("/misc/getAllUnits", { errorMessage: "Unable to get units list." });
  },
  async updateColor(color) {
    return await post(
      "/misc/updateColor",
      { color },
      { errorMessage: "Unable to update Color." }
    );
  },
  async updateUnit(unit) {
    return await post(
      "/misc/updateUnit",
      { unit },
      { errorMessage: "Unable to update Unit." }
    );
  },
  async deleteColor(id) {
    return await $delete("/misc/deleteColor/" + id, { errorMessage: "" });
  },
  async deleteUnit(id) {
    return await $delete("/misc/deleteUnit/" + id, { errorMessage: "" });
  },
};

export let RestMerchant = {
  async createProduct(product) {
    return await post(
      "/product/createProduct",
      { product },
      { errorMessage: "Unable to create product!" }
    );
  },
  async getAllBrands() {
    return (await get("/brands/getAll", { errorMessage: "Unable to get Brands List!" }))
      .brands;
  },
  async getAllProducts() {
    let result = await get("/product/getAll", {
      errorMessage: "Unable to get Products List!",
    });
    return result.products;
  },
  async updateProduct(product) {
    return await post("/product/updateOne", { product }, "Unable to update Product Details!");
  },
  async updateMerchant(merchant, jwt) {
    return await post(
      "/merchants/updateOne",
      { merchant },
      { jwt, errorMessage: "Unable to update Merchant!" }
    );
  },
};

export let RestClient = {
  async getCategories() {
    return await get("/categories/getAllData", {
      errorMessage: "Unable to get categpries List!",
    });
  },
  async getProductsByCategoryId(categoryId) {
    console.log("getProductid is ", categoryId);
    return await post(
      "/categories/getProductsByCategory",
      { categoryId },
      { errorMessage: "Unable to get products!" }
    );
  },
};
