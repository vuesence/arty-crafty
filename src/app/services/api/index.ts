// import auth from "./auth";
import utils from "./utils";
import products from "./products";
import { authInterceptor, notificationInterceptor } from "./interceptors";
import jsonrpc from "./jsonrpc";
import http from "./http";

// import { useAuth } from "@/app/user-account/composables/useAuth";

// const auth: any = null;

const SUPABASE_API = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcWxyaW9zbXRxenFleW1uY2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5OTI3MjgsImV4cCI6MjAyMDU2ODcyOH0.lmmdwkqv6JjO5-uNIwxvXXRITMI9OugJx5aFKfxylXM";

const api = {
  utils,
  products,
  http,
  init() {
    http.setOptions({
      baseUrl: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${SUPABASE_API}`,
        "apikey": SUPABASE_API,
      },
      token: () => null,
      logout: () => null,
    });
    jsonrpc.addResponseInterceptor(notificationInterceptor);
    // jsonrpc.addResponseInterceptor(authInterceptor);
  },
};

export { api };
export default api;
