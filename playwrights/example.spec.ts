import { test, expect } from "@playwright/test";
import { exec } from "child_process";
const baseURL = "http://localhost:5173";
test("has title", async ({ page }) => {
  await page.goto(baseURL);
  //  await page.screenshot({ path: `screenshot.png` });

  // アプリケーションのタイトルを確認する
  await expect(page).toHaveTitle("Vite App");
  //  await expect(page).toHaveScreenshot("screenshot.png");
});

test("get root items", async ({ page }) => {
  await page.goto(baseURL);

  // ヘッダーのタイトルを確認する
  await expect(
    page.getByRole("heading", { name: "Vue3 旅日記" })
  ).toBeVisible();

  // リンクをクリックする ＊同じ名前のリンクが複数ある場合は、エラーになる
  await page.getByRole("link", { name: "Vite" }).click();
  await page.getByRole("link", { name: "Vue 3" }).click();
});

test("get article item", async ({ page }) => {
  await page.goto("http://localhost:5173/article/1");

  // 指定のページに遷移したことを確認する
  await expect(page).toHaveURL(/.*article/);
});
