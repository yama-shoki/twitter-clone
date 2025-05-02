// src/lib/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

// Cloudinaryの設定
cloudinary.config({
  cloud_name: "dahjmzz3o",
  api_key: "884158258817298",
  api_secret: "D5fluBEiOsemQ8btdR4BNqtL8S8",
});

export async function uploadImage(base64Image: string): Promise<string> {
  try {
    // Base64形式の画像データの先頭部分の処理
    const formattedImage = base64Image.includes("base64")
      ? base64Image
      : `data:image/jpeg;base64,${base64Image}`;

    // Cloudinaryにアップロード
    const result = await cloudinary.uploader.upload(formattedImage, {
      folder: "posts", // 画像を保存するフォルダ名
    });

    if (!result || !result.secure_url) {
      throw new Error("アップロード結果が無効です");
    }

    // アップロードされた画像のURLを返す
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinaryへのアップロードエラー:", error);
    throw new Error("画像のアップロードに失敗しました");
  }
}
