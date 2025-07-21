import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : "";
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers) => {
      const token = getAuthToken();
      if (token) {
        headers.set("authorization", token);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: [
    "User",
    "Task",
    "Workflow",
    "Template",
    "AIOptimization",
    "Analytics",
    "UserSettings",
    "Suggestion",
    "Invoice",
    "RecurringBilling",
    "BillingAnalytics",
    "Dashboard",
  ],
  endpoints: () => ({}),
});
