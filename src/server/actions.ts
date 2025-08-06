// import prisma from "@/db/client.prisma.ts";
"use server";
import prisma from "../db/client.prisma";
import { newTag } from "../types/define";

export const addTags = async (tags: newTag) => {
  const { title, content, link } = tags;
  try {
    const newTag = await prisma.tag.create({
      data: {
        title: title,
        content: content,
        link: link,
      },
    });
    if (!newTag) return { message: "failed error", status: 501 };
    return { message: "saved tags", status: 200 };
  } catch (error) {
    console.log(error);
  }
};
