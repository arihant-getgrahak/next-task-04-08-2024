"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { CommentType } from "@/types/commentType";

export default function useUserFetch(
  api: string
): [CommentType[] | null, boolean, string | null] {
  const [data, setData] = useState<CommentType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchApi() {
    try {
      const res = await axios.get(api, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
      } else {
        setError(res.statusText);
        setLoading(false);
      }
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data);
        setLoading(false);
      } else if (err.request) {
        setError(err.request);
        setLoading(false);
      } else {
        setError(err.message);
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApi();
  }, [api]);
  return [data, loading, error];
}
