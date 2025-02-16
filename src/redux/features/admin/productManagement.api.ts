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
        console.log({ response });
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
    // gets single product with ID
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
        return response.data;
      },
      providesTags: ["single-product"]
    }),

    // create product
    createProduct: builder.mutation({
      query: (product) => {
        return {
          url: "/products",
          method: "POST",
          body: product
        };
      }
    }),

    // update product
    updateProduct: builder.mutation({
      query: (updateData) => {
        return {
          url: `/products/${updateData._id}`,
          method: "PATCH",
          body: updateData
        };
      },
      invalidatesTags: ["single-product"]
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

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation
} = productManagementApi;
