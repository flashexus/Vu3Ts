import { test, expect } from "@playwright/test";
//import("env-ci");

const baseURL = "/";

test("has title", async ({ page }) => {
  await page.goto(baseURL);

  // アプリケーションのタイトルを確認する
  await expect(page).toHaveTitle("Vite App");
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
  await page.goto("/article/1");

  // 指定のページに遷移したことを確認する
  await expect(page).toHaveURL(/.*article/);
});
console.log(process.env.CI);
if (process.env.CI != "true") {
  test("root snapshot", async ({ page }) => {
    await page.goto(baseURL);

    // スナップショットを取得する
    await expect(page).toHaveScreenshot();
  });

  test("header shanpshot", async ({ page }) => {
    await page.goto(baseURL);

    // スナップショットを取得する
    await expect(page.locator(".v-toolbar")).toHaveScreenshot(
      "header-shanpshot-1.png",
      { threshold: 0.3, maxDiffPixelRatio: 0.2 }
    );
  });
}
