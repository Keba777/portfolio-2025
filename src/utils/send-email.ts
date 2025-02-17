import { FormData } from "@/components/contact";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/contact";

  fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.error) {
        toast.error(`❌ Error: ${response.error}`, { position: "top-right" });
      } else {
        toast.success(`✅ ${response.message}`, { position: "top-right" });
      }
    })
    .catch((err) => {
      toast.error(`🚨 Request failed: ${err.message}`, { position: "top-right" });
      console.error("Request error:", err);
    });
}
