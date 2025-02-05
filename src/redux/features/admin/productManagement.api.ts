import baseApi from "@/redux/api/baseApi";
import { TProduct, TQueryParam, TResponseRedux } from "@/types";

const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((arg: TQueryParam) => {
            params.append(arg.name, arg.value);
          });
        }
        return {
          url: "/products",
          method: "GET",
          params: params
        };
      },

      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        console.log({response});
        if (response.success && response?.data) {
          return {
            data: response.data,
            meta: response.meta
          };
        }
        return response;
      },
      providesTags: ["product"]
    }),
    getSingleProduct: builder.query({
      query: ({ productId }) => {
        return {
          url: `/products/${productId}`,
          method: "GET"
        };
      },

      transformResponse: (response: TResponseRedux<TProduct>) => {
        if (response.success && response?.data) {
          return response.data;
        }
        return response;
      }
    }),
    createProduct: builder.mutation({
      query: (product) => {
        return {
          url: "/products",
          method: "POST",
          body: product
        };
      }
    }),
    deleteProduct: builder.mutation({
      query: ({ productId }) => {
        return {
          url: `/products/${productId}`,
          method: "DELETE"
        };
      },
      invalidatesTags: ["product"]
    })
  })
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useCreateProductMutation, useDeleteProductMutation } =
  productManagementApi;
