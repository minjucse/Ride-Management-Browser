import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 🚗 Rider requests a new ride
    requestRide: builder.mutation({
      query: (data) => ({
        url: "/rides/request",
        method: "POST",
        data, // ✅ use 'data' instead of 'body'
      }),
      invalidatesTags: ["Rider"],
    }),

    // 🚕 Driver accepts a ride
    acceptRide: builder.mutation({
      query: (rideId: string) => ({
        url: `/rides/${rideId}/accept`,
        method: "PATCH",
      }),
      invalidatesTags: ["Driver"],
    }),

    // 🚙 Driver updates ride status
    updateRideStatus: builder.mutation({
      query: ({ rideId, status }: { rideId: string; status: string }) => ({
        url: `/rides/${rideId}/status`,
        method: "PATCH",
        data: { status }, // ✅ use 'data'
      }),
      invalidatesTags: ["Driver"],
    }),

    // 🚫 Rider cancels a ride
    cancelRide: builder.mutation({
      query: (rideId: string) => ({
        url: `/rides/${rideId}/cancel`,
        method: "PATCH",
      }),
      invalidatesTags: ["Rider"],
    }),

    // 📜 Get ride history (Rider or Driver)
    getRideHistory: builder.query({
      query: () => ({
        url: "/rides/history",
        method: "GET",
      }),
      providesTags: ["Rider", "Driver"],
    }),
  }),
});

export const {
  useRequestRideMutation,
  useAcceptRideMutation,
  useUpdateRideStatusMutation,
  useCancelRideMutation,
  useGetRideHistoryQuery,
} = rideApi;
