const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN

export async function getProducts(page = 1) {
  const res = await fetch(
    `${BASE_URL}/products/all/category?page=${page}&limit=8`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) throw new Error("Failed to fetch products")

  const json = await res.json()

  return {
    products: json.data.data,
    nextPage: json.data.next_page_url,
  }
}