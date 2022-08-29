import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Category,
  ProductList,
  ProductDetail,
  Checkout,
  Cart,
  Aboutus,
  Contactus,
  Faq,
  TermConditions,
  PrivacyPolicy,
  ErrorPage,
  Thanku,
  BlogList,
  MyAccount,
  AccountSetting,
  OrderHistory,
  Wishlist,
  Transactions,
  InstantQuote,
  QuickQuote,
  ChangePassword,
  BlogDetail,
} from "./components";

// Merchant Dashboard pages
import {
  Login,
  Register,
  ForgotPassword,
  Dashboard,
  AddProduct,
  EditProduct,
  ViewProduct,
  ProductList2,
  ManageInventory,
  OrderList,
  TransactionList,
  MyProfile,
  EditProfile,
  MerchantPassword,
} from "./components";

// Main Admin pages
import {
  AdDashboard,
  AdLogin,
  AdSidebar,
  AdminAddProduct,
  AdminEditProduct,
  AdminProductList,
  AdminMyProfile,
  AdminEditProfile,
  AdminChangePassword,
  AdminManageInventory,
  AdminOrderList,
  AdminTransactionList,
  AdminAddCategory,
  CategoryList,
  EditCategory,
  AdminAddSubCategory,
  SubCategoryList,
  EditSubCategory,
  MiscellaneousSettings,
  AddPage,
  EditPage,
  PagesList,
  MerchantProfile,
  EditMerchant,
  MerchantList,
  AddMerchant,
  UserList,
  UserEdit,
  ViewOrder,
  ContactFeedbacks,
  Setting,
  HomePage,
  FaqAdmin,
  AddBlogCategory,
  EditBlogCategory,
  BlogCategoryList,
  AddBlog,
  AdminBlogList,
  EditBlog,
  // ViewMerchant,
} from "./components";

