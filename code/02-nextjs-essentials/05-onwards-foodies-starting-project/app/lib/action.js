"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
function isValidText(text) {
  // Check if text is not defined, null, or an empty string
  if (!text || typeof text !== "string") {
    return false;
  }
  // Trim whitespace and check if the resulting string is empty
  return text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isValidText(meal.title) ||
    isValidText(meal.summary) ||
    isValidText(meal.instructions) ||
    isValidText(meal.image) ||
    isValidText(meal.creator) ||
    isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image.size === 0
  ) {
    return { message: "Invalid input" };
  }

  await saveMeal(meal); // จะรีเทิร์น promis ต้องใส่ await ด้วย
  redirect("/meals");
}
