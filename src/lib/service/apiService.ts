import { toast } from "@/components/ui/use-toast";
import { IResponse } from "@/types";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: RequestMethod;
  body?: Record<string, unknown>; // Replacing any with a specific type for the request body
}

interface ApiResponseMeta {
  message: string;
}

interface ApiResponseData {
  response?: {
    meta?: ApiResponseMeta;
  };
}

async function makeApiCallService(
  url: string,
  options: RequestOptions = {}
): Promise<IResponse | null> {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    const response = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: JSON.stringify(options.body),
    });

    if (!response.ok) {
      const res: ApiResponseData = await response.json();
      toast({
        variant: "destructive",
        title: "Error",
        description: res.response?.meta?.message || "An error occurred.",
      });
      return null;
    }

    const data: ApiResponseData = await response.json();
    if (response.ok) {
      toast({
        variant: "default",
        title: "Success",
        description: data.response?.meta?.message || "Request was successful.",
      });
    }

    return data as unknown as IResponse;
  } catch (error) {
    toast({
      title: "API Service error",
      description: `An error occurred while making the API call: ${
        (error as Error)?.message || "Unknown error"
      }`,
    });

    return null;
  }
}

export default makeApiCallService;