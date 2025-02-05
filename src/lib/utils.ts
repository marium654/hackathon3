import { clsx, type ClassValue } from "clsx"
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    throw new Error(error);
  } else {
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
}


export const successResponse = <T>(
  data: T,
  message: string = "Success",
  code = 200
) => {
  const response = {
    meta: {
      success: true,
      message,
    },
    data,
  };
  return NextResponse.json({ response }, { status: code });
};

export const errorResponse = <T>(
  message: string = "Error",
  code = 400,
  data: T = null as unknown as T
) => {
  const response = {
    meta: {
      success: false,
      message,
    },
    data,
  };
  return NextResponse.json({ response }, { status: code });
};