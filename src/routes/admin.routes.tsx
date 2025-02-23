import AdminDashboard from "@/pages/Admin/AdminDashboard";
import CreateProduct from "@/pages/Admin/CreateProduct";
import EditProduct from "@/pages/Admin/EditProduct";
import ViewProduct from "@/pages/Admin/ViewProduct";
import ViewProductDetails from "@/pages/Admin/ViewProductDetails";
import UpdateProfile from "@/pages/Common/UpdateProfile";
import Orders from "@/pages/User/Orders";
import { TRouteItemsPath } from "@/types";
import { Box, Boxes, LayoutDashboard } from "lucide-react";
import { Navigate } from "react-router-dom";

export const adminPaths: TRouteItemsPath[] = [
  {
    name: "",
    index: true,
    element: <Navigate to="dashboard" replace />,
  },
  {
    icon: <LayoutDashboard />,
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    icon: <Box />,
    name: "Product Management",
    children: [
      {
        name: "Create Product",
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        name: "View Products",
        path: "view-products",
        element: <ViewProduct />,
      },
      {
        path: "product-details/:id",
        element: <ViewProductDetails />,
      },
      {
        path: "product-edit/:id",
        element: <EditProduct />,
      },
    ],
  },
  {
    icon: <Boxes />,
    name: "Orders",
    path: "order",
    element: <Orders />,
  },
  {
    path: "update-profile",
    element: <UpdateProfile />,
  },
];
