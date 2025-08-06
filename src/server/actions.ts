// import prisma from "@/db/client.prisma.ts";
"use server";
import { revalidatePath } from "next/cache";
import prisma from "../db/client.prisma";
import { newTag } from "../types/define";
import { redirect } from "next/navigation";

export const addTags = async (tags: newTag) => {
  const { title, content, link } = tags;
  const newTag = await prisma.tag.create({
    data: {
      title: title,
      content: content,
      link: link,
    },
  });
  if (!newTag) return { message: "failed error", status: 501 };
  revalidatePath("/");
  redirect("/");
  return { message: "saved tags", status: 200 };
};

export const getTags = async () => {
  try {
    const allTags = await prisma.tag.findMany();
    // if (!allTags) return { status: 403 };
    return allTags;
  } catch (error) {
    console.log(error);
  }
};