import { useDispatch, useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";
import { stateActions } from "./redux/stateActions";
import { Rest, RestAdmin, RestClient } from "./rest";
import AdminEditProductVariants from "./components/Admin/EditProductVariants";
import MerchantEditProductVariants from "./components/Merchant/EditProductVariants";

console.log();

export function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  let checkJWT = () => {
    return new Promise((resolve, reject) => {
      let jwt = localStorage.getItem("JWT");
      let utype = localStorage.getItem("utype");
      if (!jwt || !utype) {
        resolve();
      } else if (utype === "admin") {
        let headers = { "Content-Type": "application/json", Authorization: "Bearer " + jwt };
        fetch(Rest + "/auth/verifyAJwt", { method: "post", headers })
          .then((res) => {
            if (res.status === 200) {
              return res;
            } else throw new Error(`Invalid JWT`);
          })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            if (res && res.admin) {
              dispatch(stateActions.setUser("admin", res.admin, jwt));
            }
            resolve();
          })
          .catch(reject);
      } else if (utype === "merchant") {
        let headers = { "Content-Type": "application/json", Authorization: "Bearer " + jwt };
        fetch(Rest + "/auth/verifyMJwt", { method: "post", headers })
          .then((res) => {
            if (res.status === 200) {
              return res;
            } else throw new Error(`Invalid JWT`);
          })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            if (res && res.merchant) {
              dispatch(stateActions.setUser("merchant", res.merchant, jwt));
            }
            resolve();
          })
          .catch(reject);
      }
    });
  };

  useEffect(() => {
    checkJWT()
      .then(() => {
        RestClient.getCategories()
          .then((result) => {
            dispatch(stateActions.setCategories(result.data));
            setLoading(false);
          })
          .catch((e) => {
            console.error(e);
            setLoading(false);
          });
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="full-screen">
        <PuffLoader color="#2e1e7c" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="productdetail" element={<ProductDetail />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="faq" element={<Faq />} />
        <Route path="termconditions" element={<TermConditions />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="thanku" element={<Thanku />} />
        <Route path="blogList" element={<BlogList />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="accountsetting" element={<AccountSetting />} />
        <Route path="orderhistory" element={<OrderHistory />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="instantquote" element={<InstantQuote />} />
        <Route path="quickquote" element={<QuickQuote />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="blogdetail" element={<BlogDetail />} />

        {/* Merchant Screens Design*/}
        <Route path="merchant/login" element={<Login />} />
        <Route path="merchant/register" element={<Register />} />
        <Route path="merchant/forgot-password" element={<ForgotPassword />} />
        <Route path="merchant/Dashboard" element={<Dashboard />} />
        <Route path="merchant/AddProduct" element={<AddProduct />} />
        <Route path="merchant/EditProduct" element={<EditProduct />} />
        <Route path="merchant/ViewProduct" element={<ViewProduct />} />
        <Route path="merchant/productlist" element={<ProductList2 />} />
        <Route path="merchant/ManageInventory" element={<ManageInventory />} />
        <Route path="merchant/OrderList" element={<OrderList />} />
        <Route path="merchant/TransactionList" element={<TransactionList />} />
        <Route path="merchant/MyProfile" element={<MyProfile />} />
        <Route path="merchant/EditProfile" element={<EditProfile />} />
        <Route path="merchant/EditProductVariants" element={<MerchantEditProductVariants />} />
        <Route path="merchant/MerchantPassword" element={<MerchantPassword />} />

        {/* Main Admin Screens */}
        <Route path="admin/dashboard" element={<AdDashboard />} />
        <Route path="admin/login" element={<AdLogin />} />
        {/* <Route path="admin/sidebar" element={<AdSidebar />} /> */}
        <Route path="admin/AddProduct" element={<AdminAddProduct />} />
        <Route path="admin/EditProduct" element={<AdminEditProduct />} />
        <Route path="admin/EditProductVariants" element={<AdminEditProductVariants />} />
        <Route path="admin/ProductList" element={<AdminProductList />} />
        <Route path="admin/myprofile" element={<AdminMyProfile />} />
        <Route path="admin/EditProfile" element={<AdminEditProfile />} />
        <Route path="admin/ChangePassword" element={<AdminChangePassword />} />
        <Route path="admin/ManageInventory" element={<AdminManageInventory />} />
        <Route path="admin/OrderList" element={<AdminOrderList />} />
        <Route path="admin/TransactionList" element={<AdminTransactionList />} />
        <Route path="admin/AddCategory" element={<AdminAddCategory />} />
        <Route path="admin/EditCategory" element={<EditCategory />} />
        <Route path="admin/CategoryList" element={<CategoryList />} />
        <Route path="admin/AddSubCategory" element={<AdminAddSubCategory />} />
        <Route path="admin/SubCategoryList" element={<SubCategoryList />} />
        <Route path="admin/EditSubCategory" element={<EditSubCategory />} />
        <Route path="admin/MiscellaneousSettings" element={<MiscellaneousSettings />} />
        <Route path="admin/AddPage" element={<AddPage />} />
        <Route path="admin/MerchantProfile" element={<MerchantProfile />} />
        <Route path="admin/EditPage" element={<EditPage />} />
        <Route path="admin/PagesList" element={<PagesList />} />
        <Route path="admin/EditMerchant" element={<EditMerchant />} />
        <Route path="admin/MerchantList" element={<MerchantList />} />
        <Route path="admin/AddMerchant" element={<AddMerchant />} />
        <Route path="admin/UserList" element={<UserList />} />
        <Route path="admin/UserEdit" element={<UserEdit />} />
        <Route path="admin/vieworder" element={<ViewOrder />} />
        <Route path="admin/ContactFeedbacks" element={<ContactFeedbacks />} />
        <Route path="admin/Setting" element={<Setting />} />
        <Route path="admin/HomePage" element={<HomePage />} />
        <Route path="admin/Faq" element={<FaqAdmin />} />
        <Route path="admin/AddBlogCategory" element={<AddBlogCategory />} />
        <Route path="admin/EditBlogCategory" element={<EditBlogCategory />} />
        <Route path="admin/BlogCategoryList" element={<BlogCategoryList />} />
        <Route path="admin/AddBlog" element={<AddBlog />} />
        <Route path="admin/BlogList" element={<AdminBlogList />} />
        <Route path="admin/EditBlog" element={<EditBlog />} />

        {/* <Route path="admin/ViewMerchant" element={<ViewMerchant />} /> */}
        {/* Main Admin Screens Design*/}
        {/* <Route path="admin/login" element={<AdLogin />} />
          <Route path="admin/register" element={<AdRegister />} />
          <Route path="admin/forgot-password" element={<AdForgotPassword />} />
          <Route path="admin/Dashboard" element={<AdDashboard />} />
          <Route path="admin/AddProduct" element={<AddProduct />} />
          <Route path="admin/EditProduct" element={<AdEditProduct />} />
          <Route path="admin/ProductList2" element={<AdProductList2 />} />
          <Route path="admin/ManageInventory" element={<AdManageInventory />} />
          <Route path="admin/OrderList" element={<AdOrderList />} /> 
          <Route path="admin/TransactionList" element={<AdTransactionList />} /> 
          <Route path="admin/MyProfile" element={<AdMyProfile />} /> 
          <Route path="admin/EditProfile" element={<AdEditProfile />} /> 
          <Route path="admin/MerchantPassword" element={<AdMerchantPassword />} />  */}
      </Routes>
    </Router>
  );
}
