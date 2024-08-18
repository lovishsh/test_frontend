"use client";
import { tenantDetails } from "@/api/authRoutes";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Home() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['tenant'], // Use an array for the query key
        queryFn: tenantDetails, // Your async function to fetch tenant details
      });
      
    console.log(data);
  return (
    <div>
      <h1>home dashboard</h1>
    </div>
  );
}
