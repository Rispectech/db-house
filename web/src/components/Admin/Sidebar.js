import { Link } from "react-router-dom";
import logo from "../../assets/images/LogoLg.svg";
import logout from "../../assets/images/logout.png";
import { Button, Modal, Dropdown, Offcanvas, Accordion } from "react-bootstrap";
function AdSidebar() {
  return (
  <div className="leftsidemenu">
    <div className="sidebar-wrapper">
      <div className="logo d-flex align-items-center justify-content-start">
        <Link to="/admin/dashboard" className="d-block auth-logo">
          <img src={logo} alt="" height="30" />
        </Link>
      </div>
      <div className="sideBrMenu">
        <div className="NavMenuRow">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header className="singleLink">
                <Link to="/admin/dashboard">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-speedometer2" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                    <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                  </svg>
                  </span>Dashboard
                  </Link>
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header className="singleLink">
                  <Link to="/admin/homepage">
                    <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.00259129 10.9224C0.00259129 9.52924 0.00810759 8.13564 4.54553e-05 6.74246C-0.00419778 5.99333 0.288585 5.41904 0.900035 4.98003C3.115 3.38876 5.3253 1.79139 7.53093 0.18792C7.8776 -0.0626399 8.12711 -0.0626399 8.47548 0.18792C10.6944 1.79366 12.913 3.39826 15.1314 5.00173C15.7204 5.42713 16.0008 5.99248 16 6.71566C15.9969 9.53974 15.9969 12.3637 16 15.1875C16 15.7001 15.703 15.9957 15.1883 15.9957C13.5228 15.9957 11.8573 15.9898 10.1923 16C9.72553 16.003 9.39838 15.6937 9.40729 15.207C9.42638 14.1754 9.4162 13.1439 9.41196 12.1118C9.40899 11.4099 8.98763 10.8476 8.35115 10.6714C7.40958 10.4119 6.5028 11.0841 6.49304 12.0629C6.48243 13.1107 6.49049 14.1584 6.49007 15.2062C6.49007 15.7269 6.22529 15.9957 5.71059 15.9957C4.06648 15.9957 2.42236 15.9957 0.778254 15.9957C0.275856 15.9957 0.00428885 15.7209 0.00386453 15.2134C0.002733 13.7835 0.00230841 12.3532 0.00259129 10.9224ZM14.6371 14.6608V14.4766C14.6371 11.8919 14.6382 9.30704 14.6405 6.72204C14.6405 6.4434 14.5365 6.25027 14.3163 6.09075C12.2411 4.58711 10.1677 3.08091 8.09613 1.57217C8.01424 1.51261 7.9612 1.50708 7.87591 1.56876C5.79078 3.07609 3.70396 4.58172 1.61544 6.08564C1.52276 6.14745 1.44758 6.23221 1.39718 6.33171C1.34677 6.4312 1.32286 6.54207 1.32775 6.65355C1.33143 9.25444 1.33228 11.8553 1.3303 14.4562V14.6264H5.20055V14.4311C5.20055 13.6118 5.18188 12.792 5.20904 11.974C5.25868 10.4851 6.46291 9.31867 7.95016 9.29144C9.41662 9.26507 10.6926 10.4379 10.7528 11.9072C10.788 12.7623 10.7643 13.6194 10.7668 14.4758V14.6625L14.6371 14.6608Z" fill="#767676"/>
                    </svg>
                    </span>Home Layout</Link>
               </Accordion.Header>
              </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                  </svg>
                  </span>Products
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/addproduct">Add Product</Link></li>
                    {/* <li><Link to="/admin/editproduct">Edit Product</Link></li> */}
                    <li><Link to="/admin/productlist">Product List</Link></li>
                    <li><Link to="/admin/manageinventory">Manage Inventory</Link></li>
                  </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                      <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                    </svg>
                  </span>Category
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/addcategory">Add Category</Link></li>
                    {/* <li><Link to="/admin/editcategory">Edit Category</Link></li> */}
                    <li><Link to="/admin/categorylist">Category List</Link></li>
                  </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                      <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                    </svg>
                  </span>Sub Category
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/AddSubCategory">Add Sub Category</Link></li>
                    {/* <li><Link to="/admin/EditSubCategory">Edit Sub Category</Link></li> */}
                    <li><Link to="/admin/SubCategoryList">Sub Category List</Link></li>
                  </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                      <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                    </svg>
                  </span>Miscellaneous
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/MiscellaneousSettings">Settings</Link></li>
                  </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                  </svg>
                  </span>Manage Merchant
                  </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/AddMerchant">Add Merchant</Link></li>
                    {/* <li><Link to="/admin/editmerchant">Edit Merchant</Link></li> */}
                    <li><Link to="/admin/merchantlist">Merchant List</Link></li>
                  </ul>                          
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
              <Accordion.Header>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-quote" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                  </svg>
                  </span>Blog
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/AddBlogCategory">Add Category</Link></li>
                    <li><Link to="/admin/BlogCategoryList">Category List</Link></li>
                    <li><Link to="/admin/addblog">Add Blog</Link></li>
                    <li><Link to="/admin/bloglist">Blog List</Link></li>
                  </ul>
                </Accordion.Body>
            </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                  </span>Orders</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                    <li><Link to="/admin/orderlist">Order List</Link></li>
                    </ul>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.9997 8.90641V11.4689C15.9822 11.5103 15.9618 11.5512 15.9481 11.5938C15.8539 11.8866 15.6698 12.1065 15.3945 12.2382C15.2961 12.285 15.2722 12.3387 15.2727 12.4385C15.2765 13.105 15.2773 13.7715 15.2727 14.438C15.2714 14.5876 15.2616 14.7423 15.2228 14.8855C15.0314 15.5934 14.4872 15.9991 13.738 15.9995C9.67072 16.0003 5.60341 16.0003 1.5361 15.9978C1.39163 15.9978 1.24247 15.9863 1.10397 15.9483C0.408893 15.7596 0.000627849 15.2098 0.000627849 14.4708C-0.00022448 11.6117 -0.000650644 8.75256 0.00233251 5.89343C0.00233251 5.74896 0.0151174 5.5998 0.0534722 5.4613C0.244394 4.77389 0.774116 4.37756 1.50541 4.36776C1.85444 4.36307 2.20347 4.37245 2.55207 4.36307C2.65009 4.36051 2.75876 4.33281 2.84314 4.28338C4.46853 3.34241 6.08412 2.38482 7.71676 1.4562C8.59466 0.956739 9.41843 0.3567 10.3747 0H10.7498C11.3818 0.0997225 11.7419 0.514807 12.0351 1.04709C12.6279 2.12145 13.2505 3.17961 13.8565 4.24673C13.9111 4.34262 13.9754 4.3912 14.0832 4.40526C14.3317 4.4385 14.5486 4.54888 14.7408 4.70699C15.1171 5.01638 15.2739 5.42592 15.2748 5.90323C15.2756 6.57998 15.2769 7.25673 15.2731 7.93348C15.2727 8.02851 15.3072 8.07155 15.3869 8.12568C15.539 8.22881 15.6903 8.34686 15.8045 8.48877C15.8978 8.60511 15.937 8.76535 16.0001 8.90598L15.9997 8.90641ZM14.5345 12.3656C14.4391 12.3656 14.3521 12.366 14.2652 12.3656C13.5573 12.36 12.8474 12.3856 12.1416 12.3421C10.959 12.2693 10.0321 11.099 10.1953 9.93474C10.3564 8.78538 11.2522 8.00422 12.4169 8.00038C13.0677 7.99825 13.7189 8.00038 14.3696 8.00038C14.4246 8.00038 14.4796 8.00038 14.535 8.00038C14.535 7.23244 14.535 6.48835 14.5341 5.74427C14.5341 5.70336 14.5247 5.66159 14.5137 5.62196C14.4173 5.2806 14.1386 5.09309 13.7265 5.09309C9.67541 5.09309 5.62429 5.09309 1.57317 5.09309C1.01106 5.09309 0.72596 5.37649 0.72596 5.9369C0.72596 8.7645 0.72596 11.5917 0.72596 14.4193C0.72596 14.9895 1.01106 15.2754 1.57957 15.2754C5.62046 15.2754 9.66092 15.2754 13.7018 15.2754C14.2567 15.2754 14.5426 14.9929 14.5435 14.4431C14.5448 13.8077 14.5439 13.1727 14.5435 12.5373C14.5435 12.4866 14.5388 12.4359 14.535 12.3664L14.5345 12.3656ZM13.5595 11.6279V11.6343C13.9758 11.6343 14.3926 11.6351 14.809 11.6343C15.1397 11.6334 15.2739 11.5005 15.2748 11.1719C15.2761 10.5105 15.2761 9.84951 15.2748 9.1881C15.2739 8.86379 15.1337 8.72572 14.806 8.72529C14.0197 8.72401 13.2335 8.71549 12.4476 8.73083C12.2234 8.73509 11.9852 8.77259 11.7807 8.85953C11.147 9.12929 10.8163 9.78857 10.939 10.47C11.0523 11.0999 11.6162 11.5921 12.2942 11.6241C12.7148 11.6441 13.1371 11.6279 13.559 11.6279H13.5595ZM4.21923 4.32855L4.22562 4.36691C4.63474 4.36691 5.04343 4.37074 5.45255 4.36392C5.53608 4.36264 5.62898 4.34006 5.701 4.29829C7.49601 3.25717 9.28845 2.21222 11.0813 1.16769C11.1235 1.14297 11.164 1.11527 11.2053 1.08885C10.962 0.711695 10.5755 0.628592 10.1762 0.860852C8.6833 1.72852 7.19173 2.5979 5.69972 3.46685C5.20623 3.75408 4.71273 4.04132 4.21923 4.32855ZM7.09413 4.33196L7.10905 4.36691C7.50964 4.36691 7.91024 4.37202 8.31041 4.3635C8.40842 4.36137 8.5171 4.33409 8.6019 4.28551C9.66902 3.67055 10.7331 3.04963 11.7973 2.42956C11.8408 2.40442 11.8817 2.37501 11.9315 2.34305C11.8101 2.1321 11.6946 1.93223 11.574 1.72341C10.0709 2.59875 8.5823 3.46557 7.09413 4.33239V4.33196ZM12.2963 2.97974C11.5092 3.43829 10.7408 3.88619 9.93921 4.35327H13.0817C12.8154 3.88747 12.561 3.44213 12.2967 2.97974H12.2963Z" fill="#767676"/>
                      <path d="M12.3561 10.9068C11.9598 10.9038 11.6317 10.5702 11.6368 10.1751C11.6423 9.77451 11.9692 9.45574 12.3702 9.46C12.7712 9.46426 13.0955 9.79241 13.09 10.1892C13.0849 10.5872 12.7546 10.9098 12.3561 10.9068Z" fill="#767676"/>
                    </svg>
                  </span>Manage Payments
                  </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/transactionlist">Payments List</Link></li>
                  </ul>                          
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                  </svg>
                  </span>Mange user
                  </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/userlist">User List</Link></li>
                    <li><Link to="/admin/useredit">Edit User</Link></li>
                  </ul>                          
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                  </svg>
                  </span>Manage CMS
                  </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><Link to="/admin/addpage">Create Page</Link></li>
                    <li><Link to="/admin/editpage">Edit Pages</Link></li>
                    <li><Link to="/admin/pageslist">Pages List</Link></li>                             
                  </ul>                          
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
              <Accordion.Header className="singleLink">
                <Link to="/admin/contactfeedbacks">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                  </svg>
                  </span>Contact Feed Back
                  </Link>
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="14">
              <Accordion.Header className="singleLink">
                <Link to="/admin/faq">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                  </svg>
                  </span>FAQ
                  </Link>
              </Accordion.Header>
            </Accordion.Item> 
            <Accordion.Item eventKey="15">
              <Accordion.Header className="singleLink">
                <Link to="/admin/setting">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                  </svg>
                  </span>Website Setting
                  </Link>
              </Accordion.Header>
            </Accordion.Item>                       
          </Accordion>
        </div>
      </div>
      <div className="logoutSideBar">
        <Link to="/admin/login">
          <span><img src={logout} alt="" height="18" /></span>Logout
        </Link>
      </div>
    </div>
  </div>
  );
}
export default AdSidebar;