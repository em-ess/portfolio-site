"use server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactEmail from "@/email/contact-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    await resend.emails.send({
      from: "Michelle S Dev Contact <onboarding@resend.dev>",
      to: "michssong@gmail.com",
      subject: "Message from contact form",

      reply_to: senderEmail as string,
      react: React.createElement(ContactEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
