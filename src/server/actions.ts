// import prisma from "@/db/client.prisma.ts";
"use server";
import prisma from "../db/client.prisma";
import { newTag } from "../types/define";

export const addTags = async (tags: newTag) => {
  const { title, content, links } = tags;
  try {
    const newTag = await prisma.tag.create({
      data: {
        title: title,
        content: content,
        links: links,
      },
    });
    if (!newTag) return { message: "failed error", status: 501 };
    return { message: "saved tags", status: 200 };
  } catch (error) {
    console.log(error);
  }
};
